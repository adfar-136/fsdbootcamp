const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById("jokebtn")
// console.log(jokeEl)
// console.log(jokeBtn)
jokeBtn.addEventListener('click',generatejoke)
//USing Async Await
// async function generatejoke(){
//     const config = {
//         headers:{
//             accept:'application/json'
//         }
//     }
//     const res =await fetch("https://icanhazdadjoke.com/",config)
//     const data = await res.json()
//     jokeEl.innerHTML = data.joke;


// }]
function generatejoke(){
    const config ={
        headers:{
            accept:"application/json"
        }
    }
    fetch("https://icanhazdadjoke.com/",config)
    .then((result)=>result.json())
    .then((data)=>{
        jokeEl.innerHTML = data.joke;
    })
}