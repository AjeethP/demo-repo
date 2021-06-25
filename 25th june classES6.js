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