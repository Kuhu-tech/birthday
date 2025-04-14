function revealWish() {
  const wish = document.getElementById('wish');
  wish.style.display = 'block';
}

const heartContainer = document.getElementById('hearts-container');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Random starting position across the entire viewport
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = Math.random() * window.innerHeight + 'px';
  
  // Random size between 20px and 40px
  const size = 20 + Math.random() * 20;
  heart.style.fontSize = size + 'px';
  
  // Random heart emoji
  const hearts = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🤍', '💖', '💗', '💓', '💞', '💕', '💘'];
  const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
  heart.textContent = randomHeart;
  
  // Random animation duration between 3 and 6 seconds
  heart.style.animationDuration = 3 + Math.random() * 3 + 's';
  
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 200);
