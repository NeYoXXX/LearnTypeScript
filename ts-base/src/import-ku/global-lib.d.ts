// 全局类库，即不需要import就可使用该库的函数和属性
declare function globalLib(options:globalLib.Options):void;

declare namespace globalLib{
    const version:string;
    function doSomething():void;
    interface Options{
        [key:string]:any
    }
}
/* declare 为一个外部变量提供类型声明 */
/* 函数和命名空间的声明合并，相当于为这个函数globalLib添加了一些属性，
接口Options放在命名空间中，不对全局暴露？？？ */

