
function revealWish() {
  const wish = document.getElementById('wish');
  wish.style.display = 'block';
}

const heartContainer = document.getElementById('hearts-container');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);
