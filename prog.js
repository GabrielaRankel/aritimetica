let resposta = document.getElementById('resposta')

function calcular(){
    let num1 = (document.getElementById("num1").value)
    let num2 = (document.getElementById("num2").value)
    let soma = num1 + num2
    resposta.innerHTML = 'Resltatdo da Soma = ' + soma

}