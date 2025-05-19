AOS.init({
  duration: 1000,
  once: true
});

// Initialize Swiper with Slide Animation
new Swiper('.swiper-container', {
  loop: true,  // Enable looping (infinite scroll)
  autoplay: {
    delay: 3000,  // Auto-slide every 3 seconds
    disableOnInteraction: false,  // Keep autoplay after user interaction
  },
  pagination: {
    el: '.swiper-pagination',  // Enable pagination
    clickable: true,  // Allow clicking on pagination dots
  },
  effect: 'slide',  // Slide transition effect
  slidesPerView: 1,  // Show one slide at a time (adjust as needed)
});
document.getElementById('toggleCvBtn').addEventListener('click', function () {
  const cvSection = document.getElementById('cvSection');
  if (cvSection.style.display === 'none') {
    cvSection.style.display = 'block';
    this.textContent = 'Hide CV';
  } else {
    cvSection.style.display = 'none';
    this.textContent = 'More About Me';
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");

  openBtn.onclick = () => {
    popup.style.display = "flex";
  };

  closeBtn.onclick = () => {
    popup.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
});


document.addEventListener('DOMContentLoaded', function () {
  const viewMoreBtn = document.getElementById('openPopup');
  const popupCard = document.getElementById('popupCard');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  viewMoreBtn.addEventListener('click', () => {
    popupCard.classList.add('show');
    overlay.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    popupCard.classList.remove('show');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', () => {
    popupCard.classList.remove('show');
    overlay.classList.remove('show');
  });
});AOS.init({
  duration: 1000,
  once: true
});

// Initialize Swiper with Slide Animation
new Swiper('.swiper-container', {
  loop: true,  // Enable looping (infinite scroll)
  autoplay: {
    delay: 3000,  // Auto-slide every 3 seconds
    disableOnInteraction: false,  // Keep autoplay after user interaction
  },
  pagination: {
    el: '.swiper-pagination',  // Enable pagination
    clickable: true,  // Allow clicking on pagination dots
  },
  effect: 'slide',  // Slide transition effect
  slidesPerView: 1,  // Show one slide at a time (adjust as needed)
});
document.getElementById('toggleCvBtn').addEventListener('click', function () {
  const cvSection = document.getElementById('cvSection');
  if (cvSection.style.display === 'none') {
    cvSection.style.display = 'block';
    this.textContent = 'Hide CV';
  } else {
    cvSection.style.display = 'none';
    this.textContent = 'More About Me';
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.getElementById("closePopup");

  openBtn.onclick = () => {
    popup.style.display = "flex";
  };

  closeBtn.onclick = () => {
    popup.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
});


document.addEventListener('DOMContentLoaded', function () {
  const viewMoreBtn = document.getElementById('openPopup');
  const popupCard = document.getElementById('popupCard');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  viewMoreBtn.addEventListener('click', () => {
    popupCard.classList.add('show');
    overlay.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    popupCard.classList.remove('show');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', () => {
    popupCard.classList.remove('show');
    overlay.classList.remove('show');
  });
});