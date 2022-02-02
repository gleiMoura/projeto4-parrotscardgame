
let number = parseInt(prompt("Com quantas cartas você quer jogar?"))
const section = document.querySelector("section");
let photo = 'front';

let list = [];
const cards = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4', 'card5','card5','card6','card6','card7','card7'];

function putCards(){
    for(let i=0; i < number; i++){
       list.push(cards[i]);
    }   
    for(let x=0; x < number; x++){
        const section = document.querySelector("section");
        section.innerHTML = section.innerHTML + `<div class="front_card"><img src="arquivos/${photo}.png"></div>`
    }
}
console.log(list)
putCards();