// DOM
const nome = document.querySelector('#nome')
const uni1 = document.querySelector('#uni1')
const uni2 = document.querySelector('#uni2')
const uni3 = document.querySelector('#uni3')
const calcular= document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

// evento
calcular.addEventListener('click', ()=> {
    nota1 = Number(uni1.value)
    nota2 = Number(uni2.value)
    nota3 = Number(uni3.value)
    media = (nota1 + nota2 + nota3)/3
    

    resultado.textContent = `A média do aluno(a) ${nome.value} é ${media.toFixed(1)}`

})