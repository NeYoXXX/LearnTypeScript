// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定

// 泛型定义函数
function log<T>(value:T):T{
    console.log(value)
    return value
}
log<string[]>(['1','2','3'])
log(['1','2','3'])
// 输入和返回值保持一致

// 泛型定义函数类型
type Log = <T>(value:T) => T
let myLog:Log = log // log是函数的具体实现

// 泛型接口
interface Log1{
    <T>(value:T):T
}
// 和类型别名定义方式，完全等价

// 泛型约束接口的其他成员
interface Log2<T>{ // => 接口的所有成员都可以受到泛型的约束
    (value:T):T
}
// 注意：当泛型变量约束了整个接口之后，在实现时，必须指定约束类型
let myLog2:Log2<number> = log

// 不指定类型，可以在接口中指定默认类型
interface Log3<T = string>{ // => 接口的所有成员都可以受到泛型的约束，并指定默认类型
    (value:T):T
}
let myLog3:Log3 = log

// 泛型类

class Log4<T>{
    run(value:T){
        console.log(value)
        return value
    }
}
let log4 = new Log4<number>()
log4.run(1)
let log41 = new Log4() // 不指定泛型约束，可以传入任何类型值
log41.run({x:1})
/*
    泛型不能应用于类的静态成员，如：
    static detail(){} => 报错
*/

// 泛型约束

interface Length{
    length:number
}
function log5<T extends Length>(value:T):T{
    console.log(value, value.length)
    return value
}
log5('')
log5([])
log5({length:1})
// log5(1) // => 报错
/*
    泛型T受到了一定约束，必须有length属性的
*/

/**
 * 1.函数和类可以轻松地支持多种类型，增强程序的拓展性
 * 2.不必写多条函数重载，冗长的联合声明，增强代码可读性
 * 3.灵活控制类型之间的约束
 */

