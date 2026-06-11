// --- Lógica del Slider Hero (Estilo Dribbble) ---

// Base de datos de nuestros 4 sabores principales para el inicio
const heroFlavors = [
    {
        id: 'zapallo',
        bgText: 'ZAPALLO',
        frontText: 'ZAPALLO',
        subText: 'ESPECIAS & CANELA',
        colorHex: '#C05A2A', 
        imageSrc: './src/assets/helado_sapa1.png', // <--- AÑADE ESTO
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
        imageSrc: './src/assets/receta-helados-caquis.png', // <--- AÑADE ESTO
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
        imageSrc: './src/assets/helado_camote.png', // <--- AÑADE ESTO
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
        imageSrc: './src/assets/helado_guayaba.png', // <--- AÑADE ESTO
        floaters: [
            './src/assets/palma.png', 
            './src/assets/flor_ibisco.png', 
            './src/assets/caramelo.png', 
            './src/assets/limon.png'
        ]
    }
];

let currentSlide = 0;
let autoPlayTimer: number;

function initHeroSlider() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!prevBtn || !nextBtn) return;

    // Actualizamos los botones para que reinicien el tiempo al hacer clic
    prevBtn.addEventListener('click', () => {
        changeSlide(-1);
        resetAutoPlay(); // <--- AÑADIDO
    });
    
    nextBtn.addEventListener('click', () => {
        changeSlide(1);
        resetAutoPlay(); // <--- AÑADIDO
    });
    
    // ... (aquí sigue tu código de los puntitos indicadores que ya tenías) ...
    const dotsContainer = document.getElementById('slider-dots');
    if (dotsContainer) {
        heroFlavors.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-slate-800 w-8' : 'bg-slate-300'}`;
            dotsContainer.appendChild(dot);
        });
    }

    // ¡Arrancamos el motor automático al final de la inicialización!
    startAutoPlay(); 
}

function changeSlide(direction: number) {
    currentSlide = (currentSlide + direction + heroFlavors.length) % heroFlavors.length;
    const data = heroFlavors[currentSlide];

    // 1. Obtener elementos del DOM (¡Añadimos heroImage!)
    const bgText = document.getElementById('bg-text');
    const frontText = document.getElementById('front-text');
    const subText = document.getElementById('sub-text');
    const heroImage = document.getElementById('hero-image') as HTMLImageElement; // <--- AÑADIDO
    const dots = document.getElementById('slider-dots')?.children;

    if (!bgText || !frontText || !subText || !heroImage) return;

    // 2. Efecto de salida
    heroImage.style.transform = 'scale(0.8) translateY(-20px)'; // <--- CAMBIADO
    heroImage.style.opacity = '0'; // <--- CAMBIADO
    frontText.style.opacity = '0';
    frontText.style.transform = 'translateY(20px)';
    
    // 3. Cambiar datos después de la pausa
    setTimeout(() => {
        // Textos
        bgText.innerText = data.bgText;
        frontText.innerText = data.frontText;
        subText.innerText = data.subText;

        // Cambiar la imagen dinámicamente
        heroImage.src = data.imageSrc; // <--- LA MAGIA OCURRE AQUÍ

        // Colores
        bgText.style.color = `${data.colorHex}20`; 
        subText.style.color = data.colorHex;

        // Actualizar Flotantes
        for (let i = 1; i <= 4; i++) {
            const floatImg = document.getElementById(`float-${i}`) as HTMLImageElement;
            if (floatImg) {
                // Actualizamos la ruta de la imagen con la que definimos en nuestra lista
                floatImg.src = data.floaters[i-1];
            }
        }

        // Actualizar Puntitos
        if (dots) {
            Array.from(dots).forEach((dot, index) => {
                dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-slate-800 w-8' : 'bg-slate-300'}`;
            });
        }

        // Efecto de entrada
        heroImage.style.transform = 'scale(1) translateY(0px)'; // <--- CAMBIADO
        heroImage.style.opacity = '1'; // <--- CAMBIADO
        frontText.style.opacity = '1';
        frontText.style.transform = 'translateY(0px)';

    }, 300);
}
function startAutoPlay(){
  autoPlayTimer = setInterval(()=>{
    changeSlide(1)
  },7000)
}
function resetAutoPlay() {
    // Si el usuario hace clic, borramos el tiempo actual y empezamos a contar de nuevo
    clearInterval(autoPlayTimer);
    startAutoPlay();
}
// Llama a esta función dentro del EventListener que ya tienes al final de tu archivo:
document.addEventListener('DOMContentLoaded', () => {
    initVisualEffects(); // Tu función anterior del scroll
    initHeroSlider();    // Nuestra nueva función del carrusel
});

function initVisualEffects(): void {
    
    // --- 1. Intersection Observer para desvanecimiento de textos (Fade-in) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions: IntersectionObserverInit = {
        threshold: 0.2, // Activa el efecto cuando el 20% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(
        entries: IntersectionObserverEntry[], 
        observer: IntersectionObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            // Añade la clase que activa la animación CSS
            entry.target.classList.add('active');
            // Dejamos de observar una vez que ya apareció
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // --- 2. Sistema Parallax para elementos flotantes (Vanilla JS) ---
    const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');

    window.addEventListener('scroll', () => {
        // Obtenemos la cantidad de pixeles que hemos desplazado hacia abajo
        const scrollY = window.scrollY;

        parallaxElements.forEach(el => {
            // Extraemos la velocidad de movimiento desde el atributo HTML
            const speed = parseFloat(el.getAttribute('data-speed') || '0');
            
            // Calculamos el desplazamiento (Y)
            const yPos = scrollY * speed;

            // Aplicamos la transformación vía CSS
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initVisualEffects);