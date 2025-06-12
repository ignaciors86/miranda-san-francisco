const suspects = {
    "Ruperta": {
        name: "Ruperta",
        origin: "Barrio Sésamo",
        description: "Una profesora de matemáticas que ha encontrado en los números una forma de entender el mundo. Su carácter dulce y didáctico oculta una mente brillante que ha descubierto patrones matemáticos en los monumentos antiguos.",
        distinctiveTraits: [
            "Lleva un delantal de profesora",
            "Siempre tiene una pizarra portátil",
            "Deja tizas de colores por donde pasa"
        ],
        motivation: "Cree que ha descubierto un método para enseñar matemáticas a través de los monumentos antiguos y está dispuesta a demostrarlo, incluso si eso significa tomar prestados algunos artefactos.",
        skills: [
            "Experta en didáctica matemática",
            "Conocedora de juegos educativos",
            "Especialista en hacer las matemáticas divertidas"
        ]
    },
    "Don Pablo": {
        name: "Don Pablo",
        origin: "Cuéntame cómo pasó",
        description: "Un empresario sin escrúpulos que ha encontrado en los monumentos antiguos la oportunidad perfecta para su última estafa. Tras el fracaso de Construcciones Nueva York, ha ideado un plan para vender participaciones en una supuesta empresa de explotación turística de yacimientos arqueológicos.",
        distinctiveTraits: [
            "Lleva trajes caros y gafas de sol",
            "Siempre tiene un maletín lleno de documentos",
            "Deja facturas y contratos por donde pasa"
        ],
        motivation: "Busca recuperar el dinero perdido en sus anteriores estafas y ha encontrado en los monumentos antiguos la excusa perfecta para engañar a nuevos inversores. Su plan es vender participaciones en una empresa fantasma que supuestamente explotará los yacimientos arqueológicos.",
        skills: [
            "Experto en estafas piramidales",
            "Conocedor de leyes y contratos",
            "Especialista en engañar a inversores"
        ]
    },
    "Curro Jiménez": {
        name: "Curro Jiménez",
        origin: "Curro Jiménez",
        description: "Un bandolero andaluz que ha encontrado en los mapas antiguos la clave para sus robos. Su conocimiento de los caminos y su astucia le han permitido descubrir que los monumentos antiguos esconden un tesoro matemático.",
        distinctiveTraits: [
            "Lleva sombrero de ala ancha y fajín rojo",
            "Siempre tiene un mapa antiguo",
            "Deja huellas de caballo por donde pasa"
        ],
        motivation: "Ha descubierto que los antiguos observatorios esconden un tesoro matemático que podría hacerle rico. Sigue un patrón de robos que le llevará a encontrar el botín más grande de su vida.",
        skills: [
            "Experto en rutas antiguas",
            "Conocedor de escondites secretos",
            "Especialista en evadir a la guardia civil"
        ]
    },
    "Jorge Ponce": {
        name: "Jorge Ponce",
        origin: "La Revuelta",
        description: "Un presentador de televisión que ha encontrado en la magia la forma perfecta de causar el caos. Su obsesión por el desorden y su sonrisa sospechosa ocultan un plan para que los niños nunca se vayan a la cama.",
        distinctiveTraits: [
            "Lleva zapatillas de deporte",
            "Siempre tiene una sonrisa sospechosa",
            "Deja polvo mágico por donde pasa"
        ],
        motivation: "Cree que la hora de irse a la cama es una conspiración y está decidido a demostrarlo, incluso si eso significa secuestrar al Hombre Mágico y causar el caos en La Revuelta.",
        skills: [
            "Experto en causar el caos",
            "Conocedor de trucos de magia",
            "Especialista en hacer que los niños se vuelvan salvajes"
        ]
    },
    "El Profesor": {
        name: "El Profesor",
        origin: "La Casa de Papel",
        description: "Un genio de la historia que ha encontrado en los monumentos antiguos la clave para su próximo atraco. Su conocimiento de la historia y su mente brillante le han permitido descubrir que los monumentos esconden un tesoro histórico.",
        distinctiveTraits: [
            "Lleva un traje rojo",
            "Siempre tiene un plan",
            "Deja pistas históricas por donde pasa"
        ],
        motivation: "Ha descubierto que los monumentos antiguos esconden un tesoro histórico que podría financiar su próximo atraco. Sigue un patrón de robos que le llevará a encontrar el botín más grande de su vida.",
        skills: [
            "Experto en historia",
            "Conocedor de monumentos antiguos",
            "Especialista en planes perfectos"
        ]
    },
    "Dr. Jekyll": {
        name: "Dr. Jekyll",
        origin: "El Extraño Caso del Dr. Jekyll y Mr. Hyde",
        description: "Un científico loco que ha encontrado en la química la forma de transformar la realidad. Su experimento con una poción mágica ha desatado el caos en el laboratorio.",
        distinctiveTraits: [
            "Lleva una bata de laboratorio",
            "Siempre tiene una poción en la mano",
            "Deja manchas de poción por donde pasa"
        ],
        motivation: "Cree que su poción mágica puede transformar la realidad y está dispuesto a probarla en cualquier cosa, incluso si eso significa causar el caos en el laboratorio.",
        skills: [
            "Experto en química",
            "Conocedor de pociones mágicas",
            "Especialista en transformaciones"
        ]
    },
    "El Falsificador": {
        name: "El Falsificador",
        origin: "La Casa de Papel",
        description: "Un artista genial que ha encontrado en el arte la forma perfecta de engañar al mundo. Su habilidad para copiar obras maestras le ha permitido crear falsificaciones perfectas.",
        distinctiveTraits: [
            "Lleva una boina de artista",
            "Siempre tiene un pincel",
            "Deja manchas de pintura por donde pasa"
        ],
        motivation: "Cree que el arte es una ilusión y está decidido a demostrarlo, incluso si eso significa crear falsificaciones perfectas de las obras más famosas.",
        skills: [
            "Experto en arte",
            "Conocedor de técnicas de falsificación",
            "Especialista en copiar obras maestras"
        ]
    },
    "El Hacker": {
        name: "El Hacker",
        origin: "Mr. Robot",
        description: "Un genio de la informática que ha encontrado en el código la forma de hackear la realidad. Su habilidad para programar le ha permitido crear un virus que puede transformar el mundo digital.",
        distinctiveTraits: [
            "Lleva una sudadera con capucha",
            "Siempre tiene un portátil",
            "Deja código por donde pasa"
        ],
        motivation: "Cree que el mundo digital necesita ser hackeado y está decidido a demostrarlo, incluso si eso significa crear un virus que puede transformar la realidad.",
        skills: [
            "Experto en programación",
            "Conocedor de seguridad informática",
            "Especialista en hackear sistemas"
        ]
    },
    "La Influencer": {
        name: "La Influencer",
        origin: "Black Mirror",
        description: "Una estrella de las redes sociales que ha encontrado en los filtros la forma de transformar la realidad. Su obsesión por los likes le ha llevado a crear un mundo perfecto en Instagram.",
        distinctiveTraits: [
            "Lleva ropa de marca",
            "Siempre tiene un móvil",
            "Deja hashtags por donde pasa"
        ],
        motivation: "Cree que los likes son lo más importante y está decidida a conseguirlos, incluso si eso significa crear un mundo falso en las redes sociales.",
        skills: [
            "Experta en redes sociales",
            "Conocedora de filtros",
            "Especialista en crear contenido viral"
        ]
    }
};

// Variable global para el sospechoso seleccionado
window.selectedSuspect = window.selectedSuspect || null;

// Función para renderizar los sospechosos en el selector
function renderSuspects() {
    const suspectsSelector = document.getElementById('suspectsSelector');
    if (!suspectsSelector) return;

    suspectsSelector.innerHTML = '';
    const selectedCriminal = document.getElementById('criminalSelect')?.value;
    let correctSuspect = null;
    if (window.showColorHints && selectedCriminal && window.cases && window.cases[selectedCriminal] && window.cases[selectedCriminal].culpable) {
        correctSuspect = window.cases[selectedCriminal].culpable;
    }
    Object.values(suspects).forEach(suspect => {
        const suspectElement = document.createElement('div');
        suspectElement.className = 'suspect-card';
        if (window.showColorHints && correctSuspect && suspect.name === correctSuspect) {
            suspectElement.classList.add('is-correct-suspect');
        }
        suspectElement.innerHTML = `
            <div class="suspect-image" style="background-image: url('assets/suspects/${suspect.name.toLowerCase().replace(' ', '-')}.jpg')">
                <div class="suspect-name">${suspect.name}</div>
            </div>
        `;
        // Marcar si es el seleccionado
        if (window.selectedSuspect === suspect.name) {
            suspectElement.classList.add('selected');
        }
        suspectElement.addEventListener('click', () => {
            document.querySelectorAll('.suspect-card').forEach(card => card.classList.remove('selected'));
            suspectElement.classList.add('selected');
            window.selectedSuspect = suspect.name;
            renderSuspects(); // Para actualizar la pegatina WANTED
        });
        suspectsSelector.appendChild(suspectElement);
    });
}

// Llamar a renderSuspects cuando se carga la página
document.addEventListener('DOMContentLoaded', renderSuspects);

// Función para mostrar el mensaje final con animaciones GSAP
function showFinalMessage(isCorrect) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'final-message';
    messageContainer.innerHTML = `
        <div class="message-content">
            <div class="message-icon">
                <img src="assets/icons/${isCorrect ? 'success' : 'fail'}.svg" alt="${isCorrect ? 'Éxito' : 'Fallo'}">
            </div>
            <h2 class="message-title">${isCorrect ? '¡Caso Resuelto!' : '¡Caso Fallido!'}</h2>
            <p class="message-text">${isCorrect ? 'Has encontrado al culpable. ¡Buen trabajo!' : 'El culpable ha escapado. ¡Inténtalo de nuevo!'}</p>
            <div class="message-details">
                <p>${isCorrect ? 'El culpable era ' + window.selectedSuspect : 'El culpable era ' + window.cases[window.selectedCriminal].culpable}</p>
                <p>${isCorrect ? '¡Has salvado el día!' : '¡Vuelve a intentarlo!'}</p>
            </div>
            <button class="close-message">Cerrar</button>
        </div>
    `;
    document.body.appendChild(messageContainer);

    // Animación de entrada del contenedor
    gsap.fromTo(messageContainer, 
        { 
            opacity: 0,
            scale: 0.8,
            y: 50,
            rotation: -5
        },
        { 
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        }
    );

    // Animación del icono
    gsap.fromTo(messageContainer.querySelector('.message-icon'), 
        { 
            opacity: 0,
            scale: 0,
            rotation: -180
        },
        { 
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: 0.2,
            ease: "back.out(1.7)"
        }
    );

    // Animación del título
    gsap.fromTo(messageContainer.querySelector('.message-title'), 
        { 
            opacity: 0,
            y: 30,
            scale: 0.8
        },
        { 
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            delay: 0.4,
            ease: "power2.out"
        }
    );

    // Animación del texto
    gsap.fromTo(messageContainer.querySelector('.message-text'), 
        { 
            opacity: 0,
            y: 20
        },
        { 
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.6,
            ease: "power2.out"
        }
    );

    // Animación de los detalles
    gsap.fromTo(messageContainer.querySelector('.message-details'), 
        { 
            opacity: 0,
            y: 20
        },
        { 
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.8,
            ease: "power2.out"
        }
    );

    // Animación del botón
    gsap.fromTo(messageContainer.querySelector('.close-message'), 
        { 
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        { 
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            delay: 1,
            ease: "elastic.out(1, 0.3)"
        }
    );

    // Efecto de brillo en el botón
    gsap.to(messageContainer.querySelector('.close-message'), {
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Cerrar mensaje
    messageContainer.querySelector('.close-message').addEventListener('click', () => {
        // Animación de salida
        gsap.to(messageContainer, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            rotation: 5,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => messageContainer.remove()
        });
    });
}

// Modificar la función existente para usar el nuevo mensaje
function checkSuspect() {
    if (!window.selectedSuspect || !window.cases || !window.cases[window.selectedCriminal]) return;
    
    const isCorrect = window.selectedSuspect === window.cases[window.selectedCriminal].culpable;
    showFinalMessage(isCorrect);
} 