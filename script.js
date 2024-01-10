function submitForm() {

    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('lname').value;
    var phoneNumber = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
	
    var result = "First Name: " + name + "\n"
               + "Last Name: " + lname + "\n"
               + "Phone Number: " + phone + "\n"
               + "Email ID: " + email;
    alert(result);
}
