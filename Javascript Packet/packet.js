
// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else if(n === 2){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
console.log(fib(7));
// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
numArray = [9,8,2,4,1,4];
console.log(numArray);
function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
      for(let j = 1; j < array.length; j++) {
        if(array[j - 1] > array[j]) {
          swap(array, j - 1, j);
        }
      }
    }
  return array;
  }
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
console.log(bubbleSort(numArray));
// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    let splitString = someStr.split(""); 
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 
    return joinArray; // "olleh"
}
console.log(reverseStr("hello"));

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    if(someNum === 1){
        return 1;
    }
    return someNum * factorial(someNum-1);
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr,length,offset){
    if(typeof someStr !== 'string' && !(someStr instanceof String)) {
       return alert(`${typeof someString} is an invalid type : must be a string`);
       // return console.log(`${typeof someString} is an invalid type : must be a string`);
    }
    else if (length+offset >= someStr.length){
        //alert('length of the substring is too long');
        console.log('length of the substring is too long');
    }else{
        return someStr.slice(offset, offset+length);
    }
}
//console.log(substring('Christopher',5,0));
//console.log(substring(6,1,2));
//console.log(substring('Christopher', 10, 5));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    if(someNum.isEven){
        return true;
    }else{
        return false;
    }
}


// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    someStr = someStr.toLowerCase().replace(/ /g,''); //convert to lowercase letters and remove all whitespaces 
    if (someStr === reverseStr(someStr)){
        return true;
    }else{
        return false;
    }
}
//console.log(isPalindrome('Race car'));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *  
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    let output = [];
    if(shape === "Square"){
        for (let i = 0; i < height; i++){
            for(let j = 0; j < height; j++){
                output.push(character);
            }
            console.log(output.join(''));
            output = [];
        }
    }else if(shape === "Triangle"){
        let width = 1;
        for (let i = 0; i < height; i++){
            for(let j = 0; j < width; j++){
                output.push(character);
            }
            console.log(output.join(''));
            output = [];
            width++;

        }
    }else if(shape === "Diamond"){
        let width;
        let shape = '';
        for(let i = 0; i < height * 2 - 1; i++) {
          if(i < height){
            width = i;
          }else{
            width = height * 2 - i - 2;
          }
          shape += Array(height - width).join(' ') + Array(width + 1).join(`${character} `) + `${character}\n`;
        }
        console.log(shape);
    }else{
        console.log('Please enter a shape of Square, Trinagle, or Diamond.');
    }
}

console.log(printShape('Square',3,'#'));
console.log(printShape('Triangle',3,'#'));
console.log(printShape('Diamond',17,'#'));
// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    let output = '';
    for (let property in object) {
        output += property + ': ' + object[property]+'; ';
      }
    return output;
}
// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    console.log(someArr.length);
    console.log(remove(someArr,3));
    console.log(someArr.length);
}
function remove(array, element) {
    return array.filter(e => e !== element);
}
// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(3,1);
    console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
let Person = function(name, age) {
    this.name = name;
    this.age = age;
}
// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name, age){
   return Person = {
        name : name,
        age : age
    }
}
let john = new Person("John", 30);
console.log(john);
console.log(getPerson("John",30));
