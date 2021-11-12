let nome = document.querySelector('#nome');
let btn = document.querySelector('#btn');
let ol = document.querySelector('ol');


btn.addEventListener('click', event => {
  event.preventDefault();

  // AJAX - Assynchronous Javascript And XHTML

  // a mesma url que nós digitamos na barra de endereço do navegador
  let url = `https://reqres.in/api/users?page=2`;

  // por padrão, o fetch() gera um GET para a url indicada
  fetch(url) // comunicação assíncrona, ou seja, precisamos programar algo a ser feito quando a resposta chegar
    // assim que a resposta chegar - a resposta é um array de objs stringificados
    .then( response => response.json() ) // objetifica a resposta - também é uma operação assíncrona!!!
    // response.json() transforma a resposta de string para array de objetos
    // assim que o array de objetos repositorio estiver pronto:
    .then( resultado => {
      let arrayRepos = resultado.data;
      console.log(arrayRepos); // mostrando o array inteiro no log

      // mostrando o campo name do primeiro e segundo objetos do array
      console.log(`name do repo 0: ${arrayRepos[0].first_name}`);
      console.log(`name do repo 1: ${arrayRepos[1].first_name}`);

      ol.innerHTML = "";
      // para cada repo do array
      arrayRepos.forEach( repo => {
        // loga o campo first_name
        console.log(repo.first_name);
        // adiciona o first_name em mais um item de lista
        ol.innerHTML += `<li> <div><img src="${repo.avatar}" /></div> ${repo.first_name}</li>`;
      });

    });

})



/*
(async() => {

  const params = {
    "name": "morpheus",
    "job": "leader"
  }

  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });

  const data = await response.json();
  console.log(data);

})();

*/