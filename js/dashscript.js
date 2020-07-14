function listarUsuarios() {
  $.ajax({
    type: "POST",
    url: "http://172.17.217.6/services/cadastroUsuario.php",
    data: {
      action: "getUsers",
    },
    success: function (data) {
      let table = "";
      let lista = data.arrayUsers;
      lista.forEach((usuario) => {
        table += `
          <tbody>
            <tr id="${usuario.id}">
              <td><div>${usuario.name}</div></td>
              <td><div>${usuario.email}</div></td>
              <td><div>${usuario.phone}</div></td>
              <td style="display: flex;">
                  <div class="action-buttons">
                      <button id="editar_Usuario_${usuario.id}" type="button" class="btn btn-info" style="margin: 0 10px">Editar</button>
                  </div>
                  <div class="action-buttons">
                      <button id="excluir_Usuario_${usuario.id}" type="button" class="btn btn-danger" style="margin: 0 10px">Excluir</button>
                  </div>
              </td>
            </tr>
          </tbody>`;
      });
      tDados.innerHTML = table;
      eventoExcluir();
    },
  });
}

function listarDestinos() {
  $.ajax({
    type: "POST",
    url: "http://172.17.217.6/services/cadastroDestinos.php",
    data: {
      action: "getDestinos",
    },
    success: function (data) {
      let table = "";
      let lista = data.arrayDestination;
      lista.forEach((destino) => {
        table += `
          <tbody>
              <tr id="${destino.id}">
                <td><div>${destino.name}</div></td>
                <td><div>${destino.type}</div></td>
                <td><div>${destino.city}</div></td>
                <td><div>${destino.note}</div></td>
                <td><div>${destino.experience}</div></td>
                <td><div>${destino.review}</div></td>
                <td style="display: flex;">
                <div class="action-buttons">
                    <button id="editar_Destinos_${destino.id}" type="button" class="btn btn-info" style="margin: 0 10px">Editar</button>
                </div>
                <div class="action-buttons">
                    <button id="excluir_Destinos_${destino.id}" type="button" class="btn btn-danger" style="margin: 0 10px">Excluir</button>
                </div>
            </td>
              </tr>
          </tbody>`;
      });
      tDicas.innerHTML = table;
      eventoExcluir();
    },
  });
}

function eventoExcluir() {
  let btnExcluir = document.querySelectorAll(".btn-danger");
  btnExcluir.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let idArray = event.target.id;
      let id = idArray.split("_");
      console.log(id[2]);
      excluir(id[1], id[2]);
    });
  });
}

function excluir(tipo, codigo) {
  let tabela = "";
  if (tipo == "Destinos") {
    tabela = "tDicas";
  } else if (tipo == "Usuario") {
    tabela = "tDados";
  }

  let elements = document.querySelectorAll(`#${tabela} tr`);
  elements.forEach((element) => {
    if (element.id == codigo) {
      document.getElementById(codigo).remove();
    }
  });

  $.ajax({
    type: "POST",
    url: `http://172.17.217.6/services/cadastro${tipo}.php`,
    data: {
      action: `delete${tipo}`,
      id: codigo,
    },
    success: (data) => {
      console.log(data.return);
    },
  });
}

btnUser.addEventListener("click", () => {
  let tabelaDestinos = document.querySelector("#tabelaDestinos");
  let tabelaUsuarios = document.querySelector("#tabelaUsuarios");
  tabelaDestinos.classList.add("hide-element");
  tabelaUsuarios.classList.remove("hide-element");

  listarUsuarios();
});

btnDestinos.addEventListener("click", () => {
  let tabelaDestinos = document.querySelector("#tabelaDestinos");
  let tabelaUsuarios = document.querySelector("#tabelaUsuarios");
  tabelaDestinos.classList.remove("hide-element");
  tabelaUsuarios.classList.add("hide-element");

  listarDestinos();
});
