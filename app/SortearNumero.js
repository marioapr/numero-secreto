const menorValor = 10;
const maiorValor = 1000;
const numeroAleatorio = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random()* maiorValor + 1);
}

console.log(numeroAleatorio)

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;


document.getElementById('dark-mode').addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode')
})