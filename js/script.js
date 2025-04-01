/*scroll suave*/
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

    /*efeito de fade-in*/
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

    /*carrossel*/
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const track = document.querySelector(".carrossel-track");
    const items = document.querySelectorAll(".item");
    let currentIndex = 0;

    /*função para atualizar a posição do carrossel*/
    function updateCarrossel() {
        const width = items[0].clientWidth + 20;
        track.style.transition = 'transform 0.3s ease';
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    /*tratamento de visibilidade das setas*/
        prevBtn.style.display = currentIndex > 0 ? "block" : "none";
        nextBtn.style.display = currentIndex < items.length - 1 ? "block" : "none";
    }

    /*função para avançar e para voltar no carrossel*/
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

    /*inicializa o carrossel e deixa sempre atualizado*/
    updateCarrossel();

    /*fade-in nos produtos*/
    produtos.forEach(produto => {
        produto.classList.add("hidden");
        observer.observe(produto);
    });

    /*remove a classe hidden após o efeito de transição para não interferir no carrossel*/
    produtos.forEach(produto => {
        produto.addEventListener('transitionend', function () {
            produto.classList.remove('hidden');
        });
    });
});

/*revelar elementos de acordo com o scroll na página*/
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
