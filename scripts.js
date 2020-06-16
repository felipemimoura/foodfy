
/* Busca no HTML um seletor com base na classe CSS */
const modalOverlay = document.querySelector('.modal-overlay');
/* Pega uma série de cartões com base na classe */
const cards = document.querySelectorAll('.card');


for (let card of cards){
    /* Toda vez que um dos cards forem clicados será adicionado uma classe no modal-overlay */
    card.addEventListener("click", function(){
        const image = card.getAttribute("id")
        const chefe = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay = document.querySelector('.modal-content img').src = `/assets/${image}`;
        modalOverlay = document.querySelector('.content_card h4').appendChild = chefe
       
    })
}

/* Toda vez que se clicar no Fechar modal ele vai remover a classe active no modalOverlay */
document.querySelector('.close-modal').addEventListener("click", function (){
    modalOverlay.classList.remove("active")
})

