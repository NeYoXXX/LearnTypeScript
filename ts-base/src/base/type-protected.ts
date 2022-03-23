/*
类型保护
typescript 能够在特定的区块中保证变量属于某种确定的类型
可以在此区块中放心地引用次类型的属性，或者调用此类型的方法

*/

enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    js: any
}

// lang is Java ？？
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    
    //  创建类型保护函数，判断对象的类型
    if (isJava(lang)) {
        // 创建了类型保护区块，可以在此区块中使用相应的类型
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }


    /*  不使用类型保护，要使用类型断言来区分类别，比较麻烦且不友好
        使用以下方式会报错，需要使用类型断言指明lang.helloJava中的lang是Java类
        if (lang.helloJava) {
            lang.helloJava();
        } 
    */ 
    // 类型断言   
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJavaScript();
    // }

    // instanceof 
    // if (lang instanceof Java) {
    //     lang.helloJava()
    //     // lang.helloJavaScript()
    // } else {
    //     lang.helloJavaScript()
    // }

    // in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // typeof
    // if (typeof x === 'string') {
    //     console.log(x.length)
    // } else {
    //     console.log(x.toFixed(2))
    // }

    return lang;
}

getLanguage(Type.Week, 1)
