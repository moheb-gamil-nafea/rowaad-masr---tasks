//Check The Number Is Even or Odd
console.log('~~~Task One~~~')
for(i=0 ; i<=15 ; i++){
    console.log(i)
    if(i % 2 == 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}

// Fizz Buzz Game 
console.log('~~~Task Two~~~')
for(let i = 1 ; i <= 15 ; i++){
    if( i % 3 == 0 && i % 5 ==0 ){
        console.log("FizzBuzz");
    } else if(i % 5 == 0 ){
        console.log("Buzz");
    }else if(i % 3 == 0 ){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}

//  Compute Circle Area and Circumference 
console.log('~~~Task Three~~~')
let radius = prompt("Enter the radius of the circle:")
let area = Math.PI * Math.pow(radius, 2)
console.log("The area of the circle = ")
console.log(area)
let circumference = 2 * Math.PI * radius
console.log("The circumference of the circle = ")
console.log(circumference)

// check from two given integers, whether one is positive and another one is negative. 
console.log('~~~Task Four~~~')
let num1 = prompt('Please Enter First Number')
let num2 = prompt('Please Enter Second Number')
//first number
if(num1 >= 0){
    console.log('the first number is positive')
}else{
    console.log('the second number is negitive')
}
//second number
if(num2 >= 0){
    console.log('the first number is positive')
}else{
    console.log('the second number is negitive')
}

// print the sum of two numbers 
console.log('~~~Task Five~~~')
let first = parseFloat(prompt("Enter the first number:"));
let second = parseFloat(prompt("Enter the second number:"));
let sum = 0
sum = first + second
console.log("The sum of " + first + " and " + second + " is: " + sum);
