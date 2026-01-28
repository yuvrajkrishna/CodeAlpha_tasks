const cards = document.querySelectorAll('.card img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-btn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

// OPEN MODAL
cards.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = img.src;
    currentIndex = index;
  });
});

// CLOSE MODAL
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// NEXT IMAGE
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // modal close na ho
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
  modalImg.src = cards[currentIndex].src;
});

// PREVIOUS IMAGE
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }
  modalImg.src = cards[currentIndex].src;
});

// CLICK OUTSIDE TO CLOSE
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
