工程篇（08、10节）代码
=====================

Babel + TypeScript + Jest

# Babel + TypeScript 
Babel 如果不安装typescript也可以执行，但只能做ts文件的类型转换，不能做类型检查。（script => build）
TypeScript 修改配置 noEmit = true TS不会输出任何文件，只会做类型检查，typescript 在此项目中只做类型检查，不做文件转换。（script => type-check）

babel 转换 typescript 注意事项
四种语法在 babel 中不被编译
1. 命名空间（namespace） 编译会报错，所以不要使用
2. 类型断言 报错
```
let s = <A>{}
let s1 = {} as A
s1.a = 1
```
3. 常量枚举
```
const enum E { A, B }
```
4. 默认导出
```
export = s
```
目前前三种已经支持不会报错，第4中会报错

# jest
一般使用两个jest库（注意版本库要一一对应）
1. ts-jest 可以检测出类型错误，使用ts-jest必须使用 jest.config.js 文件进行配置，运行命令`pnpx ts-jest config:init`
```
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```
再运行`pnpx run test`
2. babel-jest 不能检测出类型错误，可以直接使用`pnpm run test`执行（不使用 jest.config.js）
如果需要类型检查，需要运行类型检查脚本`pnpm run type-check`
