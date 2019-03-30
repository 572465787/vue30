class Parent{
  constructor(){//构造函数
    this.name =1 
  }
  c=1
  static drink(){ //类上的方法
	  console.log('喝水')
  }
  eat(a){ //挂在原型上的函数
	 console.log(a)  
  }
}
class children extends parent{
    constructor(){
		super()
	}
}
let p = new Parent;
console.log(p.c)