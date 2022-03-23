// 声明合并：编译器把程序中多个相同名称的声明合并成一个声明

// 接口的声明合并
interface A1 {
    x: number;
    // y: string; // => 报错
    foo(bar: number): number; // 5
    foo(bar: 'a'): string; // 2 // 先声明接口的函数字面量函数 排第二
}

interface A1 {
    y: number;
    foo(bar: string): string; // 3 // 默认函数重载排在第一位，（默认后声明的接口的第一个函数声明），再此是第三原因是有个函数字面量声明，
    foo(bar: string[]): string[]; // 4
    foo(bar: 'b'): string; // 1  // 后声明接口的函数字面量函数 排第一
}

let a4: A1 = {
    x: 1,
    y: 2,
    foo(bar: any) {
        return bar
    }
}
/* 
    不在一个文件中也可以发生接口声明合并 
    成员：
    非函数的成员，保证其唯一性，如果不唯一类型必须相同 
    y: string; // => 报错
    函数成员，会被认为是函数重载，接口中定义的函数，是这个函数重载的列表
    （函数重载，注意函数声明的顺序，编译器会按顺序进行匹配）
*/

// 命名空间和函数的合并
class C2 {}
namespace C2 {
    export let state = 1
}
console.log(C2.state)
// 对C2类增加了静态的state属性

function Lib() {}
namespace Lib {
    export let version = '1.0'
}
console.log(Lib.version)
// 对Lib函数增加了version属性

enum Color {
    Red1,
    Yellow1,
    Blue
}
namespace Color {
    export function mix() {}
}
console.log(Color)
// 给枚举类型增加了方法
