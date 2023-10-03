// !declare variables
const emailForm = document.querySelector("[data-js-form]"),
  emailInput = document.querySelector("[data-js-email]"),
  errorMessage = document.querySelector("[data-js-error]"),
  successMessage = document.querySelector("[data-js-success]");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateEmail();
});

function validateEmail() {
  const emailValue = emailInput.value.trim();

  function success() {
    emailForm.classList.add("active");
    emailForm.classList.remove("inactive");
    emailInput.removeAttribute("aria-invalid");
    emailInput.removeAttribute("aria-describedby");
    successMessage.setAttribute("role", "alert");
    emailInput.style.display = "none";
  }

  function error() {
    emailForm.classList.add("inactive");
    emailInput.focus();
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.setAttribute("aria-describedby", "error__message");
    emailInput.removeAttribute("placeholder");
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    setTimeout(success, 150);
  } else if (emailValue === "") {
    errorMessage.textContent = "Please provide an email address";
    errorMessage.style.color = " hsl(0 94% 68%)";
    error();
  } else {
    errorMessage.textContent = `"${emailValue}" is not a a valid email`;
    errorMessage.style.color = " hsl(0 94% 68%)";
    errorMessage.style.marginTop = "0.3125rem";
  }
}

// !keydown eventlistner
emailInput.addEventListener("keydown", function () {
  emailForm.classList.remove("inactive");
  emailInput.removeAttribute("aria-invald");
  emailInput.removeAttribute("aria-describedby");
});

// !create a placeholder text
document.getElementById("email__input").placeholder = "Email Address";
