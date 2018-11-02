const showExtention = document.querySelector('h4'); // введений користувачем вираз, "перезаписує" відповідний string html 
const display = document.querySelector('.display');
let str = display.value[0]; // змінна потрібна для фукції butdel, яка видаляє останній введений символ. + неможливість видалення пустого значення.   

document.querySelectorAll('.digits, .act') /*.adds*/
    .forEach(el => el.addEventListener('click', digitActClick));

function digitActClick(e){
    const target = e.target;
    display.value += target.innerText;
} 

document.querySelectorAll('.equal') 
    .forEach(el => el.addEventListener('click', equalActClick));
    
function equalActClick(e){
    showExtention.textContent = display.value;
    // вставлена перевірка чи значення може бути +- Infinity
    display.value = ((parseFloat(eval(display.value)) === parseFloat(eval(display.value))) && Math.abs(eval(display.value)) < Number.MAX_SAFE_INTEGER) ? eval(display.value) : 
    (alert ('This expression has no valid values'), '');
} 

// очистити поле вводу
const butclear = document.getElementById('butclear');
    butclear.addEventListener('click', function (cl) {
    display.value = ""
    showExtention.textContent = '...';
});

// змінити значення на +-
const butminus = document.getElementById('butminus');
    butminus.addEventListener('click', function (minus) {
    showExtention.textContent = (display.value !== '') ?( ' -1 * (' + (display.value) + ')' ): '...';
    display.value = ((parseFloat(eval(display.value)) === parseFloat(eval(display.value))) && Math.abs(eval(display.value)) < Number.MAX_SAFE_INTEGER) ? -1*eval(display.value) : 
    (alert ('This expression has no valid values'), '');
});

// видалити останній символ
const butdel = document.getElementById('butdel');
    butdel.addEventListener('click', function (deleteLast) {
    str = (display.value.length<=1) ? (''):display.value[0];
    for (let i=1; i<= (display.value.length-2); i++){
    str = str + display.value[i]; 
    }
    showExtention.textContent = str === '' ? '...':str ;
    display.value = str;
});

const butmemorylist = document.getElementById('butmemorylist');
    butmemorylist.addEventListener('click', function (mem) {
    document.querySelector('h5').textContent = showExtention.textContent + ' = ' + display.value;
});