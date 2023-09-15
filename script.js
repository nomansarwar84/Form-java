var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
   
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}




function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += "active";
  
  
}


function validateform() {
    const email = document.getElementById("email").value;
    const cpass = document.getElementById("cpass").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const emailError = document.getElementById("emailError");
    const cpassError = document.getElementById("cpassError");
    const contactNumberError = document.getElementById("contactNumberError");
    const cname = document.getElementById("cname").value;
    
    const cnameError = document.getElementById("cnameError");
    


    var valid = true;
    // code to validate form fields and set valid variable
  
    if (valid) {
      // show modal with form data
      showModal();
    }
  

    
  // validate email
if (email === "") {
    emailError.innerHTML = "Email is required";
    emailError.className = "error"; // add error class
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.innerHTML = "Invalid email format";
    emailError.className = "error"; // add error class
    return false;
  } else {
    emailError.innerHTML = "";
    emailError.className = ""; // remove error class
  }
  
  // validate confirm password
  if (cpass === "") {
    cpassError.innerHTML = "Confirm password is required";
    cpassError.className = "error"; // add error class
    return false;
  } else if (cpass !== document.getElementById("pass").value) {
    cpassError.innerHTML = "Passwords do not match";
    cpassError.className = "error"; // add error class
    return false;
  } else {
    cpassError.innerHTML = "";
    cpassError.className = ""; // remove error class
  }
  
  // validate contact number
  if (contactNumber === "") {
    contactNumberError.innerHTML = "Contact number is required";
    contactNumberError.className = "error"; // add error class
    return false;
  } else if (!/^\d{10}$/.test(contactNumber)) {
    contactNumberError.innerHTML = "Invalid contact number format (must be 10 digits)";
    contactNumberError.className = "error"; // add error class
    return false;
  } else {
    contactNumberError.innerHTML = "";
    contactNumberError.className = ""; // remove error class
  }

  if (cname==="") {
    cnameError.innerHTML= "Company name is must required"
    cnameError.className= "error";
    return false
  } else if(cname>=4) {
    cnameError.innerHTML="Company name is too short to register"
    cnameError.className="error";
    return false
  } else {
    cnameError.innerHTML= ""
    cnameError.className= ""
  }
    
  }

 

function showModal() {
  // Get the modal element
  var modal = document.getElementById("myModal");

  // Get the form data
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var dob = document.getElementById("dob").value;
  var contactNumber = document.getElementById("contactNumber").value;

  // Set the modal content to the form data
  modal.querySelector("#firstName").textContent = firstName;
  modal.querySelector("#lastName").textContent = lastName;
  modal.querySelector("#email").textContent = email;
  modal.querySelector("#password").textContent = password;
  modal.querySelector("#dob").textContent = dob;
  modal.querySelector("#contactNumber").textContent = contactNumber;

  // Display the modal
  modal.style.display = "block";
  // Add event listener to edit button to hide modal and display form
  var modal = document.getElementById("myModal");
  
  

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })
  
  
  
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function editData() {
  closeModal();
  // your edit code here
}



function saveData() {
  // Get the form data
  let firstName = document.getElementById("firstName").textContent;
  let lastName = document.getElementById("lastName").innerHTML;
  let email = document.getElementById("email").innerHTML;
  let password = document.getElementById("password").innerHTML;
  let dob = document.getElementById("dob").innerHTML;
  let contactNumber = document.getElementById("contactNumber").innerHTML;

  // Create an object with the form data
  let formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    dob: dob,
    contactNumber: contactNumber,
  };

  // Save the form data to local storage
  localStorage.setItem("formData", JSON.stringify(formData));
  

  
    // get the form data
    const formdata = {
      firstName: document.getElementById('fname').value,
      lastName: document.getElementById('lname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('pass').value,
      confirmpassword: document.getElementById('cpass').value,
      dob: document.getElementById('dob').value,
      contactNumber: document.getElementById('contactNumber').value
    };
  
    // send the form data to the API in JSON format
    fetch('http://192.168.0.18:8000/add-information', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      
      console.log('Form data sent successfully:');
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
  
  

  

 

  

  closeModal();
}


  


























  












  
  



  
  
  
  
  