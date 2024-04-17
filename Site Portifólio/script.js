
//ScrollOne

window.addEventListener('DOMContentLoaded', (event) => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal('#home', { duration: 2000 });

    sr.reveal('.containerBox', {
        rotate: { x: 0, y: 80, z: 0 },
        duration: 3000,
        reset: false
    });

    sr.reveal('.containerBoxIcons', {
        rotate: { x: 100, y: 110, z: 0 },
        duration: 1000,
        reset: false
    });

    sr.reveal('.meusCursos', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 100,
        reset: false
    });
});



//Background

const chk = document.getElementById("chk");

const containerHeaderID = document.getElementById("containerHeaderID");

const boxRGB = document.querySelector('.boxRGB');
const spnDownloadCV = document.querySelector('.spnDownloadCV');
const name3 = document.querySelector('.name3');
const lbl = document.querySelector('.lbl');
const ball = document.querySelector('.ball');
const name1 = document.querySelector('.name1');


chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
    containerHeaderID.classList.toggle('light');

    
    name1.classList.toggle('light');
    name3.classList.toggle('light');
    boxRGB.classList.toggle('light');
    spnDownloadCV.classList.toggle('light');
    lbl.classList.toggle('light');
    ball.classList.toggle('light');
});



