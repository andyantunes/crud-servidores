enviaCadastro.addEventListener("click", (event) => {
  event.preventDefault();
  let title = destinationTitle.value;
  let note = selectDica.value;
  let city = destinationCity.value;
  let type = tipoDica.value;
  let period = periodoDica.value;
  let description = descricaoExperiencia.value;

  $.ajax({
    type: "POST",
    url: "http://172.17.217.6/services/cadastroDestinos.php",
    data: {
      action: "insertDestinos",
      title: title,
      note: note,
      city: city,
      type: type,
      period: period,
      description: description,
    },
    success: (data) => {
      console.log(data);
    },
  });
});
