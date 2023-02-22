var lista = document.getElementById('lista')

var final = document.getElementById('res')

var numero = document.getElementById('num')

var list = []
c = 0


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
    for (let pos in list)
    {
        if (list[pos] == valor){   
            return true
        }
    }
    return false
    
}

function finalizar()
{
    final.innerHTML = ""
    final.innerHTML += `<p>Ao todo, temos ${list.length} número(os)</p>` 

    let mn = maior(list)
    let men = menor(list)

    final.innerHTML += `<p>O maior valor informado foi ${mn}</p>`
    final.innerHTML += `<p>O menor valor informado foi ${men}</p>`

    let soma = somar(list)

    final.innerHTML += `<p>Somando todos os valores teremos ${soma}</p>`

    final.innerHTML += `<p>E a média aritimética desses valores é ${soma/c}</p>`
}

function maior(vetor)
{
    let maior = vetor[0]
    for (let i in vetor)
    {
        if (vetor[i] > maior)
        {
            maior = vetor[i]
        }
    }
    return maior
}

function menor(vetor)
{
    let menor = vetor[0]
    for (let i in vetor)
    {
        if (vetor[i] < menor)
        {
            menor = vetor[i]
        }
    }
    return menor
}

function somar(vetor)
{
    let somaf = 0
    for (let i in vetor)
    {
        somaf += vetor[i]
    }
    return somaf
}