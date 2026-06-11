// --- Lógica del Slider Hero (Estilo Dribbble) ---

interface FlavorData {
    id: string;
    bgText: string;
    frontText: string;
    subText: string;
    colorHex: string;
    imageSrc: string;
    floaters: string[];
}

const heroFlavors: FlavorData[] = [
    {
        id: 'zapallo',
        bgText: 'ZAPALLO',
        frontText: 'ZAPALLO',
        subText: 'ESPECIAS & CANELA',
        colorHex: '#C05A2A', 
        imageSrc: './src/assets/helado_sapa1.png', 
        floaters: [
            './src/assets/canela.png', 
            './src/assets/hojas_otoño.png', 
            './src/assets/semilla_zapallo.png', 
            './src/assets/anis.png'
        ]
    },
    {
        id: 'caqui',
        bgText: 'CAQUI',
        frontText: 'CAQUI',
        subText: 'DULZURA ÁMBAR',
        colorHex: '#E58A1F', 
        imageSrc: './src/assets/receta-helados-caquis.png', 
        floaters: [
            './src/assets/menta.png', 
            './src/assets/miel.png', 
            './src/assets/flor_vainilla.png',
            './src/assets/limon.png' 
        ]
    },
    {
        id: 'camote',
        bgText: 'CAMOTE',
        frontText: 'CAMOTE',
        subText: 'CARAMELO TERROSO',
        colorHex: '#9E4723', 
        imageSrc: './src/assets/helado_camote.png', 
        floaters: [
            './src/assets/nuez.png', 
            './src/assets/hojas_otoño.png', 
            './src/assets/clavo_de_olor.png', 
            './src/assets/flor_vainilla.png'
        ]
    },
    {
        id: 'guayaba',
        bgText: 'GUAYABA',
        frontText: 'GUAYABA',
        subText: 'CONTRASTE TROPICAL',
        colorHex: '#E15A75', 
        imageSrc: './src/assets/helado_guayaba.png', 
        floaters: [
            './src/assets/palma.png', 
            './src/assets/flor_ibisco.png', 
            './src/assets/caramelo.png', 
            './src/assets/limon.png'
        ]
    }
];

let currentSlide = 0;
let autoPlayTimer: ReturnType<typeof setInterval>;

// Variables para el control táctil (Swipe)
let touchStartX = 0;
let touchEndX = 0;

function initHeroSlider(): void {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const sliderContainer = document.getElementById('hero-slider');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            resetAutoPlay();
        });
    }

    // --- Implementación de control táctil (Swipe) ---
    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true }); // passive: true mejora el rendimiento en móviles

        sliderContainer.addEventListener('touchend', (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    const dotsContainer = document.getElementById('slider-dots');
    if (dotsContainer) {
        heroFlavors.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-slate-800 w-8' : 'bg-slate-300'}`;
            dotsContainer.appendChild(dot);
        });
    }

    startAutoPlay(); 
}

function handleSwipe(): void {
    // Umbral de 50px para evitar swipes accidentales
    const swipeThreshold = 50; 
    if (touchEndX < touchStartX - swipeThreshold) {
        // Deslizamiento hacia la izquierda -> Siguiente
        changeSlide(1);
        resetAutoPlay();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        // Deslizamiento hacia la derecha -> Anterior
        changeSlide(-1);
        resetAutoPlay();
    }
}

function changeSlide(direction: number): void {
    currentSlide = (currentSlide + direction + heroFlavors.length) % heroFlavors.length;
    const data = heroFlavors[currentSlide];

    const bgText = document.getElementById('bg-text');
    const frontText = document.getElementById('front-text');
    const subText = document.getElementById('sub-text');
    const heroImage = document.getElementById('hero-image');
    const dots = document.getElementById('slider-dots')?.children;

    // Type Guards estrictos: Verificamos que los elementos existan y sean del tipo correcto
    if (!bgText || !frontText || !subText || !(heroImage instanceof HTMLImageElement)) return;

    heroImage.style.transform = 'scale(0.8) translateY(-20px)';
    heroImage.style.opacity = '0';
    frontText.style.opacity = '0';
    frontText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        bgText.innerText = data.bgText;
        frontText.innerText = data.frontText;
        subText.innerText = data.subText;

        heroImage.src = data.imageSrc;

        bgText.style.color = `${data.colorHex}20`; 
        subText.style.color = data.colorHex;

        for (let i = 1; i <= 4; i++) {
            const floatImg = document.getElementById(`float-${i}`);
            if (floatImg instanceof HTMLImageElement) {
                floatImg.src = data.floaters[i-1];
            }
        }

        if (dots) {
            Array.from(dots).forEach((dot, index) => {
                if (dot instanceof HTMLElement) {
                    dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-slate-800 w-8' : 'bg-slate-300'}`;
                }
            });
        }

        heroImage.style.transform = 'scale(1) translateY(0px)';
        heroImage.style.opacity = '1';
        frontText.style.opacity = '1';
        frontText.style.transform = 'translateY(0px)';

    }, 300);
}

function startAutoPlay(): void {
    autoPlayTimer = setInterval(() => {
        changeSlide(1);
    }, 7000);
}

function resetAutoPlay(): void {
    clearInterval(autoPlayTimer);
    startAutoPlay();
}

function initVisualEffects(): void {
    
    // --- 1. Intersection Observer para desvanecimiento de textos (Fade-in) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions: IntersectionObserverInit = {
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(
        entries: IntersectionObserverEntry[], 
        observer: IntersectionObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    // --- 2. Sistema Parallax Optimizado (requestAnimationFrame) ---
    const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');
    let ticking = false; // Bandera para controlar el estado del frame

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Si no estamos en medio de un frame de animación, solicitamos uno
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxElements.forEach(el => {
                    const speed = parseFloat(el.getAttribute('data-speed') || '0');
                    const yPos = scrollY * speed;
                    el.style.transform = `translateY(${yPos}px)`;
                });
                ticking = false; // Liberamos la bandera al terminar de pintar
            });
            ticking = true; // Bloqueamos nuevas peticiones hasta que el frame se pinte
        }
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    initVisualEffects(); 
    initHeroSlider();    
});