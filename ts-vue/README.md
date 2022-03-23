实战篇（Vue 01节）代码
===============


默认导入vue文件会报错，因为ts无法识别后缀为vue的文件，
解决方案：
在 src 文件夹下新建声明文件 vue-shims.d.ts
```
// vue 当作模块，并且需要导出vue的构造器
declare module '*.vue' {
    import Vue from 'vue' // 导入vue
    export default Vue // 导入vue构造器
  }
```