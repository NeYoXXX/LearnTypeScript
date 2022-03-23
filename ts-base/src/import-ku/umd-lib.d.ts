declare namespace umdLib {
    const version: string
    function doSomething(): void
}

export as namespace umdLib

export = umdLib

/* 
    export as namespace 专为umd库用的语句，umd声明文件不可缺语句 
    通过全局的方式，使用umd库，需要把 allowUmdGlobalAccess = true 这个配置项
*/
