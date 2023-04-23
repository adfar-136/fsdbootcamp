// var promise =  new Promise(function(resolve,reject){
//     var x = "Adfar";
//     var y = "Adfdffar";
//     if(x === y){
//         resolve()
//     } else{
//         reject()
//     }
// })
// promise.then(function(){
//     console.log("promise is fulfilled")
// }).catch(function(){
//     console.log("promise is rejected")
// })
console.log("1")
var promise = new Promise(function(resolve,reject){
    reject("Adfar Rasheed")
})
promise.then(function(result){
    console.log(result)
},function(error){
    console.log(error)
})
console.log("2")
console.log("3")