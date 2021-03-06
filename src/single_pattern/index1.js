// 登录框
class LoginForm {
    constructor(){
        this.state = 'hide'
    }
    show(){
        if(this.state === 'show'){
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功');
    }
    hide(){
        if(this.state === 'hide'){
            alert('已经隐藏')
            return
        }
        this.state = 'show'
        console.log('登录框隐藏成功');
    }

    static getInstance = (function(){
        let instance
        return function(){
            if(!instance){
                instance = new LoginForm()
            }
            return instance
        }
    })()
}

let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.show()