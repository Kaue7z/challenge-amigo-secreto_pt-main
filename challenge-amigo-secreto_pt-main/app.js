//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo (){
    let campo = document.getElementById("amigo");
    let nome = campo.value.trim();
    
    if(nome === ""){
        alert("digite um nome")
        return;
    } 
    amigos.push(nome);
    atualizarLista();
    campo.value = "";
}

function atualizarLista () {
    let listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li")
        item.textContent = amigos[i]
        listaAmigos.appendChild(item)
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("A lista esta vazia!");
        return
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    document.getElementById("resultado").innerHTML = `O amigo sorteado foi ${amigoSorteado}`;
}

