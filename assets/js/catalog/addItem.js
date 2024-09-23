export function cadastraItem(catalogo) {
    const nome = document.getElementById("nome").value;
    const categoria = document.querySelector('input[name="category-content"]:checked')?.value;
    const classificacao = document.getElementById("classificacao").value;
    const genero = document.getElementById("genero").value;
    const ano = document.getElementById("ano").value;
    const video = document.getElementById("video").value;
    const sinopse = document.getElementById("sinopse").value;

    if (nome && categoria && classificacao && genero && ano && video && sinopse) {
        const novoItem = {
            id: Date.now(),
            nome,
            categoria,
            classificacao,
            genero,
            video,
            ano,
            sinopse,
        };

        catalogo.push(novoItem);
        localStorage.setItem('catalogo', JSON.stringify(catalogo));

        const idContainer = document.getElementById('idContainer');
        if (idContainer) {
            idContainer.innerHTML = '';

            const idDisplay = document.createElement('p');
            idDisplay.innerText = `${novoItem.nome} foi adicionado com sucesso. ID gerado ${novoItem.id}`;
            idDisplay.style.color = 'white';
            idDisplay.style.background = 'green';
            idDisplay.style.borderRadius = '8px';
            idDisplay.style.padding = '10px';

            idContainer.appendChild(idDisplay);

            setTimeout(() => {
                idDisplay.remove();
            }, 5000);
        }
    } else {
        const idContainer = document.getElementById('idContainer');
        idContainer.innerHTML = '';

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
