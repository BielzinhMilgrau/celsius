let resposta = document.getElementById('resposta')


function calcular(){
        let grau = Number( document.getElementById('grau').value)
        let grauRes

        grauRes = (grau * 9 / 5 ) + 32

        resposta.innerHTML = "resposta é "+ grauRes + " graus Fahrenheit"



}