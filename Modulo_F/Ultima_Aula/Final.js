// Aqui estara alguns exemplo de orientação Objeto

let num = [5, 8, 4] //Isto é um array

let amigo = {nome:"Rafael",
 sexo:"M", 
 idade:17, 
 nacionalidade:"Brasil", 
 aniversario(){
    this.idade += 1
}} //Isto é um objeto, que funciona de um jeito parecido com o dicionario da linguagem Python, mas tambem pode ser utilizado para guaradar uma função


console.log(`${amigo.nome} tem ${amigo.idade} anos de idade`)

amigo.aniversario()

console.log(`Agora ${amigo.nome} tem ${amigo.idade} anos`)
