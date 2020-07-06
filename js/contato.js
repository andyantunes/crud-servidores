const UserRegister = () => {
  let name = cadName.value;
  let password = cadPassword.value;
  let email = cadEmail.value;
  let phone = cadPhone.value;

  $.ajax({
    method: "POST",
    url: "http://localhost/crud-servidores//php/cadastroUsuario.php",
    data: {
      name: name,
      password: password,
      email: email,
      phone: phone,
    },
    beforeSend: () => {
      AlertSigningUp();
    },
  }).done((data) => {
    if (data.return) {
      Swal.close();
    }
  });
};

const UserRegisterValidation = () => {
  let name = cadName.value;
  let password = cadPassword.value;
  let email = cadEmail.value;
  let phone = cadPhone.value;
  let error = false;

  if (name === "") {
    cadName.style.border = "2px solid red";
    error = false;
  } else {
    cadName.style.border = "1px solid #ced4da";
    error = true;
  }

  if (password === "") {
    cadPassword.style.border = "2px solid red";
    error = false;
  } else {
    cadPassword.style.border = "1px solid #ced4da";
    error = true;
  }

  if (email === "") {
    cadEmail.style.border = "2px solid red";
    error = false;
  } else if (cadEmail.value.indexOf("@") === -1) {
    cadEmail.style.border = "2px solid red";
    error = false;
  } else {
    cadEmail.style.border = "1px solid #ced4da";
    error = true;
  }

  if (phone === "") {
    cadPhone.style.border = "2px solid red";
    error = false;
  } else {
    cadPhone.style.border = "1px solid #ced4da";
    error = true;
  }

  return error;
};

const AddEventBlurInputs = () => {
  let listInputs = document.querySelectorAll("#cadastroForm input");
  listInputs.forEach((input) => {
    let inputId = input.id;
    let inputElement = document.querySelector(`#${inputId}`);
    inputElement.addEventListener("focus", (event) => {
      let element = event.target;
      element.style.border = "1px solid #ced4da";
    });
  });
};

sendMessageButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (UserRegisterValidation()) {
    UserRegister();
  }
});

// Arrumar click no botão de mostrar e esconder senha
showHidePassword.addEventListener("click", (event) => {
  console.log(event);
  ShowHidePassword(showHidePassword, cadPassword);
});

AddEventBlurInputs();
PhoneMask(cadPhone);
