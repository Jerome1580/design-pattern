// 明星
let star = {
    name:'张xx',
    age:25,
    phone:'1803214323'
}

// 经纪人
let agent = new Proxy(star,{
    get:function(target, key){
        if( key === 'phone'){
            return '1673276644'
        }
        if( key === 'price'){
            // 明星不报价
            return 120000
        }
        return target[key]
    },
    set:function(target, key, val){
        if( key === 'customPrice'){
            if(val < 100000){
                throw new Error('价格太低')
            }else{
                target[key] = val
                return true
            }
        }
    }
})

// test 
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 170000
