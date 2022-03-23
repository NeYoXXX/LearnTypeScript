/// <reference path="a.ts" />
namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

console.log(Shape.cricle(2))
console.log(Shape.square(2))

import cricle = Shape.cricle // 对命名空间cricle其别名，方便使用
console.log(cricle(2))

/*
    命名空间和模块不要混用，不要在一个模块中使用命名空间，最好在一个全局的环境中使用，本质上就是闭包，隔离作用域
    （命名空间是一种老方式，可能用不到，用模块系统就可以）
    使用方式： 编译成js-通过html引入

    命名空间成员的别名问题：
    访问命名空间成员在所有的前面加前缀  
*/