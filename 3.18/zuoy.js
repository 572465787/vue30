
const obj  = [{id:1,name:'lili'},{id:2,name:'lilei'}]
let one = obj.find(item=>item.id===1)
console.log(one)


// ['苹果','橘子','花生 '] => <li>苹果</li><li>橘子</li><li>花生</li>
let b = ['苹果','橘子','花生 ']
let c = b.map(item=>'<li>'+item+'</li>')
console.log(c)



// 最简单数组去重法
/*
* 新建一新数组，遍历传入数组，值不在新数组就push进该新数组中
* IE8以下不支持数组的indexOf方法
* */
function uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
}
var aa = [1,2,2,4,9,6,7,5,2,3,5,6,5];
console.log(uniq(aa));


/*
* 给传入数组排序，排序后相同值相邻，
* 然后遍历时,新数组只加入不与前一值重复的值。
* 会打乱原来数组的顺序
* */
function uniq(array){
    array.sort();
    var temp=[array[0]];
    for(var i = 1; i < array.length; i++){
        if( array[i] !== temp[temp.length-1]){
            temp.push(array[i]);
        }
    }
    return temp;
}

var aa = [1,2,"2",4,9,"a","a",2,3,5,6,5];
console.log(uniq(aa));


let set = new Set([1,2,2,2,3,4,6])
console.log(set)
let d = Array.from(set) 
let h = Array.from(new Set([1,2,2,3,3,4,4]))
console.log(h)