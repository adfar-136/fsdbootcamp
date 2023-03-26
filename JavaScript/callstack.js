function double(x){
    function thrice(y){
      return y*y*y
    }
    var three = thrice(4)
    console.log(three);
    return x*x
}
var twice = double(4)
console.log(twice)