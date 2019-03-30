// 高阶函数 2个箭头以上的叫做高阶函数 
// 函数里面返回函数
let _toString = Object.prototype.toString
function istype(str,type){ 
	let result = _toString.call(str).slice(8,-1)
	return result  ===type
	
}
res = istype('str','String')
res



