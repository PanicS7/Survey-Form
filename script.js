/*
I added some JavaScript validation
Path for responsible certificate at freeCodeCamp
https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-projects/build-a-survey-form
1. To check if all test passed click at 3 green lines at top left corner
2. For test suite select "Survay Form"
3. If test don't work enable "Cookies" on your browser settings
*/

function validate () {
  // Used variables
  var validName;
  var validEmail;
  var validAge;
  var validRadio;
  var validCheckbox;
  var validMessage;
  
  // for name
  var name = document.getElementById("name").value;
  if ((name >= 0) || (name < 0)) {
    document.getElementById("name").style.border = "2px solid #f00";
    validName = false;
  }
  else {
    document.getElementById("name").style.border = "2px solid #0f0";
    validName = true;
  }
 
  // for email
  var email = document.getElementById("email").value;
  if ((email >= 0) || (email < 0)) {
   document.getElementById("email").style.border = "2px solid #f00";
    validEmail = false;
   }
   else if ((email.indexOf("@") >= 0) && (email.indexOf(".") >= 0)) {
      document.getElementById("email").style.border = "2px solid #0f0";
     validEmail = true;
  }
  else {
   document.getElementById("email").style.border = "2px solid #f00";
    validEmail = false;
  } 
  
  // for age
var number = document.getElementById("number").value;
  if ((number > 0) && (number <= 105)) {
    document.getElementById("number").style.border = "2px solid #0f0";
    validAge = true;
  }
  else {
    document.getElementById("number").style.border = "2px solid #f00";
    validAge = false;
  }

  // for radio
  var radio1 = document.getElementById("radio1").checked;
  var radio2 = document.getElementById("radio2").checked;
  var radio3 = document.getElementById("radio3").checked;
  
  if (radio1 == true || radio2 == true || radio3 == true) {
    document.getElementById("radioInput").style.border = "0";
    validRadio = true;
  }
  else {
    document.getElementById("radioInput").style.border = "2px solid #f00";
    validRadio = false;
  }
  
  // Check box validation
  var check1 = document.getElementById("check1").checked;
  var check2 = document.getElementById("check2").checked;
  var check3 = document.getElementById("check3").checked;
  var check4 = document.getElementById("check4").checked;
  
  if (check1 == true || check2 == true || check3 == true || check4 == true) {
    document.getElementById("checkInput").style.border = "0";
    validCheckbox = true;
  }
  else {
    document.getElementById("checkInput").style.border = "2px solid #f00";
    validCheckbox = false;
  }
  
  // for textarea - message
  var message = document.getElementById("userMessage").value;
  
  if (message.length > 0) {
    document.getElementById("userMessage").style.border = "2px solid #0f0";
    validMessage = true;
  }
  else {
    document.getElementById("userMessage").style.border = "2px solid #f00";
    validMessage = false;
  }
  
  /* FINAL VALIDATION */
  if (validName == false || validEmail == false || validAge == false || validRadio == false || validCheckbox == false || validMessage == false) {
    return false;
  }
  else {
    return true;
  }
}
