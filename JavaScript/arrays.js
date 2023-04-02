// var arr = [10,20,30,40,50]
// console.log(arr)
// var arr =new Array(23,34,323,232,32,4)
// console.log(arr)
// var arr = new Array(4)
// console.log(arr)
// var arr = [4]
// console.log(arr)
// var arr = [10,20,30,40,50]
// console.log(arr[3])
// console.log(arr[0])
// var arr =new Array()
// arr[0]="a"
// arr[1]="ab"
// arr[2]="abc"
// arr[3]="abcd"
// arr[4]="abcde"
// arr[5]="abcdef"
// console.log(arr)
// const arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     ["a","b","c","d"]
// ]
// console.log(arr[1])
// console.log(arr[1][2])
// console.log(arr[2][3])
// var arr =[1,2,3,4,54,5,2345,45]
// // console.log(arr.length)
// arr.push("a","b","c")
// arr.unshift("z","y","x")
// const last = arr.pop()
// const first = arr.shift()
// console.log(arr)
// console.log(last)
// console.log(first)
// const arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     ["a","b","c","d"]
// ]

// // arr.push(1,2,3)
// // arr.push([1,2,3])
// arr[1].push(9,10)
// console.log(arr)
//slice
// var arr = [1,2,3,4,5,6,7,8,9]
// var extract = arr.slice(2,5)
// console.log(extract)
// console.log(arr)

// var arr = [1,2,3,4,5,6,7,8,9]
// var arr1= arr.splice(2)
// console.log(arr1)
// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr3 = [7,8,9]
// // var arrmain = [].concat(arr1,arr2,arr3)
// var arrmain = arr1.concat(arr3,arr2)
// console.log(arrmain)
// console.log(arr1)

// let arr =[10,20,30,40,590,95,839,43]
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i])
// }
// for( let adfar of arr){
//     adfar =adfar + 5
//     console.log(adfar)
// }

// function add(...other){
//     // console.log(other)
//     let sum = 0 ;
//     for (let i of other){
//         sum += i
//     }
//     return sum
    
// }
// const result = add(2,4,6,3,2,1,1,31,32,32,3,32,1,32,3,123,3)
// console.log(result)
// function add(a,b,...c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     // console.log(d)
// }
// add("ADfar","Yetin","Melvin","Jaspreet")
// let arr = [10,20,30,40,50]
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr,...arr1]
// arr2[2] = "adfar"
// arr[1]="text"
// console.log(arr)
// console.log(arr2)
// const arr = ["adfar","Yetin","Melvin","vag"]
// function getNames(name1,name2,name3){
//     console.log(name1,name2,name3)
// }
// getNames(...arr)
// let arr = [1,2,3,9,4,5,9,6,7,8]
// console.log(arr.includes(9,2))
// console.log(arr.length)
// console.log(arr.indexOf(9,2))
// let arr = [1,2,3,9,4,5,9,6,7,8]
// for(let i = 0;i <arr.length;i++){
//     arr[i]=arr[i]**2
    
// }
// console.log(arr)

// let add = function(x,y){
//     return x+y
// }
// const result = add(4,5)
// console.log(result)

// let add =(x,y)=>{
//     return x+y
// }
// let add =(x,y)=>x+y
// const result = add(4,5)
// console.log(result)


// function add(adfar){
//     return adfar
// }
// function greet(){
//     console.log("good morning")
// }
// add(greet())
// function add(){
//     function greet(){
//         console.log("good morning")
//     }
//     return greet()
// }

// console.log(add(greet))

// setTimeout(()=>{
//     console.log("adfar")
// },4000)

// let newArr = arr.map(function(currentValue,index){
//     return currentValue>=20
// })
// let newArr = arr.map((x,i)=>{
//     return x*x
// })
// console.log(newArr)]
// let arr = [10,20,30,40,50]
// let myFunction = (num)=>{
//     return num*10
// }
// let newArr = arr.map(myFunction)
// console.log(newArr)

// let arr = [20,5.2,-120,100,30,5.5,0,3]
// // let arr1 = [2,4,6,8,7,5,3,1,0]
// // console.log(arr.sort())
// arr.sort(function(a,b){
//     return b-a
// })
// arr.sort((a,b)=>b-a)
// console.log(arr)
// let arr = ["adfar","aon","amas","aandom","aloves","autter"]
// arr.sort()
// console.log(arr)

// let arr =[10,23,234,54,2,43,54,2,4,243,-3,-5,-6,-76,438,0]
// let newArr = arr.filter(function(x,i){
//     return x >=100
// })
// console.log(newArr)
let arr = [10,2,3,4,2,43,9]
function add(total,num){
    return total + num
}
console.log(arr.reduce(add,50))