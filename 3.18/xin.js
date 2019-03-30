// 拓展运算
// 作用吧数组或者对象展开
let obj = {name:'lili'}
let obj2 = {name:11}
let cobj = {...obj,...obj2}
cobj

let objj = {name:'lili'}
let objj2 = {age:11}
let cobjjj = {...objj,...objj2}
cobjjj

let objqk = {age:3,age:11}
objqk



// 数组 不会替换
let  a = [1,2,3,4],b = [1,2,3]
let c = [...a,...b]
c


// 当做拷贝 浅拷贝   深拷贝
let obc = {a:1,c:{l:3}}
// let c1 = {...obc}  //浅拷贝会被影响  浅拷贝为什么会被原来影响 因为拷贝出来的值包含引用值得时候引用地址没有改变  
let c1 = {...obc,c:{...obc.c}}  //  深拷贝就是拷贝出来的对象是一个新的不会被原来对象影响
obc.c.l = 4
c1


// 深拷贝的方法1  缺点 undefined 函数 date 等不能拷贝过去
let tobj = {a:1,c:{name:'zhangsan'}}
let cloneObj = JSON.parse(JSON.stringify(tobj))
cloneObj

tobj.c.name = 'lisi'
console.log(tobj)

// 深拷贝的方法2 递归（函数调用函数自身）
let target = {name:'lili',a:{age:3},b:[1,2],c:function(){}}
// 要把目标对象的key和val赋值给新的对象
// typeof   instanseof  constrcutor  object.prototype.tostring.call  判断数据类型
function deepClone(target){
	if(target==null)return null 
	if(target instanceof RegExp)return new RegExp(target)
	if(target instanceof Date)return new Date(target)
	if(typeof target!='object') return target
	// 如果是数组就会指向数组的构造函数  如果是对象就会指向对象的构造函数 
	let cloneObj = new target.constructor()
    for (let key in target){
		// cloneObj[key]= typeof target[key]=='object'?deepClone(target[key]):target[key]
		cloneObj[key]=deepClone(target[key])
    }
	return cloneObj
}     


// 如果一遍不是对象 会转换成为对象进行结构赋值 有2个例外（undfined null）不会被转化成对象，如果是会直接报错
let {length} = [1,2,3,5,6,8,4]
console.log(length)
let {__proto__} = 2
console.log(__proto__)






