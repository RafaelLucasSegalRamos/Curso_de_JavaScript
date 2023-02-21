        
   function contar()
   {
       var cmc = document.getElementById('cmc')
       var fim = document.getElementById('fim')
       var pss = document.getElementById('pss')
   
       var res = document.getElementById('resultado')
       res.innerHTML = "A contagem ficou assim: "
   
       var comeco = Number.parseFloat(cmc.value)
       var final = Number.parseFloat(fim.value)
       var passo = Number.parseFloat(pss.value)
   
       
       if (cmc.value.length == 0 || fim.value.length == 0 || pss.value.length == 0){
        alert(`Algo deu errado!!`)
       }
       else{
        if (final < comeco && passo > 0)
       {
           // Contagem regressiva com passo positivo
           while(comeco >= final)
           {
               res.innerText += `${comeco} \u{1F449} `
               comeco -= passo
           }
           res.innerText += "Chegou!! \u{1F6A9}"
       }
       else if (final < comeco && passo < 0)
       {
           //Contagem regressiva com passo negativo
           while(comeco >= final)
           {
               res.innerText += `${comeco} \u{1F449} `
               comeco += passo
           }
           res.innerText += "Chegou!! \u{1F6A9}"
           
       }
       else if (final > comeco && passo > 0)
       {
           // contagem crescente com passo positivo
           while(comeco <= final)
           {
               res.innerText += `${comeco} \u{1F449} `
               comeco += passo
           }
           res.innerText += "Chegou!! \u{1F6A9}"
           /* Utilizando o \u{} é pussivel substituir o U+, mas esta versão funciona apaenas em javascript*/
   
           
       }
       else if (final > comeco && passo < 0)
       {
           //Contagem crescente com passo negativo
           while(comeco <= final)
           {
               res.innerText += `${comeco} \u{1F449} `
               comeco -= passo
           }
           res.innerText += "Chegou!! \u{1F6A9}"
           
       }
    
       else
       {
           alert(`Algo deu errado!!`)
       }
       }
       
       
   }
   