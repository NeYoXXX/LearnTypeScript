// 函数的定义 有四种方式
function add2(x:number,y:number){
    return x+y
}

// 用变量定义函数类型
let add:(x:number,y:number)=>number

// 用接口定义
interface Add{
    (x:number,y:number):number
}
// 以上两种定义方式等价

// 类型别名
type add1 = (x:number,y:number)=>number

// 使用
let handleAdd:add1 = (a,b)=>a+b

// 混合类型接口，一个接口即可以定义一个函数，也可以像对象一样有属性和方法
interface Lib{
    (): void,
    version: string,
    doSomeThing(): void 
}

function getLib(){
    let lib:Lib = (()=>{}) as Lib // 需要使用类型断言as，否则会报错
    lib.version = '1.2'
    lib.doSomeThing = ()=>{}
    return lib
}

let lib1 = getLib()
lib1()
lib1.doSomeThing()
lib1.version

