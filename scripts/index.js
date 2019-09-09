document.addEventListener("DOMContentLoaded", function(event) { 
let aside = document.querySelector('.aside-menu');
let a = document.querySelectorAll('.aside-menu__link');
for (let i = 0; i < a.length; i++) { a[i].addEventListener('click', function() { aside.style.right = '-100%';body.style.overflow = 'visible'; }); }

let button = document.querySelector('.fullscr-btn');
button.addEventListener ('click', function(){
    aside.style.right = '0';
    document.body.style.overflow= 'hidden';
});
let cross = document.querySelector('.cross');
cross.addEventListener('click', function(){
    aside.style.right = '10000px';
    document.body.style.overflow = 'visible';
});


const buttonRight = document.querySelector('.arrow-scroll--right');
const buttonLeft = document.querySelector('.arrow-scroll--left');
const sliderList = document.querySelector('.slider-list');



buttonRight.addEventListener('click',function(e){
    e.preventDefault();
    console.log('Right');
    loop('buttonRight');
})
buttonLeft.addEventListener('click',function(e){
    e.preventDefault();
    console.log('Left');
    loop('buttonLeft');
})


function loop (directionButton){
    if (directionButton === 'buttonRight'){
       sliderList.appendChild(sliderList.firstElementChild);
    }
    else{
        sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
    }
}



const sliderComposition = document.querySelectorAll('.slider-composition');
const sliderCross = document.querySelector('.slider-cross');
const sliderDrop = document.querySelector('.slider-drop'); 

for (l=0;l<sliderComposition.length;l++){
sliderComposition[l].addEventListener('click', function(){
    this.querySelector('.slider-drop').style.left = '100%';
    console.log('CLick on Composition');
})
}
for (let l = 0;l<sliderDrop.length;l++){
sliderCross[l].addEventListener('click', function(){
    sliderDrop.style.display = 'none';
    this.querySelector('.slider-cross').style.left = '-10000px';
    console.log('CLICK CLICK');
})
}



const accordeonTeam = document.querySelectorAll('.accordeon__item');
const accordeonTeamActive = document.querySelectorAll('accordoen__item--active');
 
 for (let j = 0; j < accordeonTeam.length; j++) {
   let isClick = accordeonTeam[j].addEventListener('click', function() {
        if (this.classList.contains('accordeon__item')) {
            for (let j = 0; j < accordeonTeam.length; j++) {
               accordeonTeam[j].classList.remove('accordeon__item--active');
           }
             this.classList.add('accordeon__item--active');
         }
         if (isClick && this.classList.contains('accordeon__item--active')){
            this.classList.remove('accordoen__item--active');
        }
     });
 }


    // Функция ymaps.ready() будет вызвана, когда
   // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
   ymaps.ready(init);
   function init(){ 
       // Создание карты.    
       var myMap = new ymaps.Map("map", {
           // Координаты центра карты.
           // Порядок по умолчанию: «широта, долгота».
           // Чтобы не определять координаты центра карты вручную,
           // воспользуйтесь инструментом Определение координат.
           center: [55.0415, 82.9346],
           // Уровень масштабирования. Допустимые значения:
           // от 0 (весь мир) до 19.
           zoom: 12
       });
       myMap.behaviors.disable('scrollZoom'); }
});


 const accordeonMenu = document.querySelectorAll('.accordeon-menu__item');

  for (let k = 0;k<accordeonMenu.length;k++){
      accordeonMenu[k].addEventListener('click',function(){
          if (this.classList.contains('accordeon-menu__item')){
            for (let k = 0;k<accordeonMenu.length;k++){
              accordeonMenu[k].classList.remove('accordeon-menu__item--active');
            }
            this.classList.add('accordeon-menu__item--active');
          }  
      });
  }


  const body = document.body;
  const reviewsButton = document.querySelectorAll('.reviews__btn');
  const reviewsWindow = document.createElement('div');
  let headline = document.querySelector('.reviews__headline');
  let text = document.querySelector('.reviews__text');


for (n=0;n<reviewsButton.length;n++){
  reviewsButton[n].addEventListener('click', function(){
    createModal();
    reviewsWindow.style.display= 'flex';
    event.preventDefault();
    console.log('click');
    document.body.style.overflow='hidden';
    
  }) }


function createModal(){
    reviewsWindow.classList.add('modal');
    const modal = document.querySelector('#modal')
    reviewsWindow.innerHTML = modal.innerHTML;
    body.appendChild(reviewsWindow);
    let modalText = document.querySelector('.review-content__text');
    let modalHeadline = document.querySelector('.review-content__headline');
    modalText.textContent = text.textContent;
    modalHeadline.textContent=headline.textContent;
    const reviewsCrossBlock = document.querySelector('.review-circle');
    reviewsCrossBlock.addEventListener('click',function(){
        reviewsWindow.remove(reviewsWindow);
        document.body.style.overflow = 'visible'
    })
    
}

const myForm = document.querySelector('.form');
const sendBtn = document.querySelector('.form__btn');


let sendform = (e) => {
    e.preventDefault();
    if(chechVal(myForm)) {
        console.log('Валидация прошла успешно')
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: 'gfvhhhggffghh@gmail.com'
        }
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            if (xhr.response.status){
                console.log(xhr.response);
                console.log('Отправка данных успешна');
            }
           else{
               console.log('Неудачная отправка данных')
           }
        })
    }
    else{
        console.log('Ошибка валидации');
    }
    
}

const chechVal = (form) => {
    let valid = true;

    if(!chechValFild(form.elements.name)) {
        valid = false;
    }

    if(!chechValFild(form.elements.phone)) {
        valid = false;
    }

    if(!chechValFild(form.elements.comment)) {
        valid = false;
    }

    return valid;
}

const chechValFild = (field) => {
    return field.checkValidity();
}



sendBtn.addEventListener('click', sendform);





function createOverlay (){

    overlay.classList.add ('overlay-active');
    
    const overlayTemplate = document.querySelector('#overlayTemplate');
    overlay.innerHTML = overlayTemplate.innerHTML;
    const overlay = document.createElement('div');
    body.appendChild(overlay);
    return;
    };