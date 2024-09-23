export function deleteItem(catalogo, id) {
    const index = catalogo.findIndex(item => item.id === id);
    if (index !== -1) {
        // Remove o item do array e atualiza o localStorage
        catalogo.splice(index, 1);
        localStorage.setItem('catalogo', JSON.stringify(catalogo));
    }
}
