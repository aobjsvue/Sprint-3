// Exercise 7
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	let fNameLetters = onlyLettersSpaces(fName.value);
	if(fName.value == "" || fName.value.length < 3 || !fNameLetters){
		errorName.style.display = "block";
		fName.style.borderColor = "#dc3545";
		error++;
	} else {
		errorName.style.display = "none";
		fName.style.borderColor = "#198754";
	}

	let fEmailValid = emailRegEx(fEmail.value);
	if(fEmail.value == "" || fEmail.value.length < 3 || !fEmailValid){
		errorEmail.style.display = "block";
		fEmail.style.borderColor = "#dc3545";
		error++;
	} else {
		errorEmail.style.display = "none";
		fEmail.style.borderColor = "#198754";
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		errorAddress.style.display = "block";
		fAddress.style.borderColor = "#dc3545";
		error++;
	} else {
		errorAddress.style.display = "none";
		fAddress.style.borderColor = "#198754";
	}

	let fLastNLetters = onlyLettersSpaces(fLastN.value);
	if(fLastN.value == "" || fLastN.value.length < 3 || !fLastNLetters){
		errorLastN.style.display = "block";
		fLastN.style.borderColor = "#dc3545";
		error++;
	} else {
		errorLastN.style.display = "none";
		fLastN.style.borderColor = "#198754";
	}

	let fPasswordValid = passwordRegEx(fPassword.value);
	if(fPassword.value == "" || !fPasswordValid){
		errorPassword.style.display = "block";
		fPassword.style.borderColor = "#dc3545";
		error++;
	} else {
		errorPassword.style.display = "none";
		fPassword.style.borderColor = "#198754";
	}

	let fPhoneValid = phoneRegEx(fPhone.value);
	if(fPhone.value == "" || !fPhoneValid){
		errorPhone.style.display = "block";
		fPhone.style.borderColor = "#dc3545";
		error++;
	} else {
		errorPhone.style.display = "none";
		fPhone.style.borderColor = "#198754";
	}
	
	if(error>0){
		alert('One or more fields are not valid. Please, check it and click on "Save" again');
	}else{
		alert("Continue to payment method");
	}
}

function onlyLettersSpaces(str) {
	return /^[a-zA-Z\s]+$/.test(str);
}

function emailRegEx(str) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);
}

function passwordRegEx(str) {
	return /^[0-9a-zA-Z]\w{3,7}$/.test(str);
}

function phoneRegEx(str) {
	return /^\d{9}$/.test(str);
}