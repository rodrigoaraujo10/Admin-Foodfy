const showHides = document.querySelectorAll('.show-hide')
const botoes = document.querySelectorAll('.botao')


function esconder(index) {
    botoes[index].addEventListener('click', function(){
        if (showHides[index].classList.contains('hide')) {
            showHides[index].classList.remove('hide')
            botoes[index].innerHTML = `ESCONDER`
        } else {
            showHides[index].classList.add('hide')
            botoes[index].innerHTML = `MOSTRAR`
        }       

    })
}

for (i = 0; i <= 2; i++) {
    esconder(i)
}