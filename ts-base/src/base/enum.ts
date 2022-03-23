// 枚举：一组有名字的常量集合
// 代替硬编码

// 数字枚举
enum Role{
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter); // => 0
/* 
    默认取值从0开始，在运行环境下被编译成对象
    若想从1开始请显示指定，如：Reporter=1
    原理：反响映射 针对数字枚举
*/

// 字符串枚举
enum Message{
    Success='成功',
    Fail = '失败'
}

// 异构枚举
enum Answer{
    N,
    Y = 'yes'
}
// 数字枚举和字符串枚举一同使用，容易混淆，不建议使用

enum Char{
    // const
    a,
    b = Char.a,
    c = 1+3,
    // computed
    d = Math.random(),
    e = '123'.length
}
/*
    const 常量枚举 
    1.没有初始值的情况 
    2.对已有枚举成员的引用 
    3.常量表达式 
    常量枚举成员会在编译的时候计算出结果，以常量的形式出现在运行环境

    computed 枚举（需要被计算的枚举成员）
    非常量的表达式
    不会在编译阶段计算，而是会保留在程序的执行阶段

    注意：在conputed之后的枚举成员一定要有初始值，否则会报错
*/

// 常量枚举
const enum Month{
    Jan,
    Feb,
    Mar
}
/*
    常量枚举特性，会在编译阶段移除（编译后没有任何代码）
    作用：当不需要一个对象，而需要对象的值的时候，用常量枚举，会减少在编译环境中的代码
    如：
    let month = [Month.Jan,Month.Feb,Month.Mar]
    枚举直接替换了常量，会比较简洁  ？？
*/

// 枚举类型
enum E {a,b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}
let e: E = 3
let f: F = 3
let e1: E.a = 1
let e2: E.b
let e3: E.a = 1
let g1: G = G.a
let g2: G.a = G.a
/*
  在某些情况下，枚举和枚举成员都可以作为单独的类型出现
  1.枚举成员没有任何初始值
  2.所有成员都是数字枚举
  3.所有成员都是字符串枚举
 */

  console.log(e);
  console.log(e3);
  

