// 函数的定义 有四种方式
function add4(x:number,y:number){
    return x+y
}

// 用变量定义函数类型
let add1:(x:number,y:number)=>number

// 用接口定义
interface add2{
    (x:number,y:number):number
}
// 以上两种定义方式等价

// 类型别名
type add3 = (x:number,y:number)=>number
// 后三种只是函数类型的定义，并没有具体的实现

// 可选参数，可选参数必须位于必选参数之后
function add5(x: number,y?:number){
    return y? x+y : x
}

// 默认值
function add6(x:number, y=0, z:number, q=1){
    return x+y+z+q
}
add6(1,undefined,2,undefined)

// 多参数
function add7(x:number,...rest:number[]){
    return x+rest.reduce((pre,cur)=>pre+cur)
}
add7(1,2,3,4,5,6)

// 重载
function add8(...rest:number[]):number
function add8(...rest:string[]):string
function add8(...rest:any[]):any{
    let first = rest[0]
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,cur)=>pre+cur)
    }
}
// 建议把最容易匹配的重载写到最前面






