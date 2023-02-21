        
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
   
       
       if (final < comeco && passo > 0)
       {
           /*for (comeco = Number.parseInt(cmc.value); comeco > final; comeco - passo)
           {
               res.innerText += `${comeco} => `
           }*/
           while(comeco > final)
           {
               res.innerText += `${comeco} => `
               comeco -= passo
           }
           res.innerText += "Chegou!!"
       }
       else if (final < comeco && passo < 0)
       {
           /*for (comeco = Number.parseInt(cmc.value); comeco > final; comeco + passo)
           {
               res.innerText += `${comeco} => `
           }*/
           while(comeco > final)
           {
               res.innerText += `${comeco} => `
               comeco += passo
           }
           res.innerText += "Chegou!!"
           
       }
       else if (final > comeco && passo > 0)
       {
           /*for (comeco = Number.parseInt(cmc.value); comeco < final; comeco + passo)
           {
               res.innerText += `${comeco} => `
           }*/
           while(comeco < final)
           {
               res.innerText += `${comeco} => `
               comeco += passo
           }
           res.innerText += "Chegou!!"
   
           
       }
       else if (final > comeco && passo < 0)
       {
           /*for (comeco = Number.parseInt(cmc.value); comeco < final; comeco - passo)
           {
               res.innerText += `${comeco} => `
           }*/
           while(comeco < final)
           {
               res.innerText += `${comeco} => `
               comeco -= passo
           }
           res.innerText += "Chegou!!"
           
       }
       else
       {
           alert(`Algo deu errado!!`)
       }
       
   }
   