// Object Declaration
// var point={
//     x:10,
//     y:20
// }

// point.z=30

// console.log(point)

// var obj=Object();
// obj.a=40;

// console.log(obj)

// var obj2=new Object();
// obj2.b=70;
// console.log(obj2)

// Accessing Object

var point2={ //Used Maximum time
    x:10,
    y:20,
    z:15
}

console.log(point2.x)
console.log(point2.y);
console.log(point2.x+point2.z);

console.log(point2['x']+point2['z']); //Array Notation {Use When We Don't Know that which one we should use}

// Set Object Properties 
point2.x=500;
console.log(point2)

// Remove Object Properties
point2.x=undefined;
console.log(point2)

delete point2.x;
console.log(point2)

// Compare Two Objects
var obj1={
    a:10,
    b:20
}
var obj2={
    a:10,
    b:20
}

if(obj1.a===obj2.a&&obj1.b==obj2.b){ //As usual way
    console.log(true)
}
else{
    console.log(false)
}

console.log(obj1)
console.log(JSON.stringify(obj1)===JSON.stringify(obj2)) //Magical Way {Maximum times we use it}