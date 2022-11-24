let carte = document.querySelector('#carte');
let titreCarte = document.querySelector('#titreCarte');
let inputTitre = document.querySelector('#title');
let texteCarte = document.querySelector('.texteCarte');
let inputParagraphe = document.querySelector('#paragraphe');
let illustration = document.querySelector('.image');


inputTitre.addEventListener('keyup', ()=> {
    titreCarte.textContent = inputTitre.value;
})

inputParagraphe.addEventListener('keyup', ()=> {
    texteCarte.textContent = inputParagraphe.value;
})


let christmas = document.querySelector('#christmas');
let trebuchet = document.querySelector('#trebuchet');
let roboto = document.querySelector('#roboto');

// trebuchet.addEventListener('change',()=> {
//     titreCarte.classList.add('trebuchet');
//     texteCarte.classList.add('trebuchet');
// })
// christmas.addEventListener('change', ()=> {
//     titreCarte.classList.add('christmas');
//     texteCarte.classList.add('christmas');
// })
// roboto.addEventListener('change', ()=> {
//     titreCarte.classList.add('roboto');
//     texteCarte.classList.add('roboto');
// })
let police = document.querySelectorAll('[name="police"]');

police.forEach(element => {
    element.addEventListener('change',()=> {
        texteCarte.className ='texteCarte col-lg-8 mx-auto';
        titreCarte.className ='py-5'
        titreCarte.classList.add(element.value);
        texteCarte.classList.add(element.value);
    })
});

let fond = document.querySelectorAll('[name="fond"]');

fond.forEach(element1 => {
    element1.addEventListener('change', ()=>{
    carte.className = 'card1  text-center'
    carte.classList.add(element1.value);
    })
})

let image = document.querySelectorAll('[name="image"]');

image.forEach(element3 => {
    element3.addEventListener('change', ()=> {
        if (element3.value == 'sapin') {
            illustration.innerHTML = '<img src="assets/img/sapin.png" alt="">';
        } else if (element3.value == 'cadeau'){
            illustration.innerHTML = '<img src="assets/img/cadeau.png" alt="">'
        } else if (element3.value == 'pereNoel'){
            illustration.innerHTML = '<img src="assets/img/pereNoelTraineau.png" alt="">'
        }
    } )
})






let colorWell;
const defaultColor = "#ff0000";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.select();
}

function updateFirst(event) {
    const card = document.querySelector(".texteCarte");
    if (card) {
        card.style.color = event.target.value;
        titreCarte.style.color =event.target.value;
    }
}

document.querySelector('i').addEventListener('click', () => {
    print();
});