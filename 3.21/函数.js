function a([,b]){
  return b+1
}
let res= a([1,2,3])
function a1({name='lili'}){
  return name
}
let res1= a1({name:'kangwen'})
res1
function c(...arg){
  console.log(...arg)
}
c(1,2,[1,2])
