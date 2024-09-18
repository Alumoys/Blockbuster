
const catalogo = [];

// Função para cadastrar novo item
function cadastraItem() {
    const nome = document.getElementById('nome').value;
    const categoria = document.querySelector('input[name="category-content"]:checked')?.value; // Verifica a categoria selecionada
    const classificacao = document.getElementById('classificacao').value;
    const genero = document.getElementById('genero').value;
    const ano = document.getElementById('ano').value;
    const sinopse = document.getElementById('sinopse').value;

    // Verifica se todos os campos estão preenchidos
    if (nome && categoria && classificacao && genero && ano && sinopse) {
        const novoItem = {
            nome,
            categoria,
            classificacao,
            genero,
            ano,
            sinopse
        };

        // Adiciona o item ao catálogo
        catalogo.push(novoItem);
        alert(`Item "${nome}" cadastrado com sucesso!`);
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}
//função para limpar os campos preenchidos
function limparCampos(){
     document.getElementById('nome').value = '';
     document.querySelector('input[name="category-content"]:checked').checked = false; // Verifica a categoria selecionada
     document.getElementById('classificacao').value = '';
     document.getElementById('genero').value ='';
     document.getElementById('ano').value ='';
     document.getElementById('sinopse').value ='';
    
}

//função criar catalogo, ler 
function listarItens(){
    const listarItens = document.getElementById('content-catalogo');
    listarItens.innerHTML = '';

    if(catalogo.length === 0 ){
        listarItens.innerHTML = '<div class="cards"><p>Nenhum item cadastrado</p></div>'
    } else {
        catalogo.forEach(item => {
          listarItens.innerHTML += 
          forma
    });
}
}