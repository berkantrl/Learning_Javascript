// operators

let val;
const a = 10;
const b = 5;
let c = 3;

//1- arithmetic Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = c++;
val = ++c;
val = c--;
val = --c;

//2- Assignment operators

val = a;
val += a;
val -= a;
val *= a;
val /= a;
val %= a;

//3- comparison operators

val = a==b;
val = b==c;
val = b===c; // value control & type
val = a!=b;
val = a!==b;
val = a < b;
val = a > b;


//4- Logical operators

    // && (And)

    val = (a>b)&&(b>c);
    
    
    // || (Or)

    val = (a>b)||(b>c);

    // ! (Not)

    val = !(a>b)


console.log(val);
console.log(typeof val)

                        // example

// 1- get height and kg information of crespo and mesut.
// 2- calculate the weight-by-weight indices according to the information received
// 3- formul : kg / height^2
// 4- find out which group it is in according to the table

// 0 - 18,4: weak
// 18,5 - 24,9: Normal
// 25,0 - 29,9: overweight
// 30,0 - 34,9: fat

    var weight_mesut = "70";
    var height_mesut= parseFloat(1.75);
    var weight_crespo= 90;
    var height_crespo= parseFloat(1.80);
    var calculate = (weight_mesut/(height_mesut*height_mesut));
    var calculate2 = (weight_crespo/(height_crespo*height_crespo));

//          Mesut
    if( calculate>0 && calculate<18.5 )
        document.getElementById("mesut").innerHTML = "Mesut is Weak";
    else if(calculate>18.5 && calculate<25 )
        document.getElementById("mesut").innerHTML = "Mesut is Normal";
    else if(calculate>24.99 && calculate<30 )
        document.getElementById("mesut").innerHTML = "Mesut is overweight";
    else if(29.9>calculate && calculate< 35 )
        document.getElementById("mesut").innerHTML = "Mesut is Fat";

//          Crespo
    if( calculate2>0 && calculate2<18.5 )
        document.getElementById("crespo").innerHTML = "crespo is Weak";
    else if(calculate2>18.5 && calculate2<25 )
        document.getElementById("crespo").innerHTML = "crespo is Normal";
    else if(calculate2>24.99 && calculate2<30 )
        document.getElementById("crespo").innerHTML = "crespo is overweight";
    else if(29.9>calculate2 && calculate2< 35 )
        document.getElementById("crespo").innerHTML = "crespo is Fat";