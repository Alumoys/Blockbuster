export function filtrarCatalogo(event, catalogo, exibirCatalogo) {
    const termoPesquisa = event.target.value.toLowerCase();
    const itensFiltrados = catalogo.filter(item =>
        item.nome.toLowerCase().includes(termoPesquisa)
    );
    exibirCatalogo(itensFiltrados);
}
