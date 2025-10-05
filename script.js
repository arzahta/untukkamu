const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Semangat yaa!";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRectm = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRectm.width;
    const maxY = window.innerHeight - noBtnRectm.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";   
});