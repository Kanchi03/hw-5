/* HW-5
Example 1 JavaScript code
*/
class Square {
    //constructor to set the side of the square
    constructor(side){
      this.side = side;
    }
  
    //method that returns perimeter of square
    perimeter(){
      return 4 * this.side;
    }
  
    //method that returns area of square
    area(){
      return this.side * this.side;
    }
  
    //method that returns diagonal of square
    diagonal(){
      return Math.sqrt(2 * this.side * this.side).toFixed(3);
    }
  
    //method that returns a string describing the square
    describe(){
      return "Square with side "+this.side+" has perimeter of "+this.perimeter()+", area of "+this.area()+", and diagonal of "+this.diagonal();
    }
  }
  
  //creating square of side 2
  square1 = new Square(2);
  console.log(square1.describe());
  
  //creating square of side 3
  square2 = new Square(3);
  console.log(square2.describe());
  
  //creating square of side 4
  square3 = new Square(4);
console.log(square3.describe());
console.log("Kanchi's Output from HW-5 Example 1")