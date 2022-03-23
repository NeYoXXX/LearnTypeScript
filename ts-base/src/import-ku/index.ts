/*
    查找社区提供的声明文件网址：
    ？？？

*/

import $ from 'jquery'

$('.app').css('color','red')

// globalLib()

/*
    两种插件，模块插件和全局插件
    模块化的插件：给外部类库添加自定义方法
    全局插件：给全局变量添加方法
 */
import moment from 'moment'
declare module 'moment'{
    export function myFunction():void;
}
moment.myFunction = ()=>{}
/* 模块化的插件 */

declare global {
    namespace globalLib{
        function doAnything(): void;
    }
}
globalLib.doAnything = () => {}
/* 全局插件,这种方式对全局命名空间造成污染，一般不这样做 */

/* 声明文件的依赖，类库比较大，那么声明文件也会比较大，一般按模块划分，按模块划分的声明文件，存在一定的依赖关系 */
/*
/// <reference types="sizzle"/>
/// <reference path="JQuery.d.ts"/>
types 是模块依赖
path 是路径依赖
*/
