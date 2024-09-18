
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