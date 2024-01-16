let Block1 = document.getElementById("block-1");
let Block2 = document.getElementById("block-2");
let Skeleton = document.getElementById("skeleton");
let Counter = document.getElementById("counter");
let Text = document.getElementById("awards-text");
let awards = [
    "Сегодня у тебя будет отличный день",
    "2 + 2 будет... 4!",
    "Фиолетовый короногрок это паук, а не жук",
    "Денчик лох"
];

function opens() {
    Block1.style.display = "flex";
}

function closes() {
    Block1.style.display = "none";
}

function closesTwo() {
    Block2.style.display = "none";
}

function rand() {
    let answer = awards[Math.floor(Math.random() * awards.length)];
    Text.innerText = answer;
}

let progress = false;
let balance = 0;

function skeletonClick() {
    if (!progress) {
        // Статус 1
        progress = true;

        // Баланс
        balance += 1;
        Counter.innerText = balance;
        // Проверка
        switch(balance) {
            case 66:
                Block2.style.display = "flex";
                rand()
                break;
            case 200:
                Block2.style.display = "flex";
                break;
        }

        // Анимация
        Skeleton.classList.add("skeleton-click");
        setTimeout(() => {
            Skeleton.classList.remove("skeleton-click");
        }, 200)
        // Статус 2
        progress = false;
    }
}