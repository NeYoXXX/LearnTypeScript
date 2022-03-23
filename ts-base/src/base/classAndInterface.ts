// 类与接口之间的关系
interface Human{
    name:string,
    eat():void
}

class Asian implements Human{
    constructor(name:string){
        this.name = name
    }
    name:string
    eat(): void {
        
    }
}
/*
    1.一个接口可以约束类成员有哪些属性，以及它们的类型，子类可以添加自己的成员
    注意：类实现接口的时候，必须实现接口中声明的所有的属性
    2.接口只能约束类的公有成员
    如：
    private name:string =>报错
    3.接口不能约束类的构造函数
*/

// 接口的继承
interface Man extends Human{
    run():void
}
interface Child{
    cry():void
}
interface Boy extends Man, Child{}
let boy:Boy={
    name:'',
    run(){},
    eat(){},
    cry(){}
}
/*
    接口可以像类一样，相互继承，并且一个接口可以继承多个接口
    接口的继承可以抽离出可重用的接口，也可以像多个接口合并成一个接口
*/

// 接口继承类：接口把类的成员抽象出来，只有类的成员结构没有具体的实现
class Auto{
    state = 1
    // private state2 = 0
}

interface AutoInterface extends Auto{

}
class C implements AutoInterface{
    state: number = 1
}
class Bus extends Auto implements AutoInterface{

}
/*
    注意接口在抽离类成员的时候，不仅抽离public成员，而且还抽离了private和protected
    class Auto{
        state = 1
        private state2 = 0 // 添加
    }
    class C implements AutoInterface{ => 报错
        state: number = 1
    }
    原因是类implements接口时，需要实现接口的所有成员，但private成员，没办法实现
*/


