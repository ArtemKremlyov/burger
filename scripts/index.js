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



const sliderComposition = document.querySelector('.slider-composition');
const sliderCross = document.querySelector('.slider-cross');
const sliderDrop = document.querySelector('.slider-drop'); 

sliderComposition.addEventListener('click', function(){
    sliderDrop.style.left = '100%';
    sliderDrop.style.display = 'block';
})
sliderCross.addEventListener('click', function(){
    sliderDrop.style.display = 'none';
    console.log('CLICK CLICK MOTHERFUCKER');
})



const accordeonTeam = document.querySelectorAll('.accordeon__item');
const accordeonTeamActive = document.querySelectorAll('accordoen__item--active');
 
 for (let j = 0; j < accordeonTeam.length; j++) {
    accordeonTeam[j].addEventListener('click', function() {
        if (this.classList.contains('accordeon__item')) {
            for (let j = 0; j < accordeonTeam.length; j++) {
               accordeonTeam[j].classList.remove('accordeon__item--active');
           }
             this.classList.add('accordeon__item--active');
         }
         if (accordeonTeamActive){
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
  const reviewsBlock = document.createElement('div');
  const reviewsCrossBlock = document.createElement('button');
  const reviewsCross = document.createElement('img');
  let headline = document.querySelector('.reviews__headline');
  let text = document.querySelector('.reviews__text');
  let reviewsText = document.createElement('div');
  let reviewsHeadline = document.createElement('div');
for (n=0;n<reviewsButton.length;n++){
  reviewsButton[n].addEventListener('click', function(){
    reviewsWindow.style.display= 'flex';
    event.preventDefault();
    console.log('click');
    document.body.style.overflow='hidden';

body.appendChild(reviewsWindow);


reviewsCross.src = '../img/cross.png';

reviewsBlock.style.minWidth = '50%';
reviewsBlock.style.maxWidth = '70%';
reviewsBlock.style.background = 'white';

reviewsWindow.style.display = 'flex';
reviewsWindow.style.justifyContent = 'center';
reviewsWindow.style.alignItems = 'center';
reviewsWindow.style.width = '100%';
reviewsWindow.style.height = '100%';
reviewsWindow.style.background = 'rgba(47, 50, 52, 0.89)';
reviewsWindow.style.position = 'fixed';
reviewsWindow.style.top = '0';

reviewsWindow.appendChild(reviewsBlock);
reviewsBlock.appendChild(reviewsCrossBlock);
reviewsBlock.appendChild(reviewsHeadline);
reviewsBlock.appendChild(reviewsText);
reviewsCrossBlock.appendChild(reviewsCross);

reviewsBlock.style.borderRadius = '4px';
reviewsBlock.style.padding = '31px';
reviewsBlock.style.position = 'relative';

reviewsCrossBlock.style.position = 'absolute';
reviewsCrossBlock.style.top = '8%';
reviewsCrossBlock.style.right = '5%';


reviewsText.textContent = text.textContent;
reviewsText.style.fontFamily = 'Ubuntu';
reviewsText.style.fontWeight = '300';
reviewsText.style.fontStyle = 'normal';
reviewsText.style.fontSize = '0.875rem';
reviewsText.style.color = 'black';
reviewsText.style.lineHeight = '1.71';

reviewsHeadline.textContent = headline.textContent;
reviewsHeadline.style.color = 'black';
reviewsHeadline.style.fontFamily = 'Gagalin';
reviewsHeadline.style.marginBottom = '15px';
reviewsHeadline.style.fontWeight = 'normal';
reviewsHeadline.style.fontStyle = 'normal';
reviewsHeadline.style.fontSize = '1.5rem';
  }) }

reviewsCrossBlock.addEventListener('click',function(){
    reviewsWindow.remove(reviewsWindow);
    document.body.style.overflow = 'visible'


})







