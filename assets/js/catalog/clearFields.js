export function clearFields() {
     document.getElementById("nome").value = '';
     const selectedCategory = document.querySelector('input[name="category-content"]:checked');
     if (selectedCategory) selectedCategory.checked = false;
     document.getElementById("classificacao").value = '';
     document.getElementById("genero").value = '';
     document.getElementById("ano").value = '';
     document.getElementById("video").value = '';
     document.getElementById("sinopse").value = '';
 }
 