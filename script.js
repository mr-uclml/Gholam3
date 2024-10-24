const cups = document.querySelectorAll('.cup');
const result = document.getElementById('result');
const shuffleButton = document.getElementById('shuffleButton');
let ballUnderCup = Math.floor(Math.random() * 3) + 1; // سکه به صورت تصادفی زیر یکی از کاسه‌ها قرار می‌گیرد
let isShuffling = false;

// اضافه کردن آیکون سکه به یکی از کاسه‌ها
const coinIcon = document.createElement('img');
coinIcon.src = 'https://cdn-icons-png.flaticon.com/512/616/616490.png'; // آیکون سکه
document.getElementById(`cup${ballUnderCup}`).appendChild(coinIcon);
coinIcon.style.display = 'block';

// شروع جابجایی کاسه‌ها
shuffleButton.addEventListener('click', () => {
    if (isShuffling) return;
    isShuffling = true;
    result.textContent = '';
    
    // مخفی کردن سکه پس از نشان دادن اولیه
    setTimeout(() => {
        coinIcon.style.display = 'none';
        shuffleCups();
    }, 1000); // ۱ ثانیه برای نمایش اولیه سکه
});

cups.forEach((cup, index) => {
