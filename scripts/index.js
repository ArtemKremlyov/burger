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


 
 const movingSliderLeft = () => {
    $('.arrow-scroll--left').on('click',(e) =>{
        e.preventDefault();
        sliderList.css ({
            transform : `translateX(100%)`
        })
    })
}


$('#slider-list').slick({
    prevArrow:$('.arrow-scroll--left'),
    nextArrow:$('.arrow-scroll--right')
});


// buttonRight.addEventListener('click',function(e){
//    e.preventDefault();
//   console.log('Right');
//    loop('buttonRight');
//})
//buttonLeft.addEventListener('click',function(e){
//    e.preventDefault();
//    console.log('Left');
//    loop('buttonLeft');
//})


//function loop (directionButton){
//    if (directionButton === 'buttonRight'){
 //      sliderList.appendChild(sliderList.firstElementChild);
 //   }
 //   else{
 //       sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
 //   }
//}



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


  const sections = $(".section");
  const display = $(".sections");
  const navigation = $('aside__elem')
  let inscroll = false;

  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile();

  const switchActiveClass = (elems,elemEq) => {
    elems.eq(elemEq).addClass('active').siblings().removeClass('active');
  }

  const countPosition = sectionEq => {
      return `${sectionEq * -100}%`;
  }

  const unBlockScroll = () =>{
    setTimeout(()=>{
        inscroll = false;
      },1000 + 300);
  }

  const countPositionPercent = sectionEq => {
      if (inscroll) return;
          inscroll = true;
    const position = countPosition(sectionEq);
    const switchAsideMenuActiveClass = () => switchActiveClass($('.aside__item'),sectionEq);


   switchActiveClass(sections,sectionEq);
   switchAsideMenuActiveClass()

    display.css({
        transform: `translateY(${position})`
    })
    unBlockScroll();
  };


  const scrollViewport = direction =>{
      const currentSection = sections.filter('.active');
      const nextSection = currentSection.next();
      const prevSection = currentSection.prev();

      if (direction === 'next' && nextSection.length){
          countPositionPercent(nextSection.index())
      }
      if (direction === 'prev' && prevSection.length){
          countPositionPercent(prevSection.index())
      }
  }

  $(document).on('wheel' , e => {
      const deltaY = e.originalEvent.deltaY;

      if (deltaY>0){
          console.log('Next section');
          scrollViewport('next');
      }
      else{
          console.log('Previous section');
          scrollViewport('prev');
      }
  })

  $(document).on('keydown', e => {
      const tagName = e.target.tagName.toLowerCase();
      const userTyping = tagName === "input" || tagName === "textarea";
     if (userTyping) return;
      console.log(e.keyCode);
       switch(e.keyCode){
          case 38: //Prev Section
          scrollViewport('prev');
          break;
          case 40: //Next Section
          scrollViewport('next');
          break;
      }
  })


   
  $('[data-scroll-to]').on('click',e =>{
      e.preventDefault();
      const current = parseInt($(e.currentTarget).attr('data-scroll-to'));

      countPositionPercent(current);
  })

 if (isMobile){
  $('.wrapper').on('touchmove',e => e.preventDefault())

    $(window).swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction) {
       let scrollDirection;

       if(direction === 'up') scrollDirection ='next';
       if(direction === 'down') scrollDirection = 'prev'
         
       scrollViewport(scrollDirection);  
      }
    });
 }
  
  


  const body = document.body;
  const reviewsButton = document.querySelectorAll('.reviews__btn');
  const reviewsWindow = document.createElement('div');

  const headline = document.querySelector('.reviews__headline');
  const text = document.querySelector('.reviews__text');
  

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
const dataContent = document.querySelector('.data-content');


let sendform = (e) => {
    e.preventDefault();
    if(chechVal(myForm)) {
        let data = new FormData(myForm);
        data.append('name', myForm.elements.name.value);
        data.append('phone', myForm.elements.phone.value);
        data.append("comment", myForm.elements.comment.value);
        data.append("to", "gfvhhhggffghh@gmail.com");
        console.log('Валидация прошла успешно')


        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(data);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.response.status){
                console.log('Отправка данных успешна');
                createOverlay();
                dataContent = document.querySelector('.data-content');
                dataContent.textContent = 'Отправка данных успешна!';

            }
           else{
               console.log('Неудачная отправка данных')
               createOverlay();
               dataContent = document.querySelector('.data-content');
               dataContent.textContent = 'Ошибка сервера!'
           }
        })
    }
    else{
        console.log('Ошибка валидации');
        createOverlay();
               dataContent = document.querySelector('.data-content');
               dataContent.textContent = 'Все/одно из полей заполнено не правильно!';
    }
    
}


function createOverlay (error){
    let overlay = document.createElement('div');
    overlay.classList.add('overlay-active');
    const overlayTemplate = document.querySelector('#overlayTemplate');
    overlay.innerHTML = overlayTemplate.innerHTML;
    body.appendChild(overlay);
    let overlayCross = document.querySelector('.data-button');
    body.style.overflow = 'hidden';
     
    overlayCross.addEventListener('click',function(e){
        e.preventDefault();
        overlay.remove(overlay);
        body.style.overflow = 'visible';
    })
     return;
    };



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

ymaps.ready(function () {

var myMap = new ymaps.Map('map', {
    center: [55.0505208, 82.9152501],
    zoom: 12
}, {
    searchControlProvider: 'yandex#search'
}),


// Создаём макет содержимого.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/svg/map-marker.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
}),

myPlacemarkWithContent = new ymaps.Placemark([55.0280496, 82.8939897], {
    hintContent: 'Собственный значок метки с контентом',
    balloonContent: 'А эта — новогодняя',
    iconContent: '12'
}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: 'img/svg/map-marker.svg',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout
});
myMap.behaviors.disable('scrollZoom');
myMap.geoObjects
.add(myPlacemark)
.add(myPlacemarkWithContent);
}); }
)