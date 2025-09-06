//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function capturaAmigo (){
    let campo = document.getElementById("amigo")
    let nome = campo.value.trim()
    
    if(nome === ""){
        alert("digite um nome")
        return;
    } 
    amigos.push(nome)
    atualizarLista();
    campo.value = ""
}