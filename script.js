let ballPosition = 0;
let shuffling = false;
const cups = document.querySelectorAll('.cup');

function startGame() {
  document.getElementById("result").textContent = "";
  document.getElementById("startButton").disabled = true;

  // نمایش اولیه توپ
  ballPosition = Math.floor(Math.random() * 3) + 1;
  showBall(ballPosition);

  // بعد از 2 ثانیه توپ را پنهان می‌کنیم و انیمیشن جابجایی را آغاز می‌کنیم
  setTimeout(() => {
    hideBall();
    shuffleCups();
  }, 2000);
}

function showBall(position) {
  document.getElementById("cup" + position).firstChild.style.display = 'block';
}

function hideBall() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("cup" + i).firstChild.style.display = 'none';
  }
}

function shuffleCups() {
  shuffling = true;
  let moves = 5;
  let interval = setInterval(() => {
    let cup1 = Math.floor(Math.random() * 3) + 1;
    let cup2;
    do {
      cup2 = Math.floor(Math.random() * 3) + 1;
    } while (cup1 === cup2);

    swapCups(cup1, cup2);
    moves--;

    if (moves === 0) {
      clearInterval(interval);
      shuffling = false;
      enableClick();
    }
  }, 1000);
}

function swapCups(cup1, cup2) {
  const cupElem1 = document.getElementById('cup' + cup1);
  const cupElem2 = document.getElementById('cup' + cup2);
  
  // انیمیشن جابه‌جایی
  const tempTransform = cupElem1.style.transform;
  cupElem1.style.transform = cupElem2.style.transform;
  cupElem2.style.transform = tempTransform;
}

function enableClick() {
  cups.forEach(cup => {
    cup.onclick = () => {
      if (!shuffling) {
        checkCup(cup.id.replace('cup', ''));
      }
    };
  });
}

function checkCup(selectedCup) {
  if (parseInt(selectedCup) === ballPosition) {
    document.getElementById("result").textContent = "You found the ball!";
    showBall(ballPosition);
  } else {
    document.getElementById("result").textContent = "Wrong! Try again.";
  }
  document.getElementById("startButton").disabled = false;
}
