export function exibirCatalogo(items) {
    const container = document.getElementById('catalogo-container');
    if (container) {
        container.innerHTML = '';

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.dataset.id = item.id;
            div.innerHTML = `
                <div class="content-video">${item.video}</div>
                <div class="tabela">
                    <h3>${item.nome}</h3>
                    <p class="list-item"><strong>Categoria:</strong> ${item.categoria}</p>
                    <p class="list-item"><strong>Classificação:</strong> ${item.classificacao}</p>
                    <p class="list-item"><strong>Gênero:</strong> ${item.genero}</p>
                    <p class="list-item"><strong>Ano:</strong> ${item.ano}</p>
                    <p class="list-item"><strong>Sinopse:</strong> ${item.sinopse}</p>
                </div>
                <div class="btn-itens">
                <button class="editar-item"><i class="fa-solid fa-pencil"></i> Editar</button>
                <button class="excluir-item"><i class="fa-solid fa-trash-can"></i> Excluir</button>
                </div>
                
            `;
            container.appendChild(div);
        });
    }
}
