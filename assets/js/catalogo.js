import './index';

 // Carregar o catálogo do Local Storage
 const catalogo = JSON.parse(localStorage.getItem('catalogo')) || [];

 // Função para formatar os detalhes de um filme
 function formatarDetalhesFilme(filme) {
   return `
     <div class="filme-item">
         <strong>Nome:</strong> ${filme.nome}<br />
         <strong>Classificação Indicativa:</strong> ${filme.classificacao}<br />
         <strong>Duração:</strong> ${filme.duracao} minutos<br />
         <strong>Gênero:</strong> ${filme.genero}<br />
         <strong>Ano de Lançamento:</strong> ${filme.ano}<br />
         <strong>Sinopse:</strong> ${filme.sinopse}
     </div>
   `;
 }

 // Exibir todos os filmes cadastrados
 const listaFilmes = document.getElementById('lista-filmes');

 if (catalogo.length === 0) {
   listaFilmes.innerHTML = '<p>Nenhum filme cadastrado.</p>';
 } else {
   catalogo.forEach(filme => {
     listaFilmes.innerHTML += formatarDetalhesFilme(filme);
   });
 }