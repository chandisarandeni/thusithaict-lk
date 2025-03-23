//check and capitalize the all the words in the input fields
document.getElementById("studentName").addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

//check and capitalize the all the words in the input fields
document
  .getElementById("studentAddress")
  .addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });

//check and simplize the email address
document.getElementById("studentEmail").addEventListener("input", function () {
  this.value = this.value.toLowerCase(); // Convert all letters to lowercase
});

//check and capitalize the all the words in the input fields
document.getElementById("studentSchool").addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

//check and capitalize the all the words in the input fields
document
  .getElementById("studentGuardian")
  .addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });

//need to check phone number is valid
function validatePhoneNumber(input) {
  const phonePattern = /^(07\d{8})$/;
  return phonePattern.test(input);
}

document
  .querySelectorAll("#studentPhoneNumber, #guardianPhoneNumber")
  .forEach((inputField) => {
    inputField.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, ""); // Remove non-numeric characters in real-time
      this.style.borderColor = validatePhoneNumber(this.value) ? "" : "red";
    });
  });

//need to check NIC is valid
function validateNIC(input) {
  const nicPattern = /^(\d{9}[VX]|\d{12})$/;
  return nicPattern.test(input);
}

document.getElementById("studentNIC").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9VX]/gi, "").toUpperCase(); // Remove invalid characters & enforce uppercase
  this.style.borderColor = validateNIC(this.value) ? "" : "red";
});
