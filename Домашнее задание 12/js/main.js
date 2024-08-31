// Задание первое

let width = 100;
let height = 100;
document.querySelector('.one').onclick = function() {
    this.style.width = width + 'px'
    width = width + 15
    this.style.height = height + 'px'
    height = height + 15
}

// Задание второе

let a = document.querySelector('.two');

document.querySelector('.two').ondblclick = function() {
    console.log(a.innerHTML);
}

// Задание третье

let b = document.querySelector('.three');

document.querySelector('.three').onclick = function() {
    b.innerHTML = 2;
}

// Задание четвертое

document.querySelector('.inp-1').onkeypress = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
}

// Задание пятое

let num = prompt('Задание пятое. Введите цифру!');
switch(Number(num)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log(false);
}