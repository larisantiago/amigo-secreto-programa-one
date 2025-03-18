//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o campo de entrada
    let nome = input.value;
  
    
    if (nome === "") {
        alert("Por favor insira um nome válido."); // Alerta caso o campo esteja vazio
        return;
    }
    
    if (amigos.includes(nome)) { // Verifica se o nome já está na lista
        alert("Esse nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome); 
    // Adiciona o nome ao array
    input.value = " "; 
    atualizarLista(); 
    // Atualiza a lista exibida na tela
    
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Seleciona a lista no HTML
    lista.innerHTML = ""; // Limpa a lista antes de adicionar os novos itens
    
    amigos.forEach(nome => {
        let item = document.createElement("li"); // Cria um novo elemento de lista
        item.textContent = nome; // Define o nome do amigo como texto do item
        lista.appendChild(item); // Adiciona o item à lista
    });
    console.log(lista.innerHTML); 
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione ao menos um nome antes de sortear."); // Garante que há nomes para sortear
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let nomeSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente ao índice sorteado
    
    let resultado = document.getElementById("resultado"); // Seleciona a área onde o resultado será exibido
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${nomeSorteado}</strong></li>`; // Exibe o resultado
    

}


