let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;
minValue = isNaN(minValue) ? -999 : minValue;
maxValue = isNaN(maxValue) ? 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

   


document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '999'));

    

    // Используем тернарный оператор для коррекции значений
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    minValue = isNaN(minValue) ? -999 : minValue;
    maxValue = isNaN(maxValue) ? 999 : maxValue;

    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerField.innerText = getRandomRetryPhrase(answerNumber);
    gameRun = true;
});


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = getRetryPhrase(answerNumber);
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getGuessPhrase(answerNumber);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            answerField.innerText = getRetryPhrase(answerNumber);  // Используйте getRetryPhrase здесь
            gameRun = false;
        } else {
            maxValue = answerNumber - 0;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getGuessPhrase(answerNumber);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = getEqualPhrase();
        gameRun = false;
    }
})

function getRandomRetryPhrase(answerNumber) {
    const randomIndex = Math.round(Math.random() * 2);
    if (randomIndex === 0) {
        return `Это легко!  ${answerNumber}!`;
    } else if (randomIndex === 1) {
        return `Думаю, это число ${answerNumber}?`;
    } else {
        return `Может быть, это ${answerNumber}?`;
    }
}

function getGuessPhrase(answerNumber) {
    const randomIndex = Math.round(Math.random() * 2);
    if (randomIndex === 0) {
        return `Вы загадали число ${answerNumber}?`;
    } else if (randomIndex === 1) {
        return `Это, наверное, ${answerNumber}?`;
    } else {
        return `Не может быть! Это ${answerNumber}?`;
    }
}

function getEqualPhrase() {
    const randomIndex = Math.round(Math.random() * 2);
    if (randomIndex === 0) {
        return `Я всегда угадываю\n\u{1F60E}`;
    } else if (randomIndex === 1) {
        return `Победа!`;
    } else {
        return `Ура!`;
    }
}

function getRetryPhrase(answerNumber) {
    const randomIndex = Math.round(Math.random() * 2);
    if (randomIndex === 0) {
        return `Вы загадали неправильное число!\n\u{1F914}`;
    } else if (randomIndex === 1) {
        return `Ты победил (спойлер: Нет)))\n\u{1F92F}`;
    } else {
        return `Этого не может быть!`;
    }
}