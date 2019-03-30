// map和reduce的封装
let ary = [1,2,3]
let a1 = ary.map(function(item,index){
    return item*2
})
console.log(a1);




Array.prototype.mymap = function(cb){
    let nw = [];
    for(let i=0;i<this.length;i++){
        // nw.push(cb(itemm,index))
        nw.push(cb(this[i],i))

    }
    return nw
}
let a2 = ary.mymap(function(item,index){
    return item+2
})
console.log(a2)


let r = [1,2,3].reduce(function(prev,next,index,array){
    return prev
},0)


[1,2,3,4].myreduce((prex,next)=>prev+next)
Array.prototype.myreduce = function(fn,prev){
    for(let i=0; i<this.length; i++){
        // 判断prev参数是否存在
        if(!prev){
            prev = fn(this[i],this[i+1],i,this)
            i++
        }else{
            prev = fun(prev,this[i],this[i+1],this)
        }
    }
    return prev
}

console.log(r)
