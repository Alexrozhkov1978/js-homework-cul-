const showExtention = document.querySelector('h4');
const display = document.querySelector('.display');
let str = display.value[0];

document.querySelectorAll('.digits, .act') /*.adds*/
    .forEach(el => el.addEventListener('click', digitActClick));

function digitActClick(e){
    const target = e.target;
    display.value += target.innerText;
} 

document.querySelectorAll('.equal') 
    .forEach(el => el.addEventListener('click', equalActClick));
    
function equalActClick(e){
    checkCrash(display.value);
    showExtention.textContent = display.value;
    display.value = ((parseFloat(eval(display.value)) === parseFloat(eval(display.value))) && Math.abs(eval(display.value)) < Number.MAX_SAFE_INTEGER) ? eval(display.value) : 
    (alert ('This expression has no valid values'), '');
} 

const butclear = document.getElementById('butclear');
    butclear.addEventListener('click', function (cl) {
    display.value = ""
    showExtention.textContent = '...';
});


const butminus = document.getElementById('butminus');
    butminus.addEventListener('click', function (minus) {
    showExtention.textContent = (display.value !== '') ?( ' -1 * (' + (display.value) + ')' ): '...';
    display.value = ((parseFloat(eval(display.value)) === parseFloat(eval(display.value))) && Math.abs(eval(display.value)) < Number.MAX_SAFE_INTEGER) ? -1*eval(display.value) : 
    (alert ('This expression has no valid values'), '');
});

const butdel = document.getElementById('butdel');
    butdel.addEventListener('click', function (deleteLast) {
    str = (display.value.length<=1) ? (''):display.value[0];
    for (let i=1; i<= (display.value.length-2); i++){
    str = str + display.value[i]; 
    }
    showExtention.textContent = str === '' ? '...':str ;
    display.value = str;
});

function checkCrash (ells) {
    1-1;
    
    alert (display.value[parseInt(display.value.length-1)])
    alert ((display.value[display.value.length-1] === '/'||'*'||'-'||'+'));
    let p = display.value[display.value.length-1]
    ells = (display.value[display.value.length-1] === '/'||'*'||'-'||'+') ? alert ('Please do something with last element!') : alert ('Boo!')
    return ells
}

