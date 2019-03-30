// fs模块 
let fs  =require('fs') //自带模块 文件处理

// fs.readFile 读取文件的方法  参数是 三个 路径 编码 回调函数  异步的 
// nodejs回调又有一个特点 error first 
// function readFile(url,cb){
//   fs.readFile(url,'utf8',function(err,data){
//       if(err)cb([])
//       cb(data)
//    })
// }
// readFile('./car.json',function(data){
//    console.log(data,'回调')
// })
function readFile1(url){
	return new Promise((resolve,reject)=>{
		fs.readFile(url,'utf8',function(err,data){
           if(err)reject(e)
		   resolve(data)
		})
	})
}
readFile1('./car.json').then(data=>{
	console.log(data,'promise版的')
})


