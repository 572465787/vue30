// 解构赋值
//  1.数组的结构赋值 左右结构类似 右边必须是数组或者类数组 按顺序 
 let [a,b,c]=[1,2,3]
 console.log(a,b,c)
//  省略的时候逗号作为占位符
let [f,,d]=[1,2,3]
 console.log(f,d)
let [aa,...bb]= [1,2,3]
console.log(aa,bb)
// 对象的解构赋值 按照key(属性) key必须相同
let  obj = {name:'lili',o1:'33'}
let {o1,name} = obj
console.log(name,o1)
// 在要解构的变量后面用：可以自己改名（别名）
let {name:nickname} = obj
console.log(nickname)
//如果右边不是对象 会转化为对象进行解构赋值 有2个例外(undfined,null)不会被转化成对象，如果是会直接报错 
let {length} = [1,2,3]
console.log(length)
let {__proto__} = 2
console.log(__proto__)
// 数组和对象解构赋值的时候可以给默认值 只有对应值是undefined(===)时候才会走默认值 
let [n,m=1]=[1] //[1,null] [1,undefined]
console.log(m)
let {v=1} = {a:'a',v:undefined} //{v:undefined}  {v:null}
console.log(v)
let objv = {name:'lili',a:{age:3,scholl:['x','xx','xxx','xxxx']}}
// age scholl 第一项 
let {a:{age,scholl:[,s2]}} = objv
let {a:b13} =objv;
console.log(b13)




 
