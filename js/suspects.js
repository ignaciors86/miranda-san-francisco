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