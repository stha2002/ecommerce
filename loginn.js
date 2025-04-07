function validatePassword(password) {
  if (password.length < 6) {
      alert("Password should be at least of 6 character.")
      return false;
  }

  if (!password.charAt(0).match(/[a-z]/i)) {
      alert("Password should be start with alphabet.");
      return false;
  }

  if (!password.charAt(password.length - 1).match(/[0-9]/i)) {
      alert("Password should be end with digits.");
      return false;
  }

  return true;
}

function validateform() 
{
  var email = document.getElementById("email").value;
  
  var condition=/^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]+){2,4}$/i;
  var result=email.match(condition);
  if(result==NULL)
  {
      alert("Valid Email Address is Required.");
      return false;
  }





  /** Success Form Validation */
  alert("Form Submitted Successfully!!!");
  return true;
}
