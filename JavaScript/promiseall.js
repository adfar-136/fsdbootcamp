function asynchronous_method(){
    let first_promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Adfar")
        },1000)
    })
    let second_promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello")
        },3000)
    })
    let combined_promise = Promise.all([first_promise,second_promise])
    return combined_promise
}
async function display(){
   let data = await asynchronous_method()
   console.log(data)
}
display()
