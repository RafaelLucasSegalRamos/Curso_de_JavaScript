var tabu = document.getElementById('tabuada')
var res = document.getElementById('resultado')

function conta()
{

    if (tabu.value.length == 0)
    {
        alert("Algo deu errado, cheque os valores e tente novemente!")
    } 
    else
    {
        res.innerHTML = ""
    tabuada = Number(tabu.value)

    for (n = 0; n <= 10; n++)
    {
        
        let item = document.createElement('option')
        //Create element serve para criar uma nova tag HTML a partir do JavaScript
        item.text = `${tabuada} * ${n} = ${tabuada*n}`
        res.appendChild(item)
        
    }
}
} 