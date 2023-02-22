// function acao(param) // param é o parametro que será colocado dentro dos parenteses quando a fução for chamada.
// {
//     res = param + 10
//     return res // e utilizando o return é possivel fazer com que a função retorne um valor, seja boolean Number, String ou outro. 
// }

// mos = acao(6) //Por exemplo, aqui 6 é o parametro

// console.log(mos)

function parimapar(n=0) // colocando um dos parametros com o sinal de igual faz com que o parametro seja opcional
{
    if (n % 2 > 0)
    {
        return `O número ${n} é impar!`
    }
    else
    {
        return `O número ${n} é par!`
    }
}
// tambem é possivel colocar uma função dentro de uma variavel, por exemplo: var v = function(a=0){...}

resp = parimapar()

console.log(resp)