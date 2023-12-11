document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.seta-anterior');
    const nextBtn = document.querySelector('.seta-proxima');
  
    let currentIndex = 0;
  
    function updateSlidePosition() {
      wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  
    function goToPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    }
  
    function goToNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    }
  
    function autoRotate() {
      setInterval(goToNextSlide, 5000); // Troca de slide a cada 3 segundos
    }
  
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
  
    autoRotate(); // Inicia a rotação automática
  });
  
//Final do carrosel

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
        botaoremover.textContent = "X";
        botaoremover.onclick = criarfuncaoremover(i);
        item.appendChild(botaoremover);
        listarcarrinho.appendChild(item);

    }
    totalcarrinho.textContent = total;
}

function realizarcomprar(){
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("total", total);
    window.location.href = "compra.html";
}



function mostrarCarrinho(){
  var area = document.getElementById('carrinho')
  area.style.display = (area.style.display == "flex") ? "none" : "flex";
}






