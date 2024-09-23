import { cadastraItem } from './catalog/addItem.js';
import { exibirCatalogo } from './catalog/displayCatalog.js';
import { filtrarCatalogo } from './catalog/filterCatalog.js';
import { clearFields } from './catalog/clearFields.js';
import { deleteItem } from './catalog/deleteItem.js';
import { editItem } from './catalog/editItem.js';

document.addEventListener('DOMContentLoaded', () => {
    let catalogo = JSON.parse(localStorage.getItem('catalogo')) || [];

    function handleDelete(id) {
        deleteItem(catalogo, id);
        exibirCatalogo(catalogo);
    }

    function handleEdit(id) {
        const item = catalogo.find(item => item.id === id);
        if (item) {
            
            
            // Insira o código para criar um formulário ou modal de edição
            const nome = prompt("Edite o nome:", item.nome);
            const categoria = prompt("Edite a categoria:", item.categoria);
            const classificacao = prompt("Edite a classificação:", item.classificacao);
            const genero = prompt("Edite o gênero:", item.genero);
            const ano = prompt("Edite o ano:", item.ano);
            const video = prompt("Edite o vídeo:", item.video);
            const sinopse = prompt("Edite a sinopse:", item.sinopse);

            const updatedItem = { nome, categoria, classificacao, genero, ano, video, sinopse };
            editItem(catalogo, id, updatedItem);
            exibirCatalogo(catalogo);
        }
    }

    exibirCatalogo(catalogo);

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => filtrarCatalogo(event, catalogo, exibirCatalogo));
    }

    const cadastroButton = document.querySelector('.btn-cadastro');
    if (cadastroButton) {
        cadastroButton.addEventListener('click', () => {
            cadastraItem(catalogo);
            clearFields();
            exibirCatalogo(catalogo);
        });
    }

    // Ações de edição e exclusão para os botões
    document.getElementById('catalogo-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('editar-item')) {
            const itemId = parseInt(event.target.closest('.item').dataset.id, 10);
            handleEdit(itemId);
        } else if (event.target.classList.contains('excluir-item')) {
            const itemId = parseInt(event.target.closest('.item').dataset.id, 10);
            handleDelete(itemId);
        }
    });
});
