var firstNumber=0; //firstinput
var secondNumber=0;//secondinput
var operation=null; //set to false
var total=0;
//checks for length and changes it to exponential if needed
function displayscreen()
{
    if (parseFloat(firstNumber).toString().length<13){
        document.getElementById('screen').innerHTML=firstNumber;}
        
    else{
        document.getElementById('screen').innerHTML=firstNumber.toExponential(2);}
    
   // alert("Hello! I am an alert box!!");
}

//x being input
function checkInput(x)
{
  console.log("checkinput beggining:firstNumber: " + firstNumber);
  console.log("checkinput beggining:secondNumber: " + secondNumber);
  console.log("checkinput beggining:operation: " + operation);  
  
  if (parseFloat(firstNumber).toString().length < 13) 
    { 
        if (parseInt(x) >= 0 && parseInt(x) <= 9) 
        { 
             if (firstNumber.toString() == '0') 
             {
                 firstNumber = x.toString(); 
             }
       
        else 
        {
            firstNumber = firstNumber.toString() + x.toString(); 
        }
    }
    
    if (x == '.' && (firstNumber.toString().indexOf('.') == -1)) 
    { 
      firstNumber = firstNumber.toString() + x.toString();
    }
    displayscreen();
  }
console.log("checkinput end:firstnum: " + firstNumber)
console.log("checkinput end:secondnum: " + secondNumber)
console.log("checkinput end:operator: " + operation)

}

function signsclicked(y)
{
    
    if (operation == undefined)
    {
        console.log(y); 
        operation=y;
         secondNumber=firstNumber;
        firstNumber=0;
    }
    else
    {
        console.log(y);
        evalResult(operation);
        operation=y;
        secondNumber=firstNumber;
        firstNumber=0;
        
        
    }
    
}

function evalResult(math) 
{
  console.log("checkinput beginning:operator: " + math)
  if (math == '*') {
    firstNumber = firstNumber * secondNumber;
    secondNumber=0;
    operation= null;
    
  }
  if (math == '/') {
    firstNumber = secondNumber / firstNumber;
    secondNumber=0;
    operation= null;
  }
  if (math == '+') {
    firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
    secondNumber=0;
    operation= null;
  }
  if (math == '-') {
    firstNumber = secondNumber - firstNumber;
    secondNumber=0;
    operation= null;
  }
  console.log("checkinput end:operator: " + math)
  displayscreen();
  
}

function clearall()
{
    firstNumber=0;
    operation=null;
    secondNumber=0;
    displayscreen();
    
}

function changesign()
{
    firstNumber=-firstNumber;
    displayscreen();
    
}

function changetodecimal(z)
{
    firstNumber=firstNumber/100;
    displayscreen();
}

//button properties
$(document).ready(function() {
  displayscreen();
  $("#zero").click(function() {
    checkInput(0);
  });
  $("#one").click(function() {
    checkInput(1);
  });
  $("#two").click(function() {
    checkInput(2);
  });
  $("#three").click(function() {
    checkInput(3);
  });
  $("#four").click(function() {
    checkInput(4);
  });
  $("#five").click(function() {
    checkInput(5);
  });
  $("#six").click(function() {
    checkInput(6);
  });
  $("#seven").click(function() {
    checkInput(7);
  });
  $("#eight").click(function() {
    checkInput(8);
  });
  $("#nine").click(function() {
    checkInput(9);
  });
  $("#decimal").click(function() {
    checkInput('.');
  });
  $("#number1").click(function() {
    (1);
  });
  $("#add").click(function() {
    signsclicked('+');
  });
  $("#subtract").click(function() {
    signsclicked('-');
  });
  $("#divide").click(function() {
    signsclicked('/');
  });
  $("#multiply").click(function() {
    signsclicked('*');
  });
  $("#equal").click(function() {
    evalResult(operation);
  });
  $("#sign").click(function() {
    changesign('+/-');
  });
  $("#clear").click(function() {
    clearall('AC');
  });
  $("#percent").click(function() {
    changetodecimal('%');
  });
  
  
});