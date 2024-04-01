let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let number = document.getElementById("number");
let myform = document.getElementById("myform");
let signup = document.getElementById("signup");
let userArray = []; // Initialize userArray outside the event listener

// clears the storage
// localStorage.clear(); 

myform.addEventListener('submit', function(event) {
  event.preventDefault();

  let user = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
    number: number.value
  };

  // Retrieve existing data 
  let existingData = localStorage.getItem('userData');
  if (existingData) {
    userArray = JSON.parse(existingData); // Parse JSON string
  }

  userArray.push(user); // Add new user object to the array

  localStorage.setItem('userData', JSON.stringify(userArray)); // Store array as JSON string

  console.log(user);
  console.log(localStorage.getItem('userData'));
  
  window.location.href = "./userTable.html";
});
