const cups = document.querySelectorAll('.cup');
const result = document.getElementById('result');
const shuffleButton = document.getElementById('shuffleButton');
let ballUnderCup = 1; // سکه در ابتدا زیر کاسه اول قرار دارد
let isShuffling = false;

// شروع جابجایی کاسه‌ها
shuffleButton.addEventListener('click', () => {
    if (isShuffling) return;
    isShuffling = true;
    result.textContent = '';
    shuffleCups();
});

cups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        if (isShuffling) return;
        checkGuess(index + 1);
    });
});

function shuffleCups() {
    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
        ballUnderCup = Math.floor(Math.random() * 3) + 1;
        shuffleCount++;
        if (shuffleCount > 10) { // 10 بار جابجا می‌شود
            clearInterval(shuffleInterval);
            isShuffling = false;
        }
    }, 500); // هر ۵۰۰ میلی‌ثانیه یک بار جابجایی
}

function checkGuess(selectedCup) {
    if (selectedCup === ballUnderCup) {
        result.textContent = 'تبریک! برنده شدی!';
    } else {
        result.textContent = 'متاسفم! دوباره امتحان کن.';
    }
}
