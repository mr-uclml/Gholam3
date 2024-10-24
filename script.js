let ballPosition = 0;

function shuffle() {
  document.getElementById("result").textContent = "";
  
  // پنهان کردن توپ از همه پیمانه‌ها
  for (let i = 1; i <= 3; i++) {
    document.getElementById("cup" + i).style.backgroundColor = '#c0c0c0';
    document.getElementById("cup" + i).firstChild.style.display = 'none';
  }

  // جایگذاری تصادفی توپ
  ballPosition = Math.floor(Math.random() * 3) + 1;
}

function checkCup(selectedCup) {
  if (selectedCup === ballPosition) {
    document.getElementById("result").textContent = "You found the ball!";
    document.getElementById("cup" + selectedCup).style.backgroundColor = '#28a745';
    document.getElementById("cup" + selectedCup).firstChild.style.display = 'block';
  } else {
    document.getElementById("result").textContent = "Wrong! Try again.";
    document.getElementById("cup" + selectedCup).style.backgroundColor = '#dc3545';
  }
}
