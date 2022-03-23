// 接口可以用来约束 对象函数以及类的结构和类型，

// 对象类型接口

interface List{
    readonly id:number, // 只读属性
    name:string,
    age?:number // 可选属性，表示可以有，或者没有
}

interface Result{
    data:List[]
}

function render(result:Result){
    result.data.forEach((value)=>{
        console.log(value.id,value.name);
        if(value.age){
            console.log(value.age);
            // value.id++
        }
    })
}

let result ={
    data:[
        {id:1,name:'',age:12},
        {id:2,name:''}
    ]
}

render(result)
/*
    如果多一个字段age,{id:1,name:'',age:12} 并没有报错，这是ts使用了一种鸭式变形法，是动态语言类型风格，
    简单来说：传入的对象满足对象的必要条件，就是被允许的，也可以通过类型检查
    例外：
    如果render使用对象字面量，会有类型检查，如：
    render({
        data:[
            {id:1,name:'',age:12},
            {id:2,name:''}
        ]
    })

    绕过类型检查有三种方式：
    1.定义变量传入，上面的例子
    2.使用类型断言
    render({
        data:[
            {id:1,name:'',age:12},
            {id:2,name:''}
        ]
    } as Result)
    类型的含义是告诉编译器，知道此变量的类型就是Result，这样就会绕过类型检查
    另一种类型断言方式，等价于上面：
    render(<Result>{
        data:[
            {id:1,name:'',age:12},
            {id:2,name:''}
        ]
    })
    3.使用字符串索引签名，含义是用任意的字符串去索引List可以得到任意的结果，这样List可以接受多个属性
    interface List{
        id:number,
        name:string,
        [x: string]: any
    }
    render({
        data:[
            {id:1,name:'',age:12,age1:32}, // 增加多个也不会报错
            {id:2,name:''}
        ]
    })


*/

interface StringArray{
    [index:number]:string
}
// 用任意数字去索引stringArray都会得到string，相当于声明了一个字符串类型的数组
let chars:StringArray = ['','1','2','3']

interface Names{
    [x:string]:string
}
// 含义任意的字符串去索引Names，得到的结果都是string
/*
    不允许声明number类型的成员，如：
    interface Names{
        [x:string]:string,
        y:number  // =>报错
    }
*/

// 混用索引签名
interface Names1{
    [x:string]:string
    [y:number]:string
}
/* 
    注意：数字索引签名的返回值，要是字符串索引签名返回的子类型，这是因为javascript会进行类型转换，例如：
    interface Names1{
        [x:string]:string1
        [y:number]:string2
    }
    string2 是 string1 的子类，否则报错 ？？为什么这样
*/
/*
    当不确定接口属性个数时，可以使用可索引类型接口，
    可索引类型接口，可以使用数字去索引，也可以使用字符串去索引
*/
