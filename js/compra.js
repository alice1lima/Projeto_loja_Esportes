//Recuperar o carrinho do localstorage

var carrinho = JSON.parse(localStorage.getItem("carrinho"));
var total = localStorage.getItem("total");

//Atualizar a lista de itens comprados e o total

var listaitens = document.getElementById("itenscomprados");
var totalcompra = document.getElementById("totalcompra");

for (var i = 0; i < carrinho.length; i++ ){
    var item = document.createElement("li");
    item.textContent = carrinho[i]. nome + " - R$ - " + carrinho[i].preco;
    listaitens.appendChild(item);
}

totalcompra.textContent = total