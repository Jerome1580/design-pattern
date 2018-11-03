class SingleObject {
    log(){
        console.log('login....');
    }

    static getInstance = (function(){
        let instance;
        return function(){
            if(!instance){
                instance = new SingleObject()
            }
            return instance
        }
    })()

    
}

let obj1 = SingleObject.getInstance()
obj1.log()

let obj2 = SingleObject.getInstance()
obj2.log()

console.log(obj1 === obj2);     // true  即为单例模式

console.log('====================================');
let obj3 = new SingleObject() // 无法完全控制
console.log(obj1 === obj3); // false