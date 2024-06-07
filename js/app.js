function alterarStatus(id) { //função para controle dos botões de alugar e devolver
    
    let gameAlugado = document.getElementById(`game-${id}`); //Seleciona a tag li pelo ID
    let imagem = gameAlugado.querySelector('.dashboard__item__img'); //Seleciona o o elemento de imagem dentro da tag li
    let botao = gameAlugado.querySelector('.dashboard__item__button'); //Seleciona o o elemento do botão dentro da tag li
    
    if ( botao.classList.contains('dashboard__item__button--return')) { //Condicional que verifica se o botão possui uma classe
        let opcao = confirm('Deseja devolver o jogo?');//Opçao se deseja devolver o jogo ou nao
        if (opcao == true) { //condicional para develver o jogo
            botao.classList.remove('dashboard__item__button--return'); //remove a classe que modifica o botão para alugado
            imagem.classList.remove('dashboard__item__img--rented'); //remove a classe que modifica o a imagem para alugado
            botao.textContent = 'Alugar'; //Altera o texto do botão para Alugar
        }
    } else {
        botao.classList.add('dashboard__item__button--return'); //adiciona a classe que modifica o a imagem para alugado
        imagem.classList.add('dashboard__item__img--rented'); //adiciona a classe que modifica o a imagem para alugado
        botao.textContent = 'Devolver'; //Altera o texto do botão para Devolver
    }
}