

if (!localStorage.getItem('email')) {
    alert('Voce nao esta logado!\n Logue para ter acesso ao sistema!')
    location.href = 'login.html'
}


var url = "login.html"
var icon = document.querySelector(`#logout`)


function openInNewTab(url) {
    if (confirm('Deseja sair?')) {

        const win = window.open(url)
        win.focus()

    }

}




icon.addEventListener(`click`, () => {
    openInNewTab(url)


})


// js - sair 500px

var url = "login.html"
var icon = document.querySelector(`#logout-device`)


function openInNewTab(url) {
    if (confirm('Deseja sair?')) {

        const win = window.open(url)
        win.focus()

    }

}




icon.addEventListener(`click`, () => {
    openInNewTab(url)


})




// ______________________carrinho_______________
var proAdd = document.getElementById("add")
var span = document.createElement("span");

// Array para armazenar os produtos selecionados
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();




}

// Função para remover um produto do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Função para atualizar o carrinho na página HTML
function atualizarCarrinho() {
    let carrinhoElement = document.getElementById("carrinho");
    let totalElement = document.getElementById("total");

    // Limpar o carrinho antes de atualizar
    carrinhoElement.innerHTML = "";
    totalElement.innerText = calcularTotal().toFixed(2);

    // Adicionar cada produto do carrinho ao  HTML
    for (let i = 0; i < carrinho.length; i++) {
        let produto = carrinho[i];
        let produtoElement = document.createElement("div");
        produtoElement.innerHTML = produto.nome + " - R$ " + produto.preco.toFixed(2) +
            "<button onclick=\"removerDoCarrinho(" + i + ")\">Remover</button>";
        carrinhoElement.appendChild(produtoElement);
    }
}

// Função para calcular o total da compra
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco;
    }
    return total;
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

var urlPedido = "pedido.html"
var car = document.getElementById("preco-carrinho")

car.addEventListener(`click`, () => {
    if (confirm('Deseja realizar a compra?')) {

        const win = window.open(urlPedido)
    win.focus()   

      }
      
      localStorage.setItem("produtosSelecionados", JSON.stringify(carrinho));
      var produtosString = localStorage.getItem("produtosSelecionados");
      var produtosSelecionados = JSON.parse(carrinho);
      var divCarrinho = document.getElementById("produtosSelecionados");
    
      produtosSelecionados.forEach(function(produto) {

        
        var paragrafo = document.createElement("p");
        paragrafo.textContent = "Nome: " + nome + ", produto.Preço: " + produto.preco  ;
      
        // Adicione o parágrafo à div do carrinho
        divCarrinho.appendChild(paragrafo);
      });
    
      
      
      
      
      
      
      




})













// menu

// const hamburguer = document.querySelector(".hamburguer");
// const navMenu =document.querySelector(".nav-menu");

// hamburguer.addEventListener("click", ()=>{
//     hamburguer.classList.toggle(`active`);
//     navMenu.classList.toggle(`active`);
// })














