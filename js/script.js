document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    const produtos = document.querySelectorAll(".item");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    produtos.forEach(produto => {
        produto.classList.add("hidden");
        observer.observe(produto);
    });

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const track = document.querySelector(".carrossel-track");
    const items = document.querySelectorAll(".item");
    let currentIndex = 0;

    function updateCarrossel() {
        const width = items[0].clientWidth + 20;
        track.style.transition = 'transform 0.3s ease';
        track.style.transform = `translateX(-${currentIndex * width}px)`;

        prevBtn.style.display = currentIndex > 0 ? "block" : "none";
        nextBtn.style.display = currentIndex < items.length - 1 ? "block" : "none";
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarrossel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrossel();
        }
    });

    updateCarrossel();

    produtos.forEach(produto => {
        produto.classList.add("hidden");
        observer.observe(produto);
    });

    produtos.forEach(produto => {
        produto.addEventListener('transitionend', function () {
            produto.classList.remove('hidden');
        });
    });
});

const revealElements = () => {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
};

window.addEventListener('scroll', revealElements);

revealElements();

const contactForm = document.getElementById('contactForm');
const notification = document.getElementById('notification');

function showNotification() {
  notification.classList.remove('hidden');
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hidden');
  }, 3000);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showNotification();
});
