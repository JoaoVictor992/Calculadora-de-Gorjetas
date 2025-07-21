function arrumarValor(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}
function pessoaDivisao(value){
    if (value == 1) return value + ' Pessoa'
    return value + ' Pessoas'
}

function valores() {
    let suaConta = Number(document.getElementById('yourBill').value)
    let porcetagem = document.getElementById('tipInput').value
    let divisao = document.getElementById('splitInput').value

    let tipValue = suaConta * (porcetagem / 100)
    let billTotal = suaConta + tipValue
    let billEach = billTotal / divisao

    document.getElementById('tipPercent').innerHTML = porcetagem + '%'
    document.getElementById('tipValue').innerHTML = arrumarValor(tipValue)
    document.getElementById('totalWithTip').innerHTML = arrumarValor(billTotal)
    document.getElementById('billEach').innerHTML = arrumarValor(billTotal / divisao)
    document.getElementById('splitValue').innerHTML = pessoaDivisao(divisao)
}
