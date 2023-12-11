/*function acendeLampada()
{
    document.getElementById("Luz").src="saopaulo1.jpg";
}
function apagaLampada()
{
    document.getElementById("Luz").src = "saopaulo2.jpg";
}
//function quebraLampada()
//{
    //document.getElementById ("Luz").src = "lampada_quebrada.jpg";
//}*/

// Lógica para adicionar itens ao carrinho

var carrinho =[];
var total =0;

function adicionarcarrinho(nome, preco){
    carrinho.push ({nome: nome, preco:preco});
    total += preco;
    atualizarcarrinho();
}

function removercarinho(indice){
    total -= carrinho[indice].preco;
    carrinho.splice(indice, 1);
    atualizarcarrinho();
}

function criarfuncaoremover(indice){
    return function(){
        removercarinho(indice);
    }
}

function atualizarcarrinho(){
    var listarcarrinho = document.getElementById("itenscarrinho");
    var totalcarrinho = document.getElementById("totalcarrinho");
    listarcarrinho.innerHTML = "";

    for (var i =0; i < carrinho.length; i++){
        var item = document.createElement("li");
        item.textContent = carrinho[i].nome + "R$ -" + carrinho[i].preco;
        var botaoremover = document.createElement("button"); 
        botaoremover.textContent = "";
        botaoremover.onclick = criarfuncaoremover(i);
        item.appendChild(botaoremover);
        listarcarrinho.appendChild(item);

    }
    totalcarrinho.textContent = total;
}

function realizarcomprar(){
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("total", total);
    window.location.href = "comprar.html";

}

function mostrarCarrinho(){
    var area = document.getElementById('carrinho')
    area.style.display = (area.style.display == "flex") ? "none" : "flex";
}