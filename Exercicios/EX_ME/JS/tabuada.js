var tabu = document.getElementById('tabuada')
var res = document.getElementById('resultado')

function conta()
{
    if (tabu == NaN)
    {
        alert("Algo deu errado, cheque os valores e tente novemente!")
    } 
    else
    {
        res.innerHTML = ""
    tabuada = Number(tabu.value)

    for (n = 0; n <= 10; n++)
    {
        res.innerHTML += `<p>${tabuada} * ${n} = ${tabuada*n}</p>`
    }
}
}