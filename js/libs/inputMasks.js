const PhoneMask = (id) => {
  id.addEventListener("keyup", (event) => {
    if (id.value.length === 1) {
      let newValue = id.value.padStart(2, "(");
      id.value = newValue;
    }

    if (id.value.length === 3) {
      let newValue = id.value.padEnd(4, ")");
      id.value = newValue;
    }

    if (id.value.length === 9) {
      let newValue = id.value.padEnd(10, "-");
      id.value = newValue;
    }
  });
};

const ShowHidePassword = (iconId, inputId) => {
  iconId.classList.toggle("fa-eye-slash");
  iconId.classList.toggle("fa-eye");
  console.log("foi");

  let eye = iconId.classList.contains("fa-eye");
  if (eye) {
    console.log("text");
    inputId.type = "text";
  } else {
    console.log("password");
    inputId.type = "password";
  }
};
