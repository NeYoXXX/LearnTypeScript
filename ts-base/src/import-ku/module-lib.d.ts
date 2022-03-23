declare function moduleLib(options: Options): void

interface Options {
    [key: string]: any
}

declare namespace moduleLib {
    // export const version: string // 加入export关键字与下面的声明没有区别
    const version: string
    function doSomething(): void
}

export = moduleLib
