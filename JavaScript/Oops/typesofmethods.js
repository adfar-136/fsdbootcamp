// class student{
//     constructor(){
//         let name;
//         console.log("Constructor called")
//     }
//     hello(){
//         console.log("Hello " + this.name)
//     }
// }
// let a = new student()
// a.name = "Adfar Rashid"
// a.hello()
class student{
  constructor(name,age){
    this.stuName = name;
    this.stuAge = age;
    console.log("constructor called")
  }
  hello(){
    console.log("Hello " + this.stuName + " My age is " + this.stuAge)
   }
}
let a = new student("adfar rashid ",35)
a.hello()
let b = new student("James",22)
b.hello()
// a.name="Adfar Rashid"
// a.age=25
// a.hello()
// student.hello()











