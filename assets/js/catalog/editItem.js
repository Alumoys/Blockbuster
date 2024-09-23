export function editItem(catalogo, id, updatedItem) {
    const index = catalogo.findIndex(item => item.id === id);
    if (index !== -1) {
        // Atualiza os dados do item e salva no localStorage
        catalogo[index] = { ...catalogo[index], ...updatedItem };
        localStorage.setItem('catalogo', JSON.stringify(catalogo));
    }
}
