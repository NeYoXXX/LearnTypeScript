// 类型检查机制
/*
  typescript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。
 作用：辅助开发，提高开发效率
 
  类型推断
  类型兼容性
  类型保护
 */
/*
  类型推断
  不需要指定变量的类型（函数的返回值类型），typescript可以根据某些规则自动地为其推断出一个类型
  
  基础类型推断
  最佳通用类型推断
  上下文类型推断
 */

// 基础类型推断
let a1 = 1
let c = (x=1) => x+1
// 最佳通用类型推断
let b =[1,null]
// 上下文类型推断
// 从有面的window.onkeydown推断出event的事件类型
window.onkeydown = (event)=>{

}
// 类型断言
interface Foo{
    bar:number
}
let foo = {} as Foo
foo.bar = 1
/*
    避免滥用对上下文环境有充足的预判
*/

// 类型的兼容性
/*
    当一个类型Y可以被赋值给另一个类型X时，就可以说类型X兼容类型Y
    X兼容Y:X(目标类型)=Y(源类型)
*/
let s:string = 'a'
// s = null

// 接口兼容性
interface X{
    a:any,
    b:any
}
interface Y{
    a:any,
    b:any,
    c:any
}
let x:X = {a:1, b:2}
let y:Y = {a:1, b:2, c:3}
// X Y可以相互赋值吗？
x = y
// y = x // => 报错
/* 
    只要y接口具备x接口的所有属性 甚至还有额外的成员c 可以认为y是x的类型 （鸭式变形法）
    原类型有目标类型的必要属性就可以赋值（接口之间相互兼容，接口少的兼容接口多的）
*/

// 函数的兼容性
type Handler = (a:number, b:number) => void
function hof(handler:Handler){
    return handler
}
let handler1 = (a:number) => {}
hof(handler1)
let handler2 = (a:number,c:number,b:number) => {}
// hof(handler2) // => 报错
/*

    是否兼容，通常发生在两个函数相互赋值的情况下
    如：函数作为参数的情况下
    Handler 目标类型，handler 原类型
    两个函数兼容必须要满足的三个条件：
    1.参数的个数 要求目标函数的参数个数，一定要多于原函数的参数个数
    2.参数类型
    3.返回值类型
*/

// 可选参数和剩余参数，参数个数相等
let a2 = (p1:number, p2:number) => {}
let b1 = (p1?:number, p2?:number) => {}
let c1 = (...args:number[]) => {}
a2 = b1
a2 = c1
// b1 = c1 // => 报错
// b1 = a2 // => 报错
c1 = a2
c1 = b1
/*
    在满足参数个数相等的情况下：
    1.固定参数是可以兼容，可选参数和剩余参数
    2.可选参数是不兼容，固定参数和剩余参数，可以通过strictFunctionTypes = false配置来兼容
    3.剩余参数可以兼容固定参数和可选参数
 */

// 参数类型
let handler3 = (a:string)=>{}
// hof(handler3) // =>报错

interface Point3D{
    x:number,
    y:number,
    z:number
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p23 // => 报错
/*
    成员个数多的兼容成员个数少的，可以通过strictFunctionTypes = false配置来兼容
    函数参数相互赋值的情况，叫做函数参数的双向协变，这种情况允许我们把精确的类型赋值给不太精确的类型，这样就不用把不精确的类型断言成精确的类型了 ？？
*/

// 返回值类型
let f1 = () => ({name: 'Alice'})
let g = () => ({name: 'Alice', location: 'Beijing'})
f1 = g
// g = f1 // =>报错
/* 成员少的兼容成员多的 （鸭式变形法） */

// 函数重载
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}
/* 
    重载分为，函数重载列表和函数具体实现
    列表中的函数就是目标函数，具体的实现就是原函数
*/

// 枚举类型
// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 1
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple // => 报错
/* 枚举类型和number是可以相互兼容的，枚举之间是两者不兼容的 */

// 类兼容性
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    private name: string = ''
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    private name: string = ''
}
class C1 extends A {}
let aa = new A(1, 2)
let bb = new B(1)
// aa = bb
// bb = aa
let cc = new C1(1, 2)
aa = cc
cc = aa
/* 
    连个类比较兼容是，构造函数和静态成员是不参与比较的
    如果两个类有相同的实例成员，那么它们的实例就会相互兼容 
    如果连个类中有相同的私有成员，则两个类不兼容，这时候只有父类和子类的实例两者之间相互兼容
    class A {
        constructor(p: number, q: number) {}
        id: number = 1
        private name: string = ''
    }
    class B {
        static s = 1
        constructor(p: number) {}
        id: number = 2
        private name: string = ''
    }
    class C1 extends A {}
    let aa = new A(1, 2)
    let bb = new B(1)
    // aa = bb => 报错
    // bb = aa => 报错
    let cc = new C1(1, 2)
    aa = cc
    cc = aa
*/

// 泛型兼容性
interface Empty<T> {
    // value: T => 增加会报错
}
let obj11: Empty<number> = {};
let obj2: Empty<string> = {};
obj11 = obj2

// 泛型函数
let log1 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log2 = <U>(y: U): U => {
    console.log('y')
    return y
}
log1 = log2
/* 
    1.只有类型参数T，在接口成员使用的时候，会影响泛型的兼容性
    2.如果连个泛型函数定义相同，没有指定类型参数它们之间也是可以相互兼容的
*/

/*
    总结兼容性口诀：
    1.结构之间兼容：成员少的兼容成员多的，
    2.函数之间兼容：参数多的兼容参数少的
*/
