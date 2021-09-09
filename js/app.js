const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation_password = document.getElementById("confirmation_password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // all input value variable
  const usernameValue = username.value.trim(); //username
  const emailValue = email.value; //email
  const passwordValue = password.value.trim(); //password
  const confirmation_passwordValue = confirmation_password.value.trim(); //confirmation_password

  // username
  if (usernameValue === "") {
    errorAction(username, "please give your name");
  } else {
    successAction(username);
  }

  // email
  if (emailValue === "") {
    errorAction(email, "please give your email");
  } else {
    successAction(email);
  }

  // password

  // regular expression for password minimum 4 dizit, maximum 12 dizit, a lowercase, a uppercase, a specal caracter, a number
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,12}$/;
  if (passwordValue === "") {
    //empty
    errorAction(password, "please give your password");
  } else if (!regularExpression.test(passwordValue)) {
    //regx
    errorAction(
      password,
      "please give at lest a number, a specail carecter, a lowercase, a uppercase, minimum 4 dizit and maximum 12 dizit"
    );
  } else {
    successAction(password);
  }

  // confirmation password
  if (confirmation_passwordValue === "") {
    errorAction(
      confirmation_password,
      "please give your confirmation_password"
    );
  } else if (confirmation_passwordValue !== passwordValue) {
    errorAction(
      confirmation_password,
      "dont match your confirmation password with password"
    );
  } else {
    successAction(confirmation_password);
  }
});

function errorAction(input, message) {
  //   select form control
  var parentel = input.parentElement; //parent Element
  var small = parentel.querySelector("small"); //small tag    show error message
  var input = parentel.querySelector("input"); //input tag    for error border at input
  var i = parentel.querySelector("i"); //i tag    for error icon show at input

  //  action
  small.innerText = message; // error message
  input.className = "input error"; //error border at input
  i.className = "fas fa-exclamation-circle"; //error icon show at input
}

function successAction(input) {
  //   select form control
  var parentel = input.parentElement; //parent Element
  var input = parentel.querySelector("input"); //input tag    for success border at input
  var small = parentel.querySelector("small"); //small tag    show success message
  var i = parentel.querySelector("i"); //i tag    for success icon show at input

  // action
  input.className = "input success"; //success border at input
  small.innerText = ""; // success message is null
  i.className = "fas fa-check-circle"; //success icon show at input
}
