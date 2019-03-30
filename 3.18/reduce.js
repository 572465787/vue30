// 收敛 reduce
// 每次返回的结果会作为下次的prev
// 第一次运行的时候next是数组的第二项
// 第二次运行的时候next是数组的第三项  依次类推
// prev 可以作为参数传入
let ary = [1,2,3,4]
ary.reduce(function(prev,next,index,array){
    console.log(prev)
    console.log(next)
    return prev+next
},100)
// return 后面
// 第一次的prev 1  next 2    返回值 1+2
// 第二次 prev 3   next3     返回值3+3
// 第三次prwv 6    next 4     返回值6+4


let carlist = [{name:'苹果',count:2,price:20},
                {name:'柠檬',count:1,price:20},
                {name:'芒果',count:1,price:20}]

 let carsum = carlist.reduce(function(p,n){
                    // return p.count*p.price+n.count*n.price
                    return p+n.count*n.price
                },0)    
         carsum    

         let a1= ['name','age'] 
         let a2= ['scholl',33]
        let obj = a1.reduce(function(prev,next,index){
            prev[next]= a2[index]
            return prev
        },{})
        console.log(obj)
         

         let ar3 = [{ path: '/',component: 'Home'},{path: '/about',component:'About'}]
        let obj1 = ar3.reduce((prev,next)=>{
            prev[next.path]=next.component
            return prev
        },{})
        console.log(obj1)