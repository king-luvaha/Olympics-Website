function validateForm() {
  // Get form inputs
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var message = document.forms["myForm"]["message"].value;

  // Validate name input
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  // Validate email input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  // Validate phone input
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must be 10 digits");
    return false;
  }

  // Validate message input
  if (message == "") {
    alert("Message must be filled out");
    return false;
  }

  // Return true if all inputs are valid
  return true;
}

  