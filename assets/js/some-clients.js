document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', '');
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment) + '+';
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + '+';
                }
            };

            updateCount();
        });
    };

    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        if (isElementInViewport(document.querySelector('.statistics'))) {
            animateCounters();
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
});

//-------------

const carouselDots = document.querySelectorAll(".carousel-dot");
const carouselItems = document.querySelector(".carousel-items");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
let currentIndex = 0;

// Duplicar os itens do carrossel para criar o efeito de loop infinito
carouselItems.innerHTML += carouselItems.innerHTML;

// Inicializar a cor do primeiro ponto de navegação
carouselDots[0].classList.add('active-dot');

function updateCarousel() {
    const percentage = -currentIndex * 34; // Mudança de posição
    carouselItems.style.transform = `translateX(${percentage}%)`;

    // Verificar se chegou ao final da primeira metade e resetar a posição
    if (currentIndex >= itemCount) {
        setTimeout(() => {
            carouselItems.style.transition = 'none';
            currentIndex = 0;
            carouselItems.style.transform = `translateX(0)`;
        }, 500); // Espera o tempo da transição antes de resetar
    }
}

function updateDots() {
    carouselDots.forEach(dot => dot.classList.remove('active-dot'));
    carouselDots[currentIndex].classList.add('active-dot');
}

// Adiciona eventos aos pontos de navegação
carouselDots.forEach((element, index) => {
    element.addEventListener("click", () => {
        carouselItems.style.transition = 'transform 0.5s ease-in-out';
        currentIndex = index;
        updateCarousel();
        updateDots();
    });
});