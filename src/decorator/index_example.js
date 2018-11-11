@testDec
class A {

}

function testDec(target){
    target.isDec = true
}

alert(A.isDec)

// 也可以传参数，记得要返回一个函数
@testDec2(true)
class B{

}

function testDec2(isDec){
    return function(target){
        target.isDec = isDec
    }
}

alert(B.isDec)

// mixins 装饰类
function mixins(...list){
    return function(target){
        Object.assign(target.prototype,...list)
    }
}

const Foo = {
    foo(){
        alert('foo')
    }
}

@mixins(Foo)
class Myclass{}

let minx = new Myclass()
minx.foo()

// readonly  装饰方法
function readonly(target,name,descripter){
    console.log(arguments);
    descripter.writable = false;
    return descripter
}


class Person{
    constructor(){
        this.first = 'A'
        this.last = 'B'
    }

    @readonly
    name(){
        return `${this.first} ${this.last}`
    }
}

let p = new Person()
console.log(p.name());
// p.name = function(){ alert(100)}

// log 装饰方法
function log(target,name,descripter){
    // 就是传进的函数
    let oldValue = descripter.value;
    descripter.value = function(){
        console.log(`calling ${name} with`,arguments);
        return oldValue.apply(this,arguments)
    }
    return descriptor;
}


class Math{

    @log
    add(a, b){
        return a + b
    }
}

let math = new Math()
const result = math.add(2,4)
console.log(result);
