// let school = {
//     name:"Upgrad",
//     location :"internet",
//     year : 2010
// }
// console.log(school)
// console.log(school.name)
// console.log(school.location)
// console.log(school["name"])
// let school = new Object()
// school.name = "Adfar";
// school.age = 25;
// school.location = "internet"
// console.log(school)

// let school = {
//   name: "Upgrad",
//   location: "internet",
//   year: 2010,
// };
// school.name = "Adfar";
// school.location = "";
// delete school.location;
// console.log(school);
// console.log(school.name);

// let employee1 = {
//     name: "Upgrad",
//     location: "internet",
//     year: 2010,
//   };
// let employee2 = employee1;
// let employee2 = {...employee1}
// let employee2 = Object.assign({},employee1)
// employee1.name = "Adfar";
// employee2.location = "Random"
// console.log(employee1)
// console.log(employee2)

// let employee1 = {
//   name: "Upgrad",
//   location: "internet",
//   year: 2010,
// };
// let Objectkeys = Object.keys(employee1)
// console.log(Objectkeys)
// let Objectvalues = Object.values(employee1)
// console.log(Objectvalues)
// var a = new Date();
// console.log(a)
// var a = new Date(6565675676787);
// console.log(a)
// var a = new Date('June 22, 2022')
// console.log(a)

// var a = new Date(2022,10,13,5,30,22);
// console.log(a)
//Date Methods

// var date= new Date();
// var day = date.getDate()
// var month = date.getMonth()+1;
// var year = date.getFullYear();
// console.log("Date is :",day, "/",month,"/",year)

// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();
// console.log(h,":",m,":",s)
// var a = new Date(10004325430)
// console.log(a)

// let date = new Date("2023-04-02")
// let date1 = new Date("2023-04")
// let date2 = new Date("2023")
// console.log(date)
// console.log(date1)
// console.log(date2)

// let date3 = new Date("04/13/2023")
// console.log(date3)

var d1 = new Date("01/01/2019")
var d2 = new Date()

var diff = d2.getTime()-d1.getTime()
var daydiff = diff/(1000*60*60*24)
console.log(daydiff)


