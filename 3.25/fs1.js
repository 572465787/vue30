let fs = require('fs')
fs.writeFile('./ary.js',"{}",'utf8',function(err,data){
	if(err)console.log(err)
})