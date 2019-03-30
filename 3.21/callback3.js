// 高阶函数 2个箭头以上的叫做高阶函数 
// 函数里面返回函数 
let _toString = Object.prototype.toString
function istype(type){ 
  return function(str){
	 let result = _toString.call(str).slice(8,-1)
	return result  ===type
  }
}
 istype=(type)=>(str)=>{
	let result = _toString.call(str).slice(8,-1)
	return result  ===type
}
isString = istype('String')
isNumber = istype('Number')
// util 工具类
let util = {}
let utilary = ['String','Number','Array','Object','Function']
utilary.forEach(item=>{
	// util[`isString`] = istype('String')
	util[`is${item}`]= istype(item)
})
console.log(util.isNumber('1'))




