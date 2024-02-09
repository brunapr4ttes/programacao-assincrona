Promise.resolve(`Olá, ` * 4)
.then((value)=>{
    if(Number.isNaN(value)){
        throw new Error(`Valores inválidos!`)
    }
}).catch((err)=>{
    console.log(`Um erro ocorreu! ${err}`)
})