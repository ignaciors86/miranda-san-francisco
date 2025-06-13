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
    "Savid Duárez": {
        name: "Savid Duárez",
        origin: "Teatro Príncipe Gran Vía",
        description: "Un mago y cómico que ha encontrado en el humor la forma de causar el caos. Su obsesión por hacer reír a la gente le ha llevado a crear un plan para demostrar que el humor puede ser dañino.",
        distinctiveTraits: [
            "Lleva ropa de mago y un sombrero de copa",
            "Siempre tiene una baraja de cartas",
            "Deja chistes y bromas por donde pasa"
        ],
        motivation: "Cree que el humor no tiene límites y está decidido a demostrarlo, incluso si eso significa hacer bromas que pueden herir a otros.",
        skills: [
            "Experto en magia y comedia",
            "Conocedor de técnicas de manipulación",
            "Especialista en crear controversia"
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
    "El Hombre de Valor": {
        name: "El Hombre de Valor",
        origin: "Redes Sociales",
        description: "Un gurú de la autoayuda que ha encontrado en la toxicidad masculina la fórmula del éxito. Su canal de YouTube y sus redes sociales promueven una visión distorsionada de la masculinidad que está afectando a los jóvenes del colegio.",
        distinctiveTraits: [
            "Lleva ropa de marca y gafas de sol",
            "Siempre tiene un micrófono y una cámara",
            "Deja frases motivacionales tóxicas por donde pasa"
        ],
        motivation: "Cree que su visión de la masculinidad es la única correcta y está decidido a imponerla, incluso si eso significa crear conflictos y divisiones entre los estudiantes.",
        skills: [
            "Experto en manipulación de audiencias jóvenes",
            "Conocedor de técnicas de viralización",
            "Especialista en crear contenido polémico"
        ]
    },
    "La Manipuladora Digital": {
        name: "La Manipuladora Digital",
        origin: "Redes Sociales",
        description: "Una experta en psicología digital que ha encontrado en los grupos de mensajería la forma perfecta de manipular a los estudiantes. Su conocimiento de la dinámica social en línea le permite crear divisiones y conflictos sin dejar rastro.",
        distinctiveTraits: [
            "Lleva ropa elegante y gafas de sol",
            "Siempre tiene múltiples dispositivos",
            "Deja mensajes anónimos por donde pasa"
        ],
        motivation: "Cree que la popularidad en redes sociales es el poder definitivo y está dispuesta a manipular a cualquiera para mantener su estatus, incluso si eso significa causar daño emocional a otros.",
        skills: [
            "Experta en psicología digital",
            "Conocedora de dinámicas de grupo en línea",
            "Especialista en crear controversia viral"
        ]
    },
    "Miranda San Francisco": {
        name: "Miranda San Francisco",
        origin: "Museo de la Educación",
        description: "Una mente brillante que ha encontrado en el conocimiento la forma de desafiar al mundo. Su obsesión por los saberes le ha llevado a crear un plan para demostrar que el conocimiento debe ser compartido de manera diferente.",
        distinctiveTraits: [
            "Lleva una gabardina y una libreta llena de anotaciones",
            "Siempre tiene un objeto legendario",
            "Deja pistas de todas las materias por donde pasa"
        ],
        motivation: "Cree que el conocimiento debe ser compartido de una manera más interactiva y está decidida a demostrarlo, incluso si eso significa tomar prestados algunos objetos legendarios.",
        skills: [
            "Experta en todas las materias",
            "Conocedora de técnicas de enseñanza innovadoras",
            "Especialista en crear retos educativos"
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
            <button class="suspect-info-btn ${window.selectedSuspect === suspect.name ? 'selected' : ''}" aria-label="Seleccionar ${suspect.name}"><i class="fas fa-check"></i></button>
        `;
        
        // Marcar si es el seleccionado
        if (window.selectedSuspect === suspect.name) {
            suspectElement.classList.add('selected');
        }

        // Click en la imagen para mostrar info
        suspectElement.querySelector('.suspect-image').addEventListener('click', () => {
            showSuspectDetails(suspect);
        });

        // Click en el botón para seleccionar
        const infoBtn = suspectElement.querySelector('.suspect-info-btn');
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.suspect-card').forEach(card => {
                card.classList.remove('selected');
                card.querySelector('.suspect-info-btn').classList.remove('selected');
            });
            window.selectedSuspect = suspect.name;
            suspectElement.classList.add('selected');
            infoBtn.classList.add('selected');
        });

        // Añadir el elemento al contenedor
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