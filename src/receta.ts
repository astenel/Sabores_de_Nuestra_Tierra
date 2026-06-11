// 1. Definimos las reglas estrictas de nuestros datos
interface RecetaData {
    readonly titulo: string;
    readonly desc: string;
    readonly imagen: string;
    readonly imagenFlotante: string; 
    readonly color: string;
    readonly ingredientes: string[];
    readonly beneficios: string;
    readonly pasos: string[];
}

// 2. Base de datos completa de las recetas
const database: Record<string, RecetaData> = {
    zapallo: {
        titulo: 'Helado Artesanal de Zapallo',
        desc: 'Una experiencia aterciopelada y cremosa que resalta el sabor natural del zapallo en cada cucharada.',
        imagen: '/src/assets/helado_zapallo.png', 
        imagenFlotante: '/src/assets/hallow.png', 
        color: '#C05A2A',
        ingredientes: [
            '840 g de Zapallo (peso de la pulpa cocida en agua y escurrida)',
            '200 g de Leche entera',
            '80 g de Leche condensada',
            '700 g de Crema de leche para repostería (fría)'
        ],
        beneficios: 'El zapallo es rico en betacarotenos (vitamina A), esencial para la salud visual y la piel. Al combinarlo con bases lácteas, se logra una textura sumamente cremosa resaltando su dulzor natural.',
        pasos: [
            'Asegurarse de que el zapallo cocido esté completamente frío y muy bien escurrido para evitar la formación de cristales de hielo en el producto final.',
            'En una licuadora o procesador de alimentos, procesar la pulpa de zapallo junto con la leche entera y la leche condensada hasta obtener un puré fino y homogéneo, sin grumos. Reservar esta mezcla.',
            'En un bol frío, batir la crema de repostería fría hasta alcanzar el punto de semi-montado.',
            'Incorporar la base de zapallo a la crema semi-montada. Utilizar una espátula de goma con movimientos envolventes suaves, desde el fondo hacia arriba, hasta integrar por completo ambas mezclas.',
            'Verter la mezcla en un contenedor hermético o cubrir con film plástico tocando directamente la superficie de la mezcla (al contacto). Llevar al congelador por un mínimo de 6 horas o hasta que adquiera la consistencia firme de helado.'
        ]
    },
    caqui: {
        titulo: 'Helado de Caqui',
        desc: 'La dulzura natural del caqui transformada en un helado rico y cremoso, utilizando pulpa congelada para una textura inigualable.',
        imagen: '/src/assets/receta-helados-caquis.png', 
        imagenFlotante: '/src/assets/caqui1.png', 
        color: '#E58A1F',
        ingredientes: [
            '1400 g de Caqui (peso de la pulpa extraída y congelada)',
            '600 g de Leche entera',
            '350 g de Leche condensada',
            '800 g de Crema de leche para repostería (fría)'
        ],
        beneficios: 'El caqui es una excelente fuente de vitamina A, C y antioxidantes. Al utilizar la pulpa previamente congelada y mezclarla con una base láctea, se consigue una textura mucho más sedosa y se evita la cristalización en el helado final.',
        pasos: [
            'Lavar bien los caquis. Cortarlos por la mitad y extraer la pulpa con ayuda de una cuchara, desechando la cáscara y cualquier semilla interna. Colocar la pulpa limpia en una bandeja o recipiente extendido y llevar al congelador hasta que esté completamente sólida.',
            'En una licuadora o procesador de alimentos, procesar la pulpa de caqui congelada junto con la leche entera y la leche condensada hasta obtener un puré fino y homogéneo, sin grumos. Reservar esta mezcla.',
            'En un bol frío, batir la crema de repostería fría hasta alcanzar el punto de semi-montado.',
            'Incorporar la base frutal a la crema semi-montada. Utilizar una espátula de goma con movimientos envolventes suaves, desde el fondo hacia arriba, hasta integrar por completo ambas mezclas.',
            'Verter la mezcla en un contenedor hermético o cubrir con film plástico tocando directamente la superficie de la mezcla. Llevar al congelador por un mínimo de 6 horas o hasta que adquiera la consistencia firme de helado.'
        ]
    },
    camote: {
        titulo: 'Helado de Camote',
        desc: 'Un sabor terroso, profundo y naturalmente dulce, logrado a partir de pulpa de camote horneada y una base láctea sumamente sedosa.',
        imagen: '/src/assets/camotes.jpg',  
        imagenFlotante: '/src/assets/camote.png', 
        color: '#9E4723',
        ingredientes: [
            '1000 g de Camote (peso de la pulpa horneada)',
            '500 g de Leche entera',
            '300 g de Leche condensada',
            '700 g de Crema de leche para repostería (fría)'
        ],
        beneficios: 'El camote aporta carbohidratos complejos y fibra, brindando saciedad y mucha energía. Al hornearlo previamente, sus azúcares naturales se concentran y caramelizan, logrando un dulzor perfecto sin necesidad de añadir azúcar extra.',
        pasos: [
            'Hornear los camotes enteros hasta que estén suaves. Dejar enfriar, retirar la cáscara y pesar la cantidad exacta de pulpa requerida.',
            'En una licuadora triturar la pulpa de camote junto con la leche entera y la leche condensada hasta obtener un puré fino y homogéneo. Reservar esta mezcla.',
            'En un bol, batir la crema de repostería hasta alcanzar semi-montado (picos suaves). Tenga cuidado de no sobrebatir.',
            'Incorporar delicadamente la base de camote reservada a la crema montada, utilizando movimientos envolventes con una espátula de goma hasta integrar por completo.',
            'Verter la mezcla en un contenedor con tapa hermética o cubrir con film plástico al contacto. Llevar al congelador por un mínimo de 6 horas o hasta que adquiera la consistencia de helado.'
        ]
    },
    guayaba: {
        titulo: 'Helado de Guayaba',
        desc: 'Un escape tropical con una textura suave y sedosa. Aromático, exótico y con un color vibrante inconfundible gracias a su base láctea y pulpa pura.',
        imagen: '/src/assets/heladoguayaba.jpg', 
        imagenFlotante: '/src/assets/guayaba1.png', 
        color: '#E15A75',
        ingredientes: [
            '1000 g de Guayaba (peso de la pulpa limpia y congelada)',
            '200 g de Leche entera',
            '300 g de Leche condensada',
            '700 g de Crema de leche para repostería (fría)'
        ],
        beneficios: 'La guayaba es una de las frutas con mayor concentración de vitamina C, fortaleciendo el sistema inmunológico. Al procesar la pulpa congelada con la base láctea, se logra un helado cremoso que equilibra perfectamente la acidez natural de la fruta.',
        pasos: [
            'Lavar la guayaba, retirar la cáscara y desechar las semillas. Picar la pulpa limpia en trozos uniformes, colocar en una bandeja y llevar al congelador hasta que estén sólidos.',
            'En una licuadora o procesador de alimentos, procesar la pulpa de guayaba congelada junto con la leche entera y la leche condensada hasta obtener un puré fino y homogéneo, sin grumos. Reservar esta mezcla.',
            'En un bol frío, batir la crema de repostería fría hasta alcanzar el punto de semi-montado.',
            'Incorporar la base frutal a la crema semi-montada. Utilizar una espátula de goma con movimientos envolventes suaves, desde el fondo hacia arriba, hasta integrar por completo ambas mezclas y obtener un color uniforme.',
            'Verter la mezcla en un contenedor hermético o cubrir con film plástico tocando directamente la superficie de la mezcla. Llevar al congelador por un mínimo de 6 horas o hasta que adquiera la consistencia.'
        ]
    }
};

function initReceta(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const sabor = urlParams.get('sabor');

    if (!sabor || !database[sabor]) {
        window.location.href = '/';
        return;
    }

    // Type Guard Seguro
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver instanceof HTMLAnchorElement) {
        btnVolver.href = `/#sabor-${sabor}`;
    }

    const data = database[sabor];

    document.title = `${data.titulo} | Helados de la Tierra`;
    
    const tituloEl = document.getElementById('titulo-receta');
    if (tituloEl) {
        tituloEl.textContent = data.titulo;
        tituloEl.style.color = data.color;
    }

    const descEl = document.getElementById('desc-receta');
    if (descEl) descEl.textContent = data.desc;

    // Type Guard Seguro
    const imgEl = document.getElementById('img-receta');
    if (imgEl instanceof HTMLImageElement) {
        imgEl.src = data.imagen;
        imgEl.classList.remove('opacity-0'); 
    }

    // Inyección segura de texto
    const beneficiosEl = document.getElementById('beneficios-receta');
    if (beneficiosEl) {
        beneficiosEl.textContent = ''; // Limpiamos contenedor
        const p = document.createElement('p');
        p.className = 'text-slate-600 leading-relaxed';
        p.textContent = data.beneficios;
        beneficiosEl.appendChild(p);
    }

    // Renderizar Listas de Forma Segura (Sanitización implícita)
    const ingredientesList = document.getElementById('lista-ingredientes');
    if (ingredientesList) {
        ingredientesList.textContent = ''; 
        data.ingredientes.forEach(ing => {
            const li = document.createElement('li');
            li.className = 'flex items-start gap-3';
            
            // Estructura segura HTML (Icono)
            li.innerHTML = `<svg class="w-6 h-6 shrink-0" style="color: ${data.color}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
            
            // Inyección de dato variable segura
            const span = document.createElement('span');
            span.className = 'text-slate-700';
            span.textContent = ing;
            
            li.appendChild(span);
            ingredientesList.appendChild(li);
        });
    }

    const pasosList = document.getElementById('pasos-preparacion');
    if (pasosList) {
        pasosList.textContent = '';
        data.pasos.forEach((paso, index) => {
            const li = document.createElement('li');
            li.className = 'relative pl-10';
            
            // Estructura segura HTML (Indicador de número)
            li.innerHTML = `<span class="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md" style="background-color: ${data.color}">${index + 1}</span>`;
            
            // Inyección de dato variable segura
            const p = document.createElement('p');
            p.className = 'text-slate-700 leading-relaxed pt-1';
            p.textContent = paso;
            
            li.appendChild(p);
            pasosList.appendChild(li);
        });
    }

    // Type Guard Seguro y Observer
    const imgFlotanteEl = document.getElementById('imagen-flotante');
    const recetaSeccion = document.getElementById('receta-seccion');

    if (imgFlotanteEl instanceof HTMLImageElement && recetaSeccion) {
        imgFlotanteEl.src = data.imagenFlotante;

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imgFlotanteEl.classList.remove('opacity-0', 'translate-y-12');
                    imgFlotanteEl.classList.add('opacity-100', 'translate-y-0');
                } else {
                    imgFlotanteEl.classList.remove('opacity-100', 'translate-y-0');
                    imgFlotanteEl.classList.add('opacity-0', 'translate-y-12');
                }
            });
        }, observerOptions);

        scrollObserver.observe(recetaSeccion);
    }
}

document.addEventListener('DOMContentLoaded', initReceta);