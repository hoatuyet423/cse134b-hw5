
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const commentInput = document.getElementById("comment");

  const errorOutput = document.getElementById("error-output");
  const infoOutput = document.getElementById("info-output");

  let form_errors = {};
  let nameErrors = "";
  let emailErrors = "";
  let commentErrors = "";

  nameInput.addEventListener("input", (e) => {
    const allowedPattern = /^[A-Za-z ]*$/;
    if (!allowedPattern.test(nameInput.value)) {
        nameInput.value = nameInput.value.replace(/[^A-Za-z ]/g, "");
        errorOutput.textContent = "You can only use alphabet characters in your name section";
        nameErrors = "User have use characters other than alphabet in their name section";
        setTimeout(() => {
            errorOutput.textContent = "";
          }, 5000);
    }
  });

  emailInput.addEventListener("input", (e) => {
    const allowedPattern =  /^[A-Za-z@. ]*$/;
    if (!allowedPattern.test(emailInput.value)) {
        emailInput.value = emailInput.value.replace(/[^A-Za-z@. ]/g, "");
        errorOutput.textContent = "You can only use letters, digits, . and @ characters in your email section";
        emailErrors = "User have use characters other than letters, digits, . and @ in their email section";
        setTimeout(() => {
            errorOutput.textContent = "";
          }, 5000);
    }
  });

  const maxChars = 200;
  commentInput.addEventListener("input", () => {
    const currentLength = commentInput.value.length;
    const charsLeft = maxChars - currentLength;
    infoOutput.textContent = `Your textarea have ${charsLeft} characters left. Your textarea can have a maximum of ${maxChars} characters`;
    commentErrors = "User have use more than 200 characters in their comment section";
    if (charsLeft < 20) {
      infoOutput.style.fontWeight = "bold";
    } else {
      infoOutput.style.fontWeight = "normal";
    }
  });

  form.addEventListener("submit", (event) => {
    if (nameErrors) {
        form_errors["name"] = nameErrors; 
    }
    if (emailErrors) {
        form_errors["email"] = emailErrors;
    }
    if (commentErrors) {
        form_errors["comment"] = commentErrors;
    }
    console.log(form_errors);
    addFormErrors(form, form_errors);
  });


  function addFormErrors(form, errors) {
    const existing = document.querySelector("input[name='form-errors']");
    if (existing) existing.remove();
    const errorsField = document.createElement("input");
    errorsField.type = "hidden";
    errorsField.name = "form-errors";
    errorsField.value = JSON.stringify(errors);
    form.appendChild(errorsField);
  }
});

