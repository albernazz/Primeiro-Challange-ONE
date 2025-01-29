//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let NomeAmigo = document.querySelector('input').value;
    
        

    if(NomeAmigo == ''){
        alert('Por Favor, insira um nome.');
        limparCampo();
    }else{
        amigos.push(NomeAmigo);
        console.log(amigos);
        atualizarListaAmigos();
        limparCampo();

    }
}

function limparCampo(){
    NomeAmigo = document.querySelector('input');
    NomeAmigo.value = '';
}

function atualizarListaAmigos() {

    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for(i = 0; i <= amigos.length ; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}

function sortearAmigo(){
    let listaSorteado = Math.floor(Math.random() * amigos.length);
    nomeSorteado = amigos[listaSorteado];
    console.log(nomeSorteado);
    mostraNomeSorteado();
    limparVetor();
    console.log(amigos);
}

function mostraNomeSorteado(){
    let nomeMostrado = document.getElementById('resultado');
    nomeMostrado.innerHTML = `O nome sorteado é ${nomeSorteado}`;
}

function limparVetor(){
    amigos.length = 0;
}