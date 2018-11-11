
export function log(type){
    return function(target, name, decsciptor){
        let oldValue = decsciptor.value
        
        decsciptor.value = function(){
            // 在此统一打印日志
            console.log(`日志上报 ${type}`);
            // 执行原有的方法
            return oldValue.apply(this, arguments)
        }
        return decsciptor
    }
}