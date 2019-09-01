let button = document.querySelector('.fullscr-btn');
let aside = document.querySelector('.aside-menu');
let cross = document.querySelector('.cross')
let sliderCross = document.querySelector('.slider-cross');
let sliderDrop = document.querySelector('.slider-drop');
let sliderComposition = document.querySelector('.slider-composition');

button.addEventListener ('click', function(){
    aside.style.right = '0'
});
cross.addEventListener('click', function(){
    aside.style.right = '10000px';
})
//sliderComposition.addEventListener('click', function(){
//    sliderDrop.style.left = '100%';
// })
//sliderCross.addEventListener('click', function(){
 //   sliderDrop.style.left = '-1000px';
//})


let a = document.querySelectorAll('.aside-menu__link');
for (let i = 0; i < a.length; i++) { a[i].addEventListener('click', function() { aside.style.right = '-100%' }) }

document.addEventListener ('DOMContentLoaded',function(){
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
})