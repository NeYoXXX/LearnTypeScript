// 交叉类型：将多个类型合并成一个类型，新的类型将具有所有类型的特性，特别适合对象混用的场景
interface DogInterface{
    run():void
}
interface CatInterface{
    jump():void
}

let pet:DogInterface&CatInterface = {
    run(){},
    jump(){}
}
/* 取所有类型的并集 */ 

// 联合类型：声明的类型并不确定可以为多个类型中的一个
let a11: number | string = 1
let b11: 'a' | 'b' | 'c' // 取值为abc的一种
let c11: 1 | 2 | 3 // 取值为123的一种

class Dog11 implements DogInterface {
    run() {}
    eat() {}
}
class Cat1  implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog11() : new Cat1();
    // pet.run() => 报错
    // pet.jump() => 报错
    pet.eat() // 如果此变量被判定为联合类型，那么此类型只能访问，联合类型中共有的成员，即eat()
    // 在这种情况下，只能访问所有类成员的交集
    return pet
}

// 可区分的联合类型，本质上是结合联合类型和字面量类型的类型保护方法，
// 核心思想，一个类型如果是多个类型的联合类型，并且每个类型之间有一个公共的属性，那么我们可以用这个公共属性创建不同的类型保护区块

interface Square {
    kind: "square"; // 表明类型
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle // 联合类型
function area(s: Shape) {
    switch (s.kind) { // 通过公共属性kind创建不同类型保护区块
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.radius ** 2
        default:
            return ((e: never) => {throw new Error(e)})(s)
            // 检查s是否是never类型，如果是never类型说明前面的分支都被覆盖，如果不是说明前面的分支有遗漏
    }
}
console.log(area({kind: 'circle', radius: 1}))

// 索引类型
// 需求：从对象中获取某些属性的值，并建立一个数组
let obj111 ={
    a:1,
    b:2,
    c:3
}

function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}
getValues(obj,['e','f']) // => [undefined,undefined]
// obj中并没有e和f，但没有报错

// 概念1：索引类型的查询操作符（keyof T）表示类型T的所有公共属性字面量的联合类型
interface Obj{
    a:number,
    b:string
}
let key: keyof Obj // key 变量变成字符串'a'和'b'的联合类型

// 概念2：索引访问操作符（T[K]）表示对象T的属性K所代表的类型
let value: Obj['a']

// 概念3:泛型约束（T extends U）泛型变量继承某个类型获取某些属性

// 结合以上三种概念，改造getValues1函数
function getValues1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}
// getValues1(obj,['e','f']) // => 报错

// 映射类型：从旧的类型生成一个新的类型，本质上是预先定义的泛型接口，通常结合索引类型获取对象的属性和属性值，从而将一个对象变成我们想要的结构
// 需求：把对象中的所有属性变成只读
interface Obj21 {
    a: string;
    b: number;
}
/* 
    内置函数
    Readonly可索引类型的泛型接口 
    Partial Pick Record */
type ReadonlyObj = Readonly<Obj21>

type PartialObj = Partial<Obj21>

type PickObj = Pick<Obj21, 'a' | 'b'>
// 以上称之为同态，作用与object属性，而不会引用新的属性

// 非同态
type RecordObj = Record<'x' | 'y', Obj21>


// 条件类型：使用条件表达式所决定的类型
// （T extends U ? X : Y）如果类型T可以赋值给类型U，结果类型就是X类型，否则是Y类型，不唯一性，灵活性
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";
type T1 = TypeName<string>
type T2 = TypeName<string[]>

// 分布式条件类型
// （T extends U ? X : Y）T如果是联合类型的情况下：如
// （(A|B) extends U ? X : Y）结果类型会变成多个条件类型的联合类型
//  (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>
// 利用这个特性，进行类型过滤


type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T, null | undefined>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>
// NonNullable<T>

// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">

// ReturnType<T>
type T8 = ReturnType<() => string>











