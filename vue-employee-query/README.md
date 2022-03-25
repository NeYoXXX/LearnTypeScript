webpack-node-externals 插件打包时不会把node源码打包


# 发布组件
1. package.json 中增加 types 字段，指明声明文件的位置（因为打包后是js文件，需要有声明文件）
2. npm login
3. npm publish