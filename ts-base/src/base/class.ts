class Dog{
    name:string // 成员属性类型注解
    constructor(name:string){
        this.name = name
    }
    run(){}
}
/*
    相同：在js或者ts中，类成员属性都是实例属性，而不是原型属性，类成员方法是实例方法
    不同：实例的属性必须具有初始值或者在构造函数中被初始化，如下：
    class Dog{
    name:string = ‘dog’ // 成员属性类型注解，具有初始值
    constructor(name:string){
        // this.name = name // 在构造函数中初始化
    }
}
*/

// 类的继承
class Husky extends Dog{
    color:string // 子类属性
    constructor(name:string, color:string){
        super(name) // 必须super调用
        this.color = color // 必须在super之后调用
    }
}

/*
  成员修饰符
  public color:string
  private color:string
  protected color:string
  readonly legs: number = 4 //只读属性
  static food: string = 'bones' // 只能通过类调用，实例化后不能调用，可以被继承

  构造函数的参数也可以添加修饰符，
  作用：将参数直接变成实例的属性，可以省略在类中的定义
  constructor(public name:string){
        this.name = name
  }
*/

// 抽象类，只能被继承，不能被实例化的类 
abstract class Animal{
    // 方法的具体实现
    eat(){
        console.log('eat')
    }
    // 抽象方法：不指定方法的具体实现
    // 明确知道子类有不同的实现，在父类中不用具体实现
    abstract sleep():void
}

class Cat extends Animal{
    constructor(public name:string){
        super()
        this.name = name
    }
    sleep(): void {
        console.log('Cat sleep');
        
    }
}
/*
    抽离出一些共性，有利于代码的复用和拓展
    可以实现多态，在父类中定义一个抽象方法，在多个子类中对这个方法有不同的实现
*/

class Dog1 extends Animal{
    sleep(): void {
        console.log('Dog1 sleep');
        
    }
}
let dog1 = new Dog1()

// 类的成员类型，this类型，类的方法可以直接返回this，方便实现链式调用
class WorkFlow{
    step1(){
        return this
    }
    step2(){
        return this
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow{
    next(){
        return this
    }
}
new MyFlow().next().step1().next().step2()