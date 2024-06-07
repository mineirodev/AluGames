function alterarStatus(id) {
    
    let gameAlugado = document.getElementById(`game-${id}`);
    let imagem = gameAlugado.querySelector('.dashboard__item__img');
    let botao = gameAlugado.querySelector('.dashboard__item__button'); 
    
    if ( botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
}