const suspects = {
    "Ruperta": {
        name: "Ruperta",
        origin: "Barrio Sésamo",
        description: "Una profesora de informática que ha encontrado en las redes sociales una forma de conectar con sus estudiantes. Su carácter dulce y didáctico oculta una mente brillante que ha descubierto patrones de comportamiento en línea que podrían ayudar a los niños a navegar de forma segura.",
        distinctiveTraits: [
            "Lleva una tablet educativa",
            "Siempre tiene un manual de seguridad digital",
            "Deja pistas sobre privacidad en línea por donde pasa"
        ],
        motivation: "Cree que ha descubierto un método para enseñar seguridad digital a través de las redes sociales y está dispuesta a demostrarlo, incluso si eso significa tomar prestados algunos datos de ejemplo.",
        skills: [
            "Experta en seguridad digital",
            "Conocedora de herramientas educativas en línea",
            "Especialista en hacer la tecnología divertida y segura"
        ]
    },
    "Don Pablo": {
        name: "Don Pablo",
        origin: "Cuéntame cómo pasó",
        description: "Un empresario sin escrúpulos que ha encontrado en las redes sociales la oportunidad perfecta para su última estafa. Tras el fracaso de su app educativa, ha ideado un plan para vender datos de niños a empresas de publicidad.",
        distinctiveTraits: [
            "Lleva ropa de marca y gafas de sol",
            "Siempre tiene un smartphone último modelo",
            "Deja anuncios personalizados por donde pasa"
        ],
        motivation: "Busca recuperar el dinero perdido en sus anteriores estafas y ha encontrado en los datos de los niños la excusa perfecta para engañar a nuevos inversores.",
        skills: [
            "Experto en publicidad dirigida",
            "Conocedor de privacidad en línea",
            "Especialista en engañar a usuarios jóvenes"
        ]
    },
    "Curro Jiménez": {
        name: "Curro Jiménez",
        origin: "Curro Jiménez",
        description: "Un hacker ético que ha encontrado en los grupos de mensajería la clave para proteger a los niños. Su conocimiento de la seguridad digital y su astucia le han permitido descubrir patrones de ciberacoso.",
        distinctiveTraits: [
            "Lleva una sudadera con capucha y auriculares",
            "Siempre tiene un portátil de seguridad",
            "Deja pistas sobre ciberacoso por donde pasa"
        ],
        motivation: "Ha descubierto que los grupos de mensajería esconden patrones de ciberacoso que podría ayudar a prevenir. Sigue un patrón de investigación que le llevará a encontrar la solución más efectiva.",
        skills: [
            "Experto en seguridad en línea",
            "Conocedor de patrones de ciberacoso",
            "Especialista en proteger a usuarios jóvenes"
        ]
    },
    "Jorge Ponce": {
        name: "Jorge Ponce",
        origin: "La Revuelta",
        description: "Un influencer que ha encontrado en la magia de los filtros la forma perfecta de causar el caos. Su obsesión por los likes y su sonrisa sospechosa ocultan un plan para que los niños nunca se desconecten.",
        distinctiveTraits: [
            "Lleva ropa de marca y un anillo de luz",
            "Siempre tiene un trípode para selfies",
            "Deja hashtags por donde pasa"
        ],
        motivation: "Cree que la desconexión digital es una conspiración y está decidido a demostrarlo, incluso si eso significa crear contenido adictivo para niños.",
        skills: [
            "Experto en contenido viral",
            "Conocedor de tendencias digitales",
            "Especialista en crear adicción a las redes"
        ]
    },
    "El Profesor": {
        name: "El Profesor",
        origin: "La Casa de Papel",
        description: "Un genio de la programación que ha encontrado en los videojuegos la clave para su próximo plan. Su conocimiento de la gamificación y su mente brillante le han permitido descubrir que los juegos pueden ser educativos.",
        distinctiveTraits: [
            "Lleva una camiseta de programación",
            "Siempre tiene un plan de gamificación",
            "Deja pistas sobre programación por donde pasa"
        ],
        motivation: "Ha descubierto que los videojuegos pueden ser una herramienta educativa poderosa y está decidido a demostrarlo, incluso si eso significa hackear algunos juegos populares.",
        skills: [
            "Experto en programación educativa",
            "Conocedor de gamificación",
            "Especialista en hacer el aprendizaje divertido"
        ]
    },
    "Dr. Jekyll": {
        name: "Dr. Jekyll",
        origin: "El Extraño Caso del Dr. Jekyll y Mr. Hyde",
        description: "Un científico loco que ha encontrado en la inteligencia artificial la forma de transformar la educación. Su experimento con un algoritmo de aprendizaje ha desatado el caos en las aulas digitales.",
        distinctiveTraits: [
            "Lleva una bata de laboratorio digital",
            "Siempre tiene un algoritmo en desarrollo",
            "Deja código por donde pasa"
        ],
        motivation: "Cree que su algoritmo de IA puede revolucionar la educación y está dispuesto a probarlo en cualquier plataforma, incluso si eso significa causar el caos en las aulas digitales.",
        skills: [
            "Experto en IA educativa",
            "Conocedor de algoritmos de aprendizaje",
            "Especialista en transformar la educación digital"
        ]
    },
    "El Falsificador": {
        name: "El Falsificador",
        origin: "La Casa de Papel",
        description: "Un artista digital que ha encontrado en los deepfakes la forma perfecta de engañar al mundo. Su habilidad para crear contenido falso le ha permitido crear noticias falsas perfectas.",
        distinctiveTraits: [
            "Lleva una tablet de diseño",
            "Siempre tiene un software de edición",
            "Deja deepfakes por donde pasa"
        ],
        motivation: "Cree que los deepfakes son un arte y está decidido a demostrarlo, incluso si eso significa crear contenido falso que pueda confundir a los niños.",
        skills: [
            "Experto en edición digital",
            "Conocedor de deepfakes",
            "Especialista en crear contenido falso"
        ]
    },
    "El Hacker": {
        name: "El Hacker",
        origin: "Mr. Robot",
        description: "Un genio de la ciberseguridad que ha encontrado en el código la forma de proteger a los niños. Su habilidad para programar le ha permitido crear herramientas de seguridad para menores.",
        distinctiveTraits: [
            "Lleva una sudadera con capucha",
            "Siempre tiene un portátil de seguridad",
            "Deja herramientas de protección por donde pasa"
        ],
        motivation: "Cree que la seguridad digital es fundamental para los niños y está decidido a demostrarlo, incluso si eso significa hackear sistemas para exponer vulnerabilidades.",
        skills: [
            "Experto en ciberseguridad",
            "Conocedor de protección infantil",
            "Especialista en herramientas de seguridad"
        ]
    },
    "La Influencer": {
        name: "La Influencer",
        origin: "Black Mirror",
        description: "Una estrella de las redes sociales que ha encontrado en los filtros la forma de transformar la realidad. Su obsesión por los likes le ha llevado a crear un mundo perfecto en Instagram que puede ser dañino para los niños.",
        distinctiveTraits: [
            "Lleva ropa de marca y un anillo de luz",
            "Siempre tiene un smartphone",
            "Deja filtros por donde pasa"
        ],
        motivation: "Cree que la imagen perfecta es lo más importante y está decidida a conseguirlo, incluso si eso significa crear expectativas irreales para los niños.",
        skills: [
            "Experta en redes sociales",
            "Conocedora de filtros y edición",
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
            showSuspectDetails(suspect); // Mostrar los detalles del sospechoso
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

// Función para mostrar los detalles del sospechoso
function showSuspectDetails(suspect) {
    // Implementa la lógica para mostrar los detalles del sospechoso aquí
    console.log("Detalles del sospechoso:", suspect);
} 