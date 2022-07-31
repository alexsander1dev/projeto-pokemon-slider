/*OBJETIVO 1 - mostrar o próximo cartão ao clicar na seta avançar
    -passo 1 - pegar o elemento HTML da seta avançar;
    -passo 2 - identificar o clique do usuário na seta avançar;
    -passo 3 - mostrar o próximo cartão da lista;
    -passo 4 - buscar o cartão que está selecionado e esconder;
*/
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

  const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function (){

    if (cartaoAtual === cartoes.length -1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
  
});

/*OBJETIVO  2 - mostrar o cartão anterior ao clicar na seta voltar
    -passo 1 - pegar o elemento HTML da seta voltar;
    -passo 2 - identificar o clique do usuário na seta voltar;
    -passo 3 - mostrar o cartão anterior da lista;
    -passo 4 - buscar o cartão que está selecionado e esconder
*/
btnVoltar.addEventListener('click', function (){

    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});