const cards = [
    {
        english: "abandon",
        turkish: "terk etmek"
    },
    {
        english: "cover",
        turkish: "kapatmak"
    },
    {
        english: "cooperation",
        turkish: "iş birliği"
    },
    {
        english: "ignore",
        turkish: "görmezden gelmek"
    },
    {
        english: "local",
        turkish: "yerel"
    },
    {
        english: "occupation",
        turkish: "meslek"
    },
    {
        english: "properly",
        turkish: "düzgün bir şekilde"
    },
    {
        english: "security",
        turkish: "güvenlik"
    },
    {
        english: "software",
        turkish: "yazılım"
    },
    {
        english: "worry",
        turkish: "endişelenmek"
    },
    {
        english: "admire",
        turkish: "beğenmek"
    },
    {
        english: "essential",
        turkish: "gerekli"
    },
    {
        english: "garden",
        turkish: "bahçe"
    },
    {
        english: "landscape",
        turkish: "manzara"
    },
    {
        english: "opportunity",
        turkish: "fırsat"
    },
    {
        english: "react",
        turkish: "tepki"
    },
    {
        english: "visible",
        turkish: "görünür"
    },
    {
        english: "zone",
        turkish: "alan"
    },
    {
        english: "wonderful",
        turkish: "müthiş"
    },
    {
        english: "totally",
        turkish: "tamamen"
    }
];

const card = document.querySelector(".card");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const front = document.querySelector(".front");
const back = document.querySelector(".back");


let count = 0;
front.innerHTML = cards[count].english;

rightBtn.addEventListener("click", () => {
    card.classList.remove("active");
    count++;
    if(count > cards.length - 1){
        count = 0;
    }
    front.innerHTML = cards[count].english;
    console.log(count);
});

leftBtn.addEventListener("click", () => {
    card.classList.remove("active");
    count--;
    if(count < 0){
        count = cards.length - 1;
    }
    front.innerHTML = cards[count].english;
    console.log(count);
});

card.addEventListener("click", () => {
    card.classList.toggle("active");
    back.innerHTML = cards[count].turkish;
    
    setTimeout(timer, 600);
})

function timer(){
    card.classList.toggle("active");
}
