//variables

var age;
console.log(age);

age = 23;
console.log(age);

var fullname = "Berkan Türel";
console.log(fullname);

fullname = "Mesut Özil";
console.log(fullname);

// var , let , const 

let city = "İstanbul";
console.log(city);

const computer= "asus";
console.log(computer);

// type of variable 

// Pritive Types
    //String
    let author = "Stefan Zweig";
    
    //number
    let number1 = 123;       // variable type = number
    let number2 = 67.34;    // variable type = number
    
    //boolean
    let isactive = false;

    //null
    let type = null;

    //undefined
    let car;


// Reference Types 
    //array
    let names = [1,2,3]

    //object 
    let books = {
        author = "George R. R. Martin",
        Book = "Game Of Thrones"
    }

    //Function
    var calculateprice = function(){
        return 0;
    }; 

// Type Convertion
    let num1 = Number("5");
    let num2 = Number("12");
    let total = num1 + num2 ;
    console.log(total);
    total = String(total);

    let minutes = String(new Date());
    console.log=(minutes);

    let numbers = String([1,2,3,4]);

    // toString()
    num1 = (13).toString;
    let isactive = (false).toString;

    //ParseInt
    //ParseFloat

    num1 = parseInt("92");
    num1 = parseFloat("54.5");

