console.log("1")
var promise = new Promise((resolve,reject)=>{
    console.log("Javascript")
    resolve("ADfar Rashid")
})
promise.then((result)=>{
    console.log(result)
})
console.log("2")