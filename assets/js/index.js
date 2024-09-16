const catalogo = [];


// Função para cadastrar novo filme
function cadastrarFilme() {
    const nome = document.getElementById('nome').value;
    const classificacao = document.getElementById('classificacao').value;
    const duracao = document.getElementById('duracao').value;
    const genero = document.getElementById('genero').value;
    const ano = document.getElementById('ano').value;
    const sinopse = document.getElementById('sinopse').value;


    if (nome && classificacao && duracao && genero && ano && sinopse) {
        const novoFilme = {
            nome,
            classificacao,
            duracao,
            genero,
            ano,
            sinopse
        };


        catalogo.push(novoFilme);
        alert(`Filme "${nome}" cadastrado com sucesso!`);
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}


// Função para buscar filme por nome
function buscarFilme() {
    const busca = document.getElementById('busca').value.toLowerCase();
    const filmeEncontrado = catalogo.find(filme => filme.nome.toLowerCase() === busca);


    const listaFilmes = document.getElementById('lista-filmes');
    listaFilmes.innerHTML = '';


    if (filmeEncontrado) {
        listaFilmes.innerHTML = formatarDetalhesFilme(filmeEncontrado);
    } else {
        listaFilmes.innerHTML = `<p>Filme "${busca}" não encontrado.</p>`;
    }
}


// Função para listar todos os filmes
function listarFilmes() {
    const listaFilmes = document.getElementById('lista-filmes');
    listaFilmes.innerHTML = '';


    if (catalogo.length === 0) {
        listaFilmes.innerHTML = '<p>Nenhum filme cadastrado no catálogo.</p>';
    } else {
        catalogo.forEach(filme => {
            listaFilmes.innerHTML += formatarDetalhesFilme(filme);
        });
    }
}


// Função auxiliar para formatar os detalhes de um filme
function formatarDetalhesFilme(filme) {
    return `
        <div class="filme-item">
            <strong>Nome:</strong> ${filme.nome}
            <strong>Classificação Indicativa:</strong> ${filme.classificacao}
            <strong>Duração:</strong> ${filme.duracao} minutos
            <strong>Gênero:</strong> ${filme.genero}
            <strong>Ano de Lançamento:</strong> ${filme.ano}
            <strong>Sinopse:</strong> ${filme.sinopse}
        </div>
    `;
}


// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('classificacao').value = '';
    document.getElementById('duracao').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('sinopse').value = '';
}
