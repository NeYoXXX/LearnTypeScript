// 原始类型
let bool:boolean = true
let num:number = 1
let str:string = ''

// 数组
let arr1:number[]=[1,2,3]
let arr2:Array<number> = [1,2,3]

// 元祖
let tuple:[number,string] = [0,'']
tuple.push(2)
/*
[0,'',2]
可以使用元组的push方法，在元组中添加元素，但不建议这样使用
次操作可能bug
*/

let func = (x:number,y:string):string=> x+y
let compute : (x:number,y:string)=>string
// (x:number,y:string)=>string 是注解
compute=(a,b)=>a+b

let obj:object = {x:1}
// obj.x = 2
// 出错，应该为object的每一个成员都注解类型
let obj1:{x:number,y:string} = {x:1,y:''}
// obj1.x =2

let s1:symbol= Symbol()
let s2 = Symbol()

let un:undefined = undefined
// 如果注解为undefined,则值只能是undefined，其它值会报错
let nu:null = null
// num = undefined
// str = null
// 上两行报错： strictNullChecks = false 配置可以允许其他注解类型值为undefined和null
// 或 使用联合注解 即 let num:number | undefined= 1, let str:string | null = '' 

// void
let noReturn = ()=>{}
// ts中表示没有任何返回值的类型
/*
    js中 void 是一个操作符，可以让任何表达式返回undefined
    void 0 => undefined
    因为undefined不是保留字，可以定义undefined变量
    (function(){
        let undefined = 0
        console.log(undefined) => 0
    })()
    在闭包中undefined等于0，void避免这种事情发生 ？？
*/

// any
let a
a=()=>{}
a=[]
// 任何类型，和js没有区别，不是特殊情况不建议使用any

// never
let error=()=>{
    throw ''
}
let endless=()=>{
    while(1){}
}
/*
  表示永远没有返回值的类型,有两种情况
  1: 函数抛出异常
  2: 函数死循环
*/ 

