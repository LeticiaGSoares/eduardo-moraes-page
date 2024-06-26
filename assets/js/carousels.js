//-------- Carrosel de marcas

const brandsCarouselDots = document.querySelectorAll("#brands-carousel-dot");
const brandsCarouselItems = document.querySelector("#brands-carousel-items");
const items = document.querySelectorAll("#brands-carousel-item");
const itemCount = items.length;
let currentIndex = 0;

// Duplicar os itens do carrossel para criar o efeito de loop infinito
brandsCarouselItems.innerHTML += brandsCarouselItems.innerHTML;
brandsCarouselDots[0].classList.add('active-dot');

brandsCarouselDots.forEach((element, index) => {
    element.addEventListener("click", () => {
        brandsCarouselItems.style.transition = 'transform 0.5s ease-in-out';
        currentIndex = index;
        updateCarousel(brandsCarouselItems);
        updateDots(brandsCarouselDots);
    });
});
//------- Funções para carrossel com pontos de navegação


function updateCarousel(arrCarouselItems) {
    const percentage = -currentIndex * 34; // Mudança de posição
    arrCarouselItems.style.transform = `translateX(${percentage}%)`;

    // Verificar se chegou ao final da primeira metade e resetar a posição
    if (currentIndex >= itemCount) {
        setTimeout(() => {
            arrCarouselItems.style.transition = 'none';
            currentIndex = 0;
            arrCarouselItems.style.transform = `translateX(0)`;
        }, 500); // Espera o tempo da transição antes de resetar
    }
}

function updateDots(arrCarouselDots) {
    arrCarouselDots.forEach(dot => dot.classList.remove('active-dot'));
    arrCarouselDots[currentIndex].classList.add('active-dot');
}

// Adiciona eventos aos pontos de navegação



const videosCarouselItems = document.getElementById("videos-carousel-items");
const videoItems = document.querySelectorAll("#videos-carousel-items .carousel-item");
const videoItemCount = videoItems.length;
let videoCurrentIndex = 0;
let videoStartPos = 0;
let videoCurrentTranslate = 0;
let videoPrevTranslate = 0;
let videoDragging = false;

const maxTranslate = 0;
const minTranslate = -(videosCarouselItems.scrollWidth - videosCarouselItems.clientWidth);

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function videoAnimation() {
    videosCarouselItems.style.transform = `translateX(${videoCurrentTranslate}px)`;
    if (videoDragging) requestAnimationFrame(videoAnimation);
}

function videoTouchStart(event) {
    videoStartPos = getPositionX(event);
    videoDragging = true;
    requestAnimationFrame(videoAnimation);
    videosCarouselItems.style.transition = 'none';
}

function videoTouchMove(event) {
    if (!videoDragging) return;
    const currentPosition = getPositionX(event);
    videoCurrentTranslate = videoPrevTranslate + currentPosition - videoStartPos;
    videoCurrentTranslate = Math.min(Math.max(videoCurrentTranslate, minTranslate), maxTranslate);
}

function videoTouchEnd() {
    videoDragging = false;
    videoPrevTranslate = videoCurrentTranslate;
}

function videoSetPositionByIndex() {
    videoCurrentTranslate = Math.min(Math.max(videoCurrentTranslate, minTranslate), maxTranslate);
    videoPrevTranslate = videoCurrentTranslate;
    videosCarouselItems.style.transition = 'transform 0.5s ease-in-out';
    videosCarouselItems.style.transform = `translateX(${videoCurrentTranslate}px)`;
}

function handlePrevClick() {
    const videoItemWidth = videosCarouselItems.clientWidth / videoItemCount;
    if (videoCurrentIndex > 0) {
        videoCurrentIndex -= 1;
        videoCurrentTranslate += videoItemWidth;
        videoSetPositionByIndex();
    }
}

function handleNextClick() {
    const videoItemWidth = videosCarouselItems.clientWidth / videoItemCount;
    if (videoCurrentIndex < videoItemCount - 1) {
        videoCurrentIndex += 1;
        videoCurrentTranslate -= videoItemWidth;
        videoSetPositionByIndex();
    }
}

document.getElementById('videos-carousel-prev').addEventListener('click', handlePrevClick);
document.getElementById('videos-carousel-next').addEventListener('click', handleNextClick);

videosCarouselItems.addEventListener('mousedown', videoTouchStart);
videosCarouselItems.addEventListener('mouseup', videoTouchEnd);
videosCarouselItems.addEventListener('mouseleave', videoTouchEnd);
videosCarouselItems.addEventListener('mousemove', videoTouchMove);
videosCarouselItems.addEventListener('touchstart', videoTouchStart);
videosCarouselItems.addEventListener('touchend', videoTouchEnd);
videosCarouselItems.addEventListener('touchmove', videoTouchMove);
