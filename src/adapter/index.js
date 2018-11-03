class Adapter{
    specificRequest(){
        return '外国插头'
    }
}

class Target{
    constructor(){
        this.target = new Adapter()
        this.notice = this.target.specificRequest()
    }

    request(){
        return `${this.notice} - 转换器 - 中国插头`
    }
}

let obj = new Target()
console.log(obj.request());