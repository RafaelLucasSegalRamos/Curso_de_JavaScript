// function fact(n = 0)
// {
//     let res = 1
//     for (c = n; c > 1; c--)
//     {
//         res *= c
//     }
//     return res
// }

//Tambem podemos chamar uma função dentro de si mesma por exemplo:

function facto(n = 1)
{7
    if (n == 1)
    {
        return 1
    }
    else
    {
        return n * facto(n-1)
    }
}

resp = facto(6)

console.log(resp)