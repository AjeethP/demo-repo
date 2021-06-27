//Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  var t=data.filter((x)=>
  {
      if(x.region=="Asia")
      {
          return x.name
      }
      
  })
  console.log(t)
  
};
xhr.send();

//Get all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  var t=data.filter((x)=>
  {
      if(x.population<=200000)
      {
          return x.name
      }
      
  })
  console.log(t)
  
};
xhr.send();

//Print the following details name, capital, flag using forEach function 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  data.forEach((ele)=>
  {
      console.log("NAME:"+ele.name,"CAPITAL:"+ele.capital,"FLAG:"+ele.flag)
  })
};
xhr.send();

//Print the total population of countries using reduce function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  let a=data.map((el)=>{
      return el.population
  })
  //console.log(a)
  var total=a.reduce((x,y)=>
  {
      return x+y
  },0)
  console.log(total)
};
xhr.send();

//Print the country which use US Dollars as currency.
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  var t=data.filter((ele)=>
  {
      if(ele.currencies[0].code=="USD")
      {
          return ele.name
      }
  })
console.log(t)

};
xhr.send();

