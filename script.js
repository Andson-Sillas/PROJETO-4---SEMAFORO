let vermelho = document.querySelector(".vermelho")
let verde = document.querySelector(".verde")
let amarelo = document.querySelector(".amarelo")

let automatico = document.querySelector(".automatico")

let imagem = document.querySelector(".img")

vermelho.addEventListener("click",function(){
    console.log("vermelho")
    imagem.src = "./vermelho.png"
})

amarelo.addEventListener("click",function(){
    console.log("verde")
    imagem.src = "./amarelo.png"
})


verde.addEventListener("click",function(){
    console.log("verde")
    imagem.src ="./verde.png"
})


automatico.addEventListener("click",function(){
    

   let vermelho =  setInterval(() => {
        console.log("vermelho")
        imagem.src = "./vermelho.png"
    },10000);

    let amarelo =  setInterval(() => {
        console.log("amarelo")
        imagem.src = "./amarelo.png"
    },7000);
    let verde =  setInterval(() => {
        console.log("verde")
        imagem.src = "./verde.png"
    },8000);
    
})


