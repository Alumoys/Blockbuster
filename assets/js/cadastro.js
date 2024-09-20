document.addEventListener('DOMContentLoaded', () => {
    const catalogo = JSON.parse(localStorage.getItem('catalogo')) || [];

    // Função para cadastrar novo item
    function cadastraItem() {
        const nome = document.getElementById("nome").value;
        const categoria = document.querySelector('input[name="category-content"]:checked')?.value;
        const classificacao = document.getElementById("classificacao").value;
        const genero = document.getElementById("genero").value;
        const ano = document.getElementById("ano").value;
        const video = document.getElementById("video").value;
        const sinopse = document.getElementById("sinopse").value;

        // Verifica se todos os campos estão preenchidos
        if (nome && categoria && classificacao && genero && ano && video && sinopse) {
            const novoItem = {
                id: Date.now(), // Gera um id único baseado no timestamp atual.
                nome,
                categoria,
                classificacao,
                genero,
                video,
                ano,
                sinopse,
            };

            // Adiciona o item ao catálogo
            catalogo.push(novoItem);
            localStorage.setItem('catalogo', JSON.stringify(catalogo));

            // Seleciona container de ID no HTML
            const idContainer = document.getElementById('idContainer');
            if (idContainer) {
                idContainer.innerHTML = '';

                // Cria o parágrafo para exibir o ID
                const idDisplay = document.createElement('p');
                idDisplay.innerText = `${novoItem.nome} foi adicionado com sucesso. ID gerado ${novoItem.id}`;
                idDisplay.style.color = 'white';
                idDisplay.style.background = 'green';
                idDisplay.style.borderRadius = '8px';
                idDisplay.style.padding = '10px';

                idContainer.appendChild(idDisplay);

                // Define um tempo de exibição da mensagem
                setTimeout(() => {
                    idDisplay.remove();
                }, 5000);
            }

            limparCampos();
        } else {
            idContainer.innerHTML = '';

            // Cria o parágrafo para exibir  mesagem de erro
            const idDisplay = document.createElement('p');
            idDisplay.innerText = `Preencha corretamente todos os campos!`;
            idDisplay.style.color = 'white';
            idDisplay.style.background = 'red';
            idDisplay.style.borderRadius = '8px';
            idDisplay.style.padding = '10px';

            idContainer.appendChild(idDisplay);

            setTimeout(() => {
                idDisplay.remove();
            }, 5000);
        }
    }

    // Função para limpar os campos preenchidos
    function limparCampos() {
        document.getElementById("nome").value = "";
        const categoriaSelecionada = document.querySelector('input[name="category-content"]:checked');
        if (categoriaSelecionada) {
            categoriaSelecionada.checked = false;
        }
        document.getElementById("classificacao").value = "";
        document.getElementById("genero").value = "";
        document.getElementById("ano").value = "";
        document.getElementById('video').value = "";
        document.getElementById("sinopse").value = "";
    }

    // Função para exibir os itens do catálogo
    function exibirCatalogo(items) {
        const container = document.getElementById('catalogo-container');
        if (container) {
            container.innerHTML = '';

            items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'item';
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
                    <button class="editar-item" onclick="editarItem()"><i class="fa-solid fa-pencil"></i></button>
                `;
                container.appendChild(div);
            });
        }
    }

    // Função para filtrar o catálogo com base na pesquisa
    function filtrarCatalogo(event) {
        const termoPesquisa = event.target.value.toLowerCase();
        const itensFiltrados = catalogo.filter(item =>
            item.nome.toLowerCase().includes(termoPesquisa)
        );
        exibirCatalogo(itensFiltrados);
    }

    // Inicializa a página com todos os itens do catálogo armazenados no localStorage
    exibirCatalogo(catalogo);

    // Adiciona um ouvinte de eventos para a pesquisa, inccompleto....!!!
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', filtrarCatalogo);
    }

    // Adiciona um ouvinte de eventos para o botão de cadastro
    const cadastroButton = document.querySelector('.btn-cadastro');
    if (cadastroButton) {
        cadastroButton.addEventListener('click', cadastraItem);
    }
});
