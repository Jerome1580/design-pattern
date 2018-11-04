class Circle{
    draw(){
        console.log('画圆形');
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle
    }
    draw(){
        this.circle.draw()
        this.setRedBorder(this.circle)
    }
    setRedBorder(circle){
        console.log(circle);
        console.log('设置红色边框');
    }

}
let obj = new Circle()
let obj1 = new Decorator(obj)

/* obj.draw() */
obj1.draw()