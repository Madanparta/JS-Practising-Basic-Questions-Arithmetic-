// BASIC ASSIGNMENT QUESTIONS (ARITHMETIC).

// 1. QUOTIENT AND REMAINDER.
// ANSWER..
function quo_rem(a,b){
    // Write your code here
    let div = Math.floor(a/b);
    let remain = Math.floor(a%b);
    let result = (div+","+remain);
    //make sure you return the output string
    return (result);
  }
  console.log(quo_rem(7,3));
  exports.quo_rem = quo_rem


// 2. CUBE OF A NUMBER.
// ANSWER..
function cube(a){
    // Write your code here
    let cubes = a**3
    // make sure you return the output
    return cubes;
  }
  console.log(cube(-2));
  exports.cube = cube

//3.CELSIUS TO FAHRENHEIT.
// ANSWER.. 
function ctof(a){
    // write your code here
    // make sure you return the answer
    return (((9/5)*a)+32);
  }
  console.log(ctof(25));
  exports.ctof = ctof

//4. CELSIUS TO FAHERNHEIT.
// ANSWER..
function ftoc(a){
    // write your code here\
    // make sure you return the answer
    return ((a-32)*(5/9));
  }
  console.log(ftoc(89.60));
  exports.ftoc = ftoc

//5.SWAP TWO NUMBERS.
// ANSWER.
function swap(a,b){
    // Write your code here
    //make sure you return the output string
    return (b+","+a);
  }
  console.log(swap(-10,2));
  exports.swap = swap 

//6.AVERAGE SALARY.
// ANSWER.
function average_salary(a,b,c,d,e){
    //write your code here
    let average = (a+b+c+d+e)/5;
    // make sure you return the answer
    return average;
  }
  console.log(average_salary(10,20,30,40,50));
  exports.average_salary = average_salary

// 7.FIND PROFITS.
// ANSWER.
function find_profit(x,y){
    // write your code here
    let profit = (y-x);
    if(profit > 0){
      return profit;
    }else {
      return 0;
    }
    // make sure you return the output
  }
  console.log(find_profit(7,3));
  exports.find_profit = find_profit

//8.FIRST DIGITS.
// ANSWER.
function first_digit(a){
    //write your code here
    let first = Math.floor( Math.abs(a/100));
    // return the output
    return first;
  }
  console.log(first_digit(567));
  exports.first_digit = first_digit

//9.SUM OF FIRST AND LAST DIGITS.
// ANSWER.
function sum(a){
    // write your code here
    // make sure you return the answer
    let firstDigit = Math.floor(a/10);
    let secoundDigit = Math.floor(a%10);
    return (firstDigit+secoundDigit);
  }
  console.log(sum(78));
  exports.sum = sum

//10.REVERSE OF THE NUMBER.
// ANSWER.
function reverse(a){
    // write your code here
    let first = Math.floor(a/100);
    let secound = Math.floor(a/10)%10;
    let third = a%10;
    // make sure you return the answer
    return (third+","+secound+","+first);
  }
  console.log(reverse(156));
  exports.reverse = reverse

