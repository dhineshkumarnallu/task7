// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     var data=request.response;
//     var result=JSON.parse(data);
//     var res=result.filter((ele)=>{console.log(ele.region)});
// }



// 2qustion all the countries with a population of less than 2 lakhs using Filter function

// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     var data=request.response;
//     var result=JSON.parse(data);
//     var res=result.filter((ele)=>ele.population<200000)
//     var res1=res.map((ele)=>`${ele.population} :${ele.name.common}`)
//     console.log(res1)
// };

// question 3  name, capital, flag using forEach function

// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     var data=request.response;
//     var result=JSON.parse(data);
// var res=result.forEach((ele)=>{console.log(`${ele.name.common}   ${ele.capital}   ${ele.flag}`)})
// }

   

// question 4 total population of countries using reduce function

// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     var data=request.response;
//     var result=JSON.parse(data);
//     var res=result.reduce((acc,cv)=>acc+cv.population,0)
    
// console.log(res)
// }
 



// ountry which uses US Dollars as currency.


// var request=new XMLHttpRequest();
//  request.open("GET","https://restcountries.com/v3.1/all");
//  request.send();
//  request.onload = function(){
//      var data=request.response;
//      var result=JSON.parse(data);
//      var res=result.filter((ele)=>ele.)
//      var res1=res.map((ele)=>`${ele.continents} :${ele.name.common}`)
//      console.log(res1)
//  };



