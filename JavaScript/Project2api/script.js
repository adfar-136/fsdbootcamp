const newsdiv = document.getElementById("newsapp");
const btnEl = document.getElementById("btn");
// const  generateNews =async ()=>{

// }
let articles = [];
window.onload = async function() {
  const url = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e"
  );
  const jsonData = await url.json();
  //    console.log(jsonData)
  articles = jsonData.articles;
  articles.map((item, index) => {
    console.log(item);
    const NewsEl = document.createElement("div");
    NewsEl.innerHTML = `
    
    
    <div class="card my-3" style="width: 18rem;">
    <img src="${item.urlToImage?item.urlToImage:"https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Draymond-Green-Game2-Kings-USATSI-20486693.jpg"}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title.slice(0,45)}</h5>
      <p class="card-text">${item.description.slice(0,80)}</p>
      <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
    </div>
    </div>
    `;
    newsdiv.appendChild(NewsEl);
  });
}
