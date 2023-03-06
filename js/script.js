const validationMge = document.querySelector("#validationMessage");
const emailForm = document.querySelector("#emailForm");
const emailAddress = document.querySelector("#emailAddress");

emailAddress.addEventListener("input",(event) => {
  if (emailAddress.validity.valid) {
    validationMge.textContent = "";
  }else{
    ShowError();
  }
});
emailForm.addEventListener("submit",(event) => { 
  if (!emailAddress.validity.valid) {
    ShowError();
    event.preventDefault();
  }
});
const ShowError = () => { 
  if (emailAddress.value == "") {
    validationMge.textContent = "Please povide a email";
  } else if(emailAddress.validity.typeMismatch) {
    validationMge.textContent = "Please povide a valid email"; 
  }
}

