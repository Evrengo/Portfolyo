const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

guessButton.addEventListener( 'click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if(!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Lütfen 1 ile 100 arasında bir sayı girin.';
        return;
    }

    if(userGuess === randomNumber) {
        message.textContent = `Tebrikler! Doğru tahmin ettiniz. Sayı: ${randomNumber}. Toplam deneme: ${attempts}`;
        guessButton.disabled = true;
        ghuessInput.disabled = true;
    } else if(attempts >= 10) {
        message.textContent = `Maalesef, 10 denemede doğru tahmin edemediniz. Sayı: ${randomNumber}.`;
        guessButton.disabled = true;
        guessInput.disabled = true;
    } else if(userGuess < randomNumber) {
        message.textContent = 'Daha yüksek bir sayı deneyin.';
    } else {
        message.textContent = 'Daha düşük bir sayı deneyin.';
    }

    guessInput.value = '';
    guessInput.focus();
});