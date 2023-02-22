var lista = document.getElementById('lista')

var final = document.getElementById('res')

var numero = document.getElementById('num')

var c = 0
var list = []



function adiciona()
{
    let valor = Number(num.value)
    let teste = valida(valor)

    
    if (valor > 100 || valor < 0 || num.value.length == 0)
    {
        alert('Por favor cheque os campos e tente novamente!!')
    }
    else if(teste){
        alert('Este valor já foi previamente adicionado')
    }
    else
    {
        list[c] = valor
        c++
        let item = document.createElement('option')
        item.innerText = `Valor ${valor} foi adicionado`
        lista.appendChild(item)
    }
}

function valida(valor)
{
    pos = 0
    for (pos in list)
    {
        if (list[pos] == valor){
            return true
        }
        else
        {
            return false
        }
    }
}

function finalizar()
{

}
