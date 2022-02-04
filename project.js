
let number = parseInt(prompt("Com quantas cartas você quer jogar?"))
const section = document.querySelector("section");
let photo = 'front';
let front_cards = document.querySelectorAll(".front_card");
let list = [];
let plus = 0;

let messege_list=[];
let sentence_list=[];

const images = ['img1','img1','img2','img2','img3','img3','img4','img4','img5','img5','img6','img6','img7','img7'];

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
    plus = plus + 1;
    messege_list.push(list[messege]);

    console.log(plus)
    console.log(sentence_list)

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

        alert("Escolha duas cartas por vez!!!!")
    }

    setTimeout(checkCards, 2000);
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
        }
        sentence_list = [];
        messege_list = [];
        plus = 0;
    }
}





function comparador() { 
	return Math.random() - 0.5; 
}
