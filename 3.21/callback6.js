//filter
Array.prototype.myfilter = function(cb){
    let newarr =[];
	for(let i=0;i<this.length;i++){
		// 只有回到函数返回的条件成立 才会放到新数组里面
		if(cb(this[i],i)){
		  newarr.push(this[i])
		}
	}
	return newarr 
}
let ary = [1,2,3,4]
let res = ary.myfilter(function(item,index){
	return item=0
})
console.log(res)

