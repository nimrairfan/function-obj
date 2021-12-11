/////////question 1/////////////
function date () {
    var dt = new Date();
    document.write(dt)
}
date()

document.write("<br>")
document.write("<br>")
document.write("<hr>")

// /////////question 2////////
// function userInput(input1,input2) {
//     var input1 = prompt("Enter your first name")
//     var input2 = prompt("Enter your last name")
//     document.write(input1+" "+input2)
// }
// userInput()

document.write("<br>")
document.write("<br>")
document.write("<hr>")

///////////question 3////////////
// function userNum(input1,input2) {
//     var input1 = +prompt("Enter your first number")
//     var input2 = +prompt("Enter your last number"+" ")
//     document.write(input1+input2)
// }
// userNum()

document.write("<br>")
document.write("<br>")
document.write("<hr>")

///////////question 4///////////
function calculator(num1,opt,num2) {
    var num1 = +prompt("Enter your First Num")
    var opt =   prompt("Enter operation")
    var num2 = +prompt("Enter your Second Num")
    if(opt === "+"){
        return(num1+num2)
    }
    else if(opt === "-"){
        return(num1 - num2)
    }
    else if(opt === "*"){
        return(num1 * num2)
    }
    else if (opt === "/"){
        return(num1 / num2)
    }
}
calculator(num1 , opt , num2)

//////////question 5///////////
function squareValues(num){
    var square = num * num
return square
}
var value = parseInt(prompt("enter square value"));
var functionValue = squareValues(value);
document.write(`Your Value: ${value} <br> Square Value : ${functionValue}`  )

document.write("<hr>");


//////////question 6///////////
function factorial(num){
 var sum = 1;
for(var i = num ; i>= 1 ; i-- ){
        sum = sum * i
    } 
    return sum
}

var funValue = factorial(10);
document.write("Factorial Value: " + " " + funValue)
document.write("<hr>");


//////////question 7///////////
function counting(startValue , endValue){
for(var i = startValue ; i <= endValue ; i++){

     document.write(i  + " <br>") 

}

}    
var startNum = parseInt(prompt("Enter Start Value"))
var endNum = parseInt(prompt("Enter End Value"))
counting(startNum , endNum)
document.write("<hr>");


//////////question 8///////////
function hypo(val1 , val2){

    return Math.sqrt(Math.pow(val1 , 2) + Math.pow(val2 , 2));
}
var base = parseInt(prompt("Enter Base Value: " ))
var per = parseInt(prompt("Enter perpendicular Value: "))
var hyopValue = hypo(base , per)
document.write(hyopValue)
document.write("<hr>");

//////////question 9///////////
function rectangle(width , heigth){
    var A = width * heigth;
    return A
}
var w = parseInt(prompt("Enter WIDTH"))
var h = parseInt(prompt("Enter HEIGHT"))
document.write(rectangle(w , h))
document.write("<hr>");

//////////question 10///////////
function pali(str){
var re = /[\W]/g;
var lowerstr = str.toLowerCase().replace(re,"");
var reversestr = lowerstr.split("").reverse().join("");
return reversestr === lowerstr

}
document.write("<hr>");
