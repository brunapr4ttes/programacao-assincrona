// const promessa = Promise.resolve(5 + 5)
// console.log(`Lógica que foi desenvolvida`)

// promessa.then(function(value){
//     console.log(`A soma = ${value}`)
//     return value
// }).then(function(value){
//     console.log(`A soma + 2 = ${value + 2}`)
//     return value
// }).then(function(value){
//     console.log(`A subtração - 1 = ${value - 1}`)
//     return value
// }).then(function(value){
//     console.log(`Multiplicação * 2 = ${value * 2}`)
// })

// console.log(`Código extra`)

                // THEN E CATCH!!

// function checkNumber(n){
//     return new Promise((resolve, reject)=>{
//         if(n > 20){
//         resolve(`O número é maior que 20`)
//     }else{
//         reject(new Error(`Número inválido`))
//         }
//     })
// }
// const num1 = checkNumber(25)
// const num2 = checkNumber(10)

// num1.then((value)=>{
//     console.log(`O resultado é: ${value}`)
// }).catch((err)=>{
//     console.log(`Error: ${err}`)
// })

// num2.then((value)=>{
//     console.log(`O resultado é: ${value}`)
// }).catch((err)=>{
//     console.log(`Error: ${err}`)
// })
// console.log(`Teste Async`)

        // async await

// async function calculaComDelay(x, y){
//     return x * y
// }
// calculaComDelay(3,3).then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(`${err}`)
// })

function respostaComDelay(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`Resolveu a promessa`)
    }, 8000)
 })
}

async function chamadaDelay(){
    console.log(`Chamando a promisse e esperando o resultado`)
    const resultado = await respostaComDelay()
    console.log(`O resultado chegou: ${resultado}`)
}

chamadaDelay()