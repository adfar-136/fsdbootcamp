let data = [10,20,30,40,50,6,70,8,9,0]
let item = 30;
let index;
for(let i = 0;i<=data.length-1;i++){
   if(data[i]===item){
    index=i;
    break
   }
}
console.log(index)