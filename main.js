const cep = document.querySelector('#cep');
const showData = (result) => {
  for (let campo in result) {
    if (document.querySelector(`#${campo}`)) {
      document.querySelector(`#${campo}`).value = result[campo]
    }
  }
}

cep.addEventListener('blur', event => {
  let cepSemTraco = cep.value.replaceAll('-', '');
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  };

  const api = fetch(`https://viacep.com.br/ws/${cepSemTraco}/json/`, options);
  api.then(response => response.json()
    .then(data => showData(data)));
});
