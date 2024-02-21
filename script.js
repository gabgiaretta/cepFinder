document.addEventListener("DOMContentLoaded", function () {
  let informationDiv = document.getElementById("information");
  let myobject = JSON.parse(localStorage.getItem("data"));
  if (informationDiv) {
    let content = `
      CEP: ${myobject.cep}<br>
      Rua: ${myobject.logradouro}<br>
      Número: ${myobject.complemento}<br>
      Bairro: ${myobject.bairro}<br>
      Cidade: ${myobject.localidade}<br>
      Estado: ${myobject.uf}<br>
      IBGE: ${myobject.ibge}<br>
      DDD: ${myobject.ddd}<br>
    `;
    informationDiv.innerHTML = content;
  }
});

function findCep() {
  let cepValue = document.getElementById("inputValue").value;
  fetchCep(cepValue);
}

function goBack() {
  localStorage.clear();
  window.location = "/index.html";
}

function fetchCep(cepValue) {
  if (cepValue.length != 8) {
    alert("CEP inválido");
    throw new Error(`O cep não possui 8 caractéres`);
  }
  let url = `https://viacep.com.br/ws/${cepValue}/json/`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Falha na solicitação`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.cep == undefined) {
        alert("CEP inválido");
        throw new Error(`Cep invalido`);
      }
      let datainfo = JSON.stringify(data);
      localStorage.setItem("data", datainfo);
      if (localStorage.Error) {
        return;
      }
      window.location = "/resultado.html";
    })
    .catch((error) => {
      console.error(`Erro na solicitação: ${error.message}`);
      return;
    });
}
