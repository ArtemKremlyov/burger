console.log ('-------------------------');
console.log ('Типы данных и переменные');
var name = 'Artem';
console.log('My name is '+ name);
name = 'Max'
console.log('Friend name is '+ name);
console.log ('-------------------------');



console.log ('Условный оператор IF');
if (name='Max'){
  console.log('Information true');
}
    else {
        console.log('Information false');
}
console.log ('-------------------------');


console.log ('Счетчик for');
for (var i=0;i<10;i++){
    console.log(i);
}
console.log ('-------------------------');


console.log ('Функции');
function test(p1,p2,p3){
    var result = p1+p2+p3;
    return result;
}
var result1 = test(10,20,30);
console.log(result1);

var result2 = test(12,24,36);
console.log(result2);

console.log ('-------------------------');


console.log ('Массивы и объекты-1');
  var array = ['привет',' loftschool'];
  array.push ('я изучаю');
  array.push ('javascript');

  console.log(array.length);

  for (var j=0;j<array.length;j++){
      console.log(array[j]);
  }

  console.log ('-------------------------');


  console.log ('Массивы и объекты-2');
   var array2 = [11,231,123,54,23,76,97,567,913,2];
   for (var k=0;k<array2.length;k++){
        if (array2[k]>100){
           console.log(array2[k]);
        }
   }

   console.log ('-------------------------');


   console.log ('Массивы и объекты-3');
  var obj = {name:'Artem',lastName:'Kremlyov',age:'18'};

  console.log(obj.name);
  console.log(obj.lastName);
  console.log(obj.age);

  obj.hobby = 'Developing';
  console.log(obj.hobby);
  console.log ('-------------------------');


  console.log ('Массивы и объекты-4');
  function hello (human){
      text = console.log('Привет,меня зовут '+ obj.name + obj.lastName + 'и мне ' + obj.age);
      return text;
  }
  var text = hello (obj);
  console.log(text);