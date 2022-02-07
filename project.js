
let number = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par de 4 a 14!"));
const section = document.querySelector("section");
let time = document.querySelector(".time");
let back = document.querySelector(".back");
let photo = 'front';
let front_cards = document.querySelectorAll(".front_card");
let list = [];
let play = 0;
let plus = 0;
let right_play = 0;
let wrong_play = 0;
let time_number = 0;
let messege_list=[];
let sentence_list=[];

const images = ['img1','img1','img2','img2','img3','img3','img4','img4','img5','img5','img6','img6','img7','img7'];

if(number !== 0){
    setInterval(countTime, 1000)
    }

function askQuastion(){
   while(number%2 !== 0){
    number = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par de 4 a 14!"))
   }
   while(number < 4){
    number = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par de 4 a 14!"))
   }
   while(number > 14){
    number = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par de 4 a 14!"))
   }
}
askQuastion();

function putCards(){
    for(let i=0; i < number; i++){
       list.push(images[i]);
    }   
    list.sort(comparador);

    for(let x=0; x < number; x++){
        const section = document.querySelector("section");
        section.innerHTML = section.innerHTML + `
            <div class="front_card front_card${x}" onclick="changeCards(${x})">
                <img src="arquivos/${photo}.png">
            </div>
        `
    }
    return list;
}
putCards();

function changeCards(messege){
    let card_selected = document.querySelector(".front_card" + messege);
   
    photo = list[messege];
    card_selected.innerHTML =  `
                <img src="arquivos/${photo}.gif" id=${list[messege]}>
        `
    sentence_list.push(card_selected);
    plus++;
    play++;
    messege_list.push(list[messege]);

    if(plus > 2){
        let photo = 'front';
        for(let i =0; i < sentence_list.length; i++){
            sentence_list[i].innerHTML = `
            <img src="arquivos/${photo}.png" id=${messege_list[i]}>
            `
        }
        sentence_list = [];
        messege_list = [];
        plus = 0;

        alert("Não seja apressado! Escolha uma carta por vez.")
    }

    setTimeout(checkCards, 1500);
}

function checkCards(){
    if(plus == 2){
        if(messege_list[0] !== messege_list[1]){
            let photo = 'front';

            sentence_list[0].innerHTML = `
                <img src="arquivos/${photo}.png" id=${messege_list[0]}>
            `
            sentence_list[1].innerHTML = `
            <img src="arquivos/${photo}.png" id=${messege_list[1]}>
            `
            wrong_play++;
        }else{
            right_play++;
        }
        sentence_list = [];
        messege_list = [];
        plus = 0;
    }
    
    if(number/2 === right_play){
        alert("Você ganhou em " + play + " jogadas. Você errou " + wrong_play + " vez(es). O seu tempo foi: " + time_number + " segundos");
        back.classList.remove("back_display");
    }
}

function countTime(){
        time.innerHTML = time_number;
        time_number++;
}

function backGame(){
    back.classList.add("back_display");
}

function comparador() { 
	return Math.random() - 0.5; 
}



