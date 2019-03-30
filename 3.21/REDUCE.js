let ary = [1,2,3,4]
// reduce 收敛
// 每次返回的结果会作为下次的prev  return后面的值作为下次的prev(第一项) 不传参第一次的prev是数组的第一项
// 第一次运行的时候next是数组的第二项 第二次运行的时候next是数组的第三项，依次类推
// prev 可以作为参数传入 如果有参数 prev会被参数替代 next 第一次运行的时候是数组的第一项 依次类推

let sum = ary.reduce(function(prev,next,index,array){
	console.log(prev)
  return prev+next 
})
// 第一次的prev 1  next  2  返回值1+2 
// 第二次 prev 3  next 3  返回值3+3
// 第三次 prev 6 next 4  返回值10
let carlist = [{name:'苹果',count:3,price:20},{name:'橘子',count:5,price:80},{name:'芒果',count:7,price:70}] 
// let carsum = carlist.reduce(function(prev,next){
//   return prev+next.count*next.price 
// },0)
let carsum = carlist.reduce((prev,next)=>prev+next.count*next.price 
,0)
carsum
// 第一次 prev 0 第二次 prev 60 第三次 460 
let a1= ['name','age'] 
let a2= ['scholl',33]
let obj = a1.reduce(function(prev,next,index){
    prev[next]= a2[index]
	//{}[name] = scholl {name:scholl}
	return prev
 },{})
//  {name:'scholl',age:3}
console.log(obj)

// {name:}
// {name:'scholl',age:33}
let ar3 = [{path: '/',component: 'Home'},{path: '/about',component:'About'}]
// {'/':Home,'about':About}   
let obj1= ar3.reduce((prev,next)=>{
    prev[next.path]= next.component
	// {'/':'home','/about':About}
	return prev //{'/':'home'}
},{})
obj1 
obj = {} 
obj.name = 'lili'
console.log(obj)





