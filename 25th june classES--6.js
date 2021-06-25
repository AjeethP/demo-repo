//1) The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class movie{
    constructor(title,studio,rating="PG"){
      this.x=title;
      this.y=studio
      this.z=rating
    }
    aj()
    {
      console.log(this.x)
      console.log(this.y)
      console.log(this.z)
    }
  }
  var p=new movie("Casino Royal","Eon Production","PG13")
  p.aj() 

  //2) circle class

  class circle{
    constructor(x,radius,circumference){
      this.area=x
      this.y=radius
      this.z=circumference
    }
    aj()
    {
      console.log(this.area)
      console.log(this.y*this.z)
      
    }
  }
  var p=new circle("Area",15,15)
  p.aj() 


  //3)  Write a person class to hold all details.
class person{
  constructor(name,age,address,phoneNo,email)
  {
    this.x=name;
    this.y=age;
    this.z=address;
    this.k=phoneNo;
    this.h=email
  }
  details(){
    console.log("Name:",this.x)
    console.log("Age:",this.y)
    console.log("Address:",this.z)
    console.log("PhoneNo:",this.k)
    console.log("Email:",this.h)

      
  }
}
let p=new person("Ajeeth",23,"GandhipuramEast,Pettavaithalai",9600812989,"ajeeth301998@gmail.com")

p.details()

