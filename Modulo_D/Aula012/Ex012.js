var agora = new  Date() //Utilizado para pegar a data atual do servidor, ou do própio cliente.

var hr = agora.getHours() //Neste caso utilizado para pegar as horas.
if (hr >= 6 && hr < 13)
{
    console.log(`São ${hr} horas, então Bom dia pra você!`)
}
else if (hr >= 13 && hr < 17)
{
    console.log(`São ${hr} horas, então Boa Tarde pra você!`)
}
else if (hr >= 17 && hr <= 24)
{
    console.log(`São ${hr} horas, então Boa Noite pra você!`)
}
else if (hr > 24)
{
    console.log(`São ${hr} horas, Este não é um horario possivel!`)
}
else
{
    console.log(`São ${hr} horas, Já madrugado vai dormir!`)
}


