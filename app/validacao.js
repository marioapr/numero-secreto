function validaChute(chute) {
    const numero = +chute
    if(ValidaSeChuteENumero(numero)){
        if(chute.toUpperCase() === 'GAME OVER'){
            document.body.innerHTML = `
            <h2>GAME OVER!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
            document.body.classList.add('game-over')
        } else {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }
        
    }
    if(maiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += ` 
        <div>Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroAleatorio){
        document.body.innerHTML = `<h2>Você Acertou!</h2>
        <div class="mensagem"> O número secreto era: ${numeroAleatorio}</div>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;
    } else if(numero > numeroAleatorio) {
       elementoChute.innerHTML += `
       <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div> 
       ` } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div> 
        `
    }
}

function ValidaSeChuteENumero(numero){
    return Number.isNaN(numero)
};

function maiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})