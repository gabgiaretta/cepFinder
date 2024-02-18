const myobject = {
  cep: "85902-120",
  logradouro: "Rua Crissiumal",
  complemento: "até 2399/2400",
  bairro: "Jardim La Salle",
  localidade: "Toledo",
  uf: "PR",
  ibge: "4127700",
  gia: "",
  ddd: "45",
  siafi: "7927",
};

document.addEventListener("DOMContentLoaded", function () {
  let informationDiv = document.getElementById("information");

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
