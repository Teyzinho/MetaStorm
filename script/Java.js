// Seleciona todos os elementos com o ID "prod-indisponivel"
var elementos = document.querySelectorAll("#prod-indisponivel");
var elementos2 = document.querySelectorAll(".produtos");


// Percorre a lista de elementos e atribui a função desejada
elementos.forEach(function(elemento) {
  // Adiciona um evento de clique ao elemento
  elemento.addEventListener("click", function() {
    alert("Produto Indisponível");

  });
});

// Percorre a lista de elementos e atribui a função desejada
elementos2.forEach(function(elemento) {
    // Adiciona um evento de clique ao elemento
    elemento.addEventListener("click", function() {
      alert("Produto Indisponível");
  
    });
  });