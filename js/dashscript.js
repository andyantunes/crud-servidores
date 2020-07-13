btnDicas.addEventListener("click", () => {



});


function listarDestinos() {
    let table = "";
    let lista = 
    lista.forEach(() => {
      table += `
        <thead class="text-light bg-dark">
            <tr>
                <th scope="col">NOME</th>
                <th scope="col">SENHA</th>
                <th scope="col">EMAIL</th>
                <th scope="col">TELEFONE</th>
            </tr>
        </thead>

        <tbody>
            <tr id="${}">
            <td>
                 <div>${}</div>
            </td>
            <td>
                <div>${}</div>
            </td>
            <td>
                <div>${}</div>
            </td>
            <td>
                <div class="action-buttons">
                    <button id="btnExcluir_${}" type="button" class="btn btn-danger">Excluir</button>
                </div>
                <div class="action-buttons">
                    <button id="btnExcluir_${}" type="button" class="btn btn-danger">Excluir</button>
                </div>
            </td>
            </tr>
        </tbody>`;
        
    });










btnDestinos.addEventListener("click", () => {



});


function listarDestinos() {
    let table = "";
    let lista = 
    lista.forEach(() => {
      table += `
        <thead class="text-light bg-dark">
            <tr>
                <th scope="col">TÍTULO</th>
                <th scope="col">TIPO</th>
                <th scope="col">CIDADE</th>
                <th scope="col">NOTA</th>
                <th scope="col">PERÍODO</th>
                <th scope="col">EXPERIÊNCIA</th>
            </tr>
        </thead>

        <tbody>
            <tr id="${}">
            <td>
                 <div>${}</div>
            </td>
            <td>
                <div>${}</div>
            </td>
            <td>
                <div>${}</div>
            </td>
            <td>
                <div>${}</div>
            </td>
            <td>
                <div>${}</div>
            </td>
            <td>
                <div>${}</div>
            </td>
            <td>
                <div class="action-buttons">
                    <button id="btnExcluir_${}" type="button" class="btn btn-danger">Excluir</button>
                </div>
                <div class="action-buttons">
                    <button id="btnExcluir_${}" type="button" class="btn btn-danger">Excluir</button>
                </div>
            </td>
            </tr>
        </tbody>`;
        
    });
    tDicas.innerHTML = table;
    eventoExcluir();
  };

  function eventoExcluir() {
    let btnExcluir = document.querySelectorAll(".btn-danger");
    btnExcluir.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        let idArray = event.target.id;
        let id = idArray.split("_");
        excluir(id[1]);
      });
    });
  };
  
  function excluir(codigo) {
    let arrayObject = JSON.parse(localStorage.getItem('cadastro'));
    let object = arrayObject.find(cadastro => cadastro.codigo == codigo);
    let objectIndex = arrayObject.indexOf(object);
    arrayObject.splice(objectIndex, 1);
    localStorage.setItem('cadastro', JSON.stringify(arrayObject));
    document.getElementById(codigo).remove();
    
  };