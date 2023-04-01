// Declare an array
let arr=[1,2,3,4,5];
console.log(arr)

// Declare an Array by constructor

let arr2=Array(10,20,30,40,50);
console.log(arr2);

// Array Traversing
let sum=0

for(let i=0;i<arr2.length;i++){
    console.log(arr[i])
}

for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);

// Add an element last of the array
arr.push(300);
console.log(arr);

// Add an Element first of the array
arr.unshift(900);
console.log(arr);

// Add an Element specific address of an array
arr.splice(3,0,20);
console.log(arr);

// Remove last element of an array
arr.pop()
console.log(arr);

// Remove first element of an array
arr.shift();
console.log(arr);

// Remove specific element of an array
arr.splice(2,1)
console.log(arr);

// Remove an element using splice method of an array
arr.splice(3,1,500);
console.log(arr);

// Search Data

var find=500;
var isFound=false;


for(var i=0;i<arr.length;i++){
    if(arr[i]==find){
        console.log("Data Found at Index ",+i);
        isFound=true;
        break;
    }
}

if(!isFound){
    console.log("Data Not Found");
}

// Multidimensional Array
var array=[
    [78,71,80,90],
    [90,56,32,19],
    [90,30,10,50]
]

for(var i=0;i<array.length;i++){
    for(var j=0;j<array[i].length;j++){
        console.log("Element "+i+":"+array[i][j])
    }
}

// Reverse an Array

let revArray=[1,2,3,4,5,10,20];
console.log(revArray)
for(let i=revArray.length;i>0;i--){
    console.log(revArray[i]);
}

// Built in Reverse Method
console.log(revArray.reverse())