import { readonly , deprecate } from 'core-decorators';

class Person{
    @readonly
    name(){
        return 'zhangsan'
    }

    @deprecate   // 弃用的
    sing(){
        return '111'
    }

    @deprecate('即将弃用',{url:'www.baidu.com'})
    swing(){
        return '111'
    }
}

let p = new Person()