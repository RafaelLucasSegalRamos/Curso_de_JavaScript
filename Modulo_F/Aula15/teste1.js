//Array/Vetor é a variavel composta que possui todos os valores.

// Elemento é o que envolve o 'conteudo' e o 'indice'

// indice é o "id" que diferencia os valores dentro de um array sempre começando pelo 0

// conteudo é o valor da variavel por exemplo a1 = 2, 2 é o valor da variavel a1

var impar = [1, 9, 7, 3, 5]

// impar[5] = 11
//Assim é possivel aumentar a quantidade de valores dentro de um array
//ou podemos fazer assim:
impar.sort()

impar.push(13)
// impar.pop() Com este é possivel retirar o ultimo elemento do array

// impar[0] = -1
// E assim é possivel mudam certos valores que foram adicionados anteriormente

console.log(`Estes são os primeiros cinco números impares naturais ${impar}`)
console.log(`Este array tem ${impar.length} elementos`)

for (pos = 0; pos<impar.length; pos++)
{
    console.log(`O número ${impar[pos]} está na posição ${pos}`)
}

// A expressão acima e a de baixo geram os mesmos resultados, mas a de baixo é considerada mais simples.

for (pos in impar)
{
    console.log(`A bomba ${impar[pos]} explodirá em ${pos} segundos!!`)
}

//Tambem é possivel procurar uma posição de acordo com um valor por exemplo:

console.log(`O número ${impar[3]} está na posição ${impar.indexOf(7)}`)

//Caso o valor pesquisado não esteja no vetor, então a expressão indexOf(x) receberá -1