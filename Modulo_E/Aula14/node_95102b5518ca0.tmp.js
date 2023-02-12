// Entre as estruturas de repetições tambem existe o For
/*
    E sua diferença para o While ou Do...While é que o for precisa de uma variavel de inicio, um teste logico e um incremento.

    for (inicio; teste; incr){
          
    }
*/

var c = 10

while (c >= 0)
{
    console.log(`Contagem regressiva: ${c}`)
    c--
}

var d = 10

for (d; d>=0; -1)
{
    console.log(`${d} segundos até a bomba explodir`)
}