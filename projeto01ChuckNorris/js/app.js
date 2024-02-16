document.addEventListener('DOMContentLoaded', ()=>{
    const url = "https://api.chucknorris.io/jokes/categories"
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber dados')
        }
        return response.json()
    })
    .then((data)=>{
        gerarCategorias(data)
    })
    .catch((err)=>console.error(err))
});

function gerarCategorias(categorias){
    // parâmetro categorias = array de categorias
    // console.log(categorias)
    const select = document.getElementById('select')
    categorias.map((categoria)=>{
    const options = document.createElement('option')
    options.innerHTML = `${categoria}`
    options.value = categoria
    select.appendChild(options);
    })
}

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const select = document.getElementById("select").value;
    // console.log(select)
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
   
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao selecionar um tema')
        }
        return response.json()
    })
    .then((data)=>{
        gerarPiada(data)
    })
    .catch((err)=> console.log(err))
});

function gerarPiada(piada){
    // console.log(piada)
    const joke = document.getElementById('joke')
    joke.innerHTML = piada.value
}