var agora = new Date()
var diaSem = agora.getDay() //Esse pegará o dia da semana e não dia do mês

/*Numeragem dos dias:
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/ 
switch(diaSem)
{
    case 0:
        console.log('Você está em um fim de semana, no Domingo!')
        break
        
    case 1:
        console.log('Você está em um dia util da semana, na Segunda!')
        break
        
    case 2:
        console.log('Você está em um dia util da semana, na Terça!')
        break

    case 3:
        console.log('Você está em um dia util da semana, na Quarta!')
        break
    
    case 4:
        console.log('Você está em um dia util da semana, na Quinta!')
        break

    case 5:
        console.log('Você está em um dia util da semana, na Sexta!')
        break

    case 6:
        console.log('Você está em um fim de semana, no Sábado!')
        break
    
    default:
        console.log("Este é um dia inválido!")
}
