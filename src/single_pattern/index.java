public class SingleObject {
    // 注意，私有化构造函数，外部不能new , 只能内容new ！！！
    private  SingleObject() {
    }

    // 唯一被new 出来的对象
    private SingleObject instance = null;

    // 获取对象的唯一接口
    public SingleObject getInstance(){
        if(instance === null){
            // 只new一次
            instance = new SingleObject()
        }
        return instance
    }

    // 对象方法
    public void log(username,password){
        System.out.println('login....')
    }

}

// 用法
public class SInglePatternDemo{
    public static void main(String[] args){

        SingleObject object = SingleObject.getInstance()
        object.login()
    }
}