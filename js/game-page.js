// Carousel simple
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function updateCarousel() {
  const container = document.querySelector('.carousel');
  const containerWidth = container.offsetWidth;
  const slideWidth = slides[0].offsetWidth + 16;
  const activeSlide = slides[index];
  const slideLeft = activeSlide.offsetLeft;
  const offset = (containerWidth / 2) - (slideWidth / 2);
  track.style.transform = `translateX(${offset - slideLeft}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

// === Stars ===
document.querySelectorAll('.stars').forEach(starContainer => {
  const rating = parseFloat(starContainer.dataset.rating);
  const color = starContainer.dataset.color;
  starContainer.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('i');
    if (rating >= i) {
      star.className = 'fas fa-star';
    } else if (rating >= i - 0.5) {
      star.className = 'fas fa-star-half-alt';
    } else {
      star.className = 'far fa-star';
    }
    star.style.color = color;
    starContainer.appendChild(star);
  }
});
