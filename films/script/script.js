// // Картинка з текстом
// let imgTwo = document.querySelector('.image_text');
// let textImg = document.querySelector('.text')

// imgTwo.onmouseenter = function () {
//     textImg.style.zIndex = 2
//     textImg.style.opacity = 1
// }
// textImg.onmouseleave = () => {
//     textImg.style.zIndex = -1
//     textImg.style.opacity = 0
// }
window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
}

// КАРУСЕЛЬ 
let image = document.querySelectorAll('.slidor-i'),
    sliderr = document.querySelector('.slidor'),
    sliderLines = document.querySelector('.slidor-l'),
    button1 = document.querySelector('.b-1'),
    button2 = document.querySelector('.b-2'),
    countt = 0,
    widthSlider;


function initt() {
    widthSlider = sliderr.clientWidth;
    console.log("WIDTHSLIDER", image)
    for (let i = 0; i < image.length; i++) {
        image[i].style.width = widthSlider + "px";
    }
    sliderLines.style.width = widthSlider * image.length + "px";
    move()
}
window.addEventListener('resize', initt);
initt();




function move() {
    sliderLines.style.transform = 'translate(-' + countt * widthSlider + "px";
}
function moveForverd() {
    countt++;
    if (countt > image.length - 1) {
        countt = 0;
    }
    move();
}
function moveBack1() {
    countt--;
    if (countt < 0) {
        countt = image.length - 1;

    }
    move()
}
button1.onclick = moveBack1;
button2.onclick = moveForverd;

setInterval(moveForverd, 10000)

// Слайдер
let images = document.querySelectorAll('.slider-item'),
    sliderLine = document.querySelector('.slider-line'),
    slider = document.querySelector('.slider'),
    nextBtn = document.querySelector('.slider-next'),
    prevBtn = document.querySelector('.slider-prev');

let count = 0,
    width;
// розрахунок ширини робочої області
function init() {
    width = slider.clientWidth;//Зчитуємо тих 70% (ширина слайдера)
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = width + 'px'; //присвоюємо кожній фотографії ширину слайдера
    }
    sliderLine.style.width = width * images.length + 'px';//ширина смужки фотографій
    moves();
}
window.addEventListener('resize', init)//викликаємо перерахунок на кожну зміну вікна
init();

function moves() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';//зміщення смужки руху
}
function moveForvard() {
    count++;//додає порядок слайду
    if (count >= images.length) {
        count = 0;
    }
    moves();
    clearTimeout(timer);

}
function moveBack() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    moves();
    clearTimeout(timer);
}

nextBtn.addEventListener('click', moveForvard);
prevBtn.addEventListener('click', moveBack);

let timer = setInterval(moveForvard, 10000);//запускає moveForvard що 10 секунд








