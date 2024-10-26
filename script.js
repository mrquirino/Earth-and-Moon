// Se quiser adicionar um efeito de rotação, pode usar o JavaScript
const quasar = document.querySelector('.quasar');
setInterval(() => {
    quasar.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
}, 100);
