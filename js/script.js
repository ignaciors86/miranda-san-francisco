// Animación de los pasos al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.flow-step').forEach(step => {
    observer.observe(step);
});

// Variables globales
let currentTravel = 0;
let visitedLocations = new Set();

// Variable global para el modo de pistas de color
window.showColorHints = true;

// Función para mezclar un array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function updateCaseDetails() {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const locationsGrid = document.querySelector('.locations-grid');
    const data = cases[selectedCriminal].case;
    locationsGrid.innerHTML = '';
    const startingLocation = document.createElement('div');
    startingLocation.className = 'location-card';
    startingLocation.innerHTML = `
        <div class="location-header">
            <div class="location-icon">🏢</div>
            <h5>${data.startingLocation.name}</h5>
        </div>
        <p class="location-description">${data.startingLocation.description}</p>
        <div class="location-info">
            <p><strong>Ciudad:</strong> ${data.startingLocation.city}</p>
            <p><strong>País:</strong> ${data.startingLocation.country}</p>
            <p><strong>Año:</strong> ${data.startingLocation.year}</p>
        </div>
        <button class="travel-button" onclick="startTravel()">Iniciar Viaje</button>
    `;
    locationsGrid.appendChild(startingLocation);
    currentTravel = 0;
    visitedLocations.clear();
}

function startTravel() {
    const travelBtn = document.querySelector('.travel-button');
    if (travelBtn) travelBtn.style.display = 'none';
    showTravelOptions();
}

function showTravelOptions() {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal].case;
    const travel = data.travels[currentTravel];
    const locationsGrid = document.querySelector('.locations-grid');
    // No limpiar el historial
    // Filtrar lugares no visitados en este paso
    const availableLocations = travel.locations.filter(location => !visitedLocations.has(`${currentTravel}|${location.name}`));
    if (availableLocations.length === 0) return; // No mostrar nada si no quedan opciones
    const optionsSection = document.createElement('div');
    optionsSection.className = 'location-options';
    optionsSection.innerHTML = `
        <h6>¿A dónde irás ahora?</h6>
        <div class="options-container">
            <div class="options-grid">
                ${shuffleArray([...availableLocations]).map(location => `
                    <div class="location-option ${location.target ? 'correct' : 'incorrect'}" onclick="selectLocation('${location.name.replace(/'/g, "\\'")}')">
                        <h6>${location.name}</h6>
                        <p>${location.description}</p>
                        <div class="location-info">
                            <p><strong>Ciudad:</strong> ${location.city}</p>
                            <p><strong>País:</strong> ${location.country}</p>
                            <p><strong>Año:</strong> ${location.year}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    locationsGrid.appendChild(optionsSection);
    optionsSection.scrollIntoView({ behavior: 'smooth' });
}

window.selectLocation = function(locationName) {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal].case;
    const travel = data.travels[currentTravel];
    const location = travel.locations.find(loc => loc.name === locationName);
    if (!location) return;
    // Marcar como visitado
    visitedLocations.add(`${currentTravel}|${location.name}`);
    showLocation(location);
}

function showLocation(location) {
    const locationsGrid = document.querySelector('.locations-grid');
    // No limpiar el historial
    const locationElement = document.createElement('div');
    locationElement.className = `location-card ${location.target ? 'correct' : 'wrong'}`;
    let witnessesHTML = '';
    if (location.witnesses && Array.isArray(location.witnesses)) {
        witnessesHTML = `
            <div class="witnesses-container">
                <div class="witnesses">
                    ${location.witnesses.map((witness, idx) => `
                        <div class="witness-card">
                            <div class="witness-area"><i class="fas fa-map-marker-alt"></i> ${witness.area}</div>
                            <button class="clue-button" data-location="${location.name}" data-idx="${idx}" onclick="handleClueClick(this, '${location.name}')" aria-label="Ver pista">
                                <img src="assets/lightbulb.svg" alt="Pista" width="32" height="32" style="display:block;margin:auto;" />
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    locationElement.innerHTML = `
        <div class="location-header">
            <div class="location-icon">🏛️</div>
            <h4>${location.name}</h4>
        </div>
        <p class="location-description">${location.description}</p>
        <div class="location-info">
            <p><strong>Ciudad:</strong> ${location.city}</p>
            <p><strong>País:</strong> ${location.country}</p>
            <p><strong>Año:</strong> ${location.year}</p>
        </div>
        ${witnessesHTML}
        <div class="next-options-container" id="nextOptions-${location.name.replace(/'/g, "")}"></div>
    `;
    locationsGrid.appendChild(locationElement);
    locationElement.scrollIntoView({ behavior: 'smooth' });
    // Si es el correcto, permitir avanzar (pero solo tras abrir una pista)
    locationElement.dataset.pistaAbierta = 'false';
}

window.handleClueClick = function(btn, locationName) {
    // Mostrar la pista normalmente
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal].case;
    const travel = data.travels[currentTravel];
    const location = travel.locations.find(loc => loc.name === locationName);
    if (!location) return;
    const idx = parseInt(btn.getAttribute('data-idx'));
    const witness = location.witnesses[idx];
    showClueModal(witness);
    
    // Si es la primera vez que se abre una pista en este lugar, mostrar las opciones
    const locationCards = document.querySelectorAll('.location-card');
    let thisCard = null;
    locationCards.forEach(card => {
        if (card.querySelector('h4') && card.querySelector('h4').textContent === locationName) {
            thisCard = card;
        }
    });
    
    if (thisCard && thisCard.dataset.pistaAbierta !== 'true') {
        thisCard.dataset.pistaAbierta = 'true';
        // Mostrar las opciones de siguientes lugares SOLO si quedan lugares por visitar
        setTimeout(() => {
            if (location.target) {
                // Si es el correcto, avanzar tras abrir la pista
                setTimeout(() => {
                    currentTravel++;
                    const selectedCriminal = document.getElementById('criminalSelect').value;
                    if (currentTravel >= cases[selectedCriminal].case.travels.length) {
                        showCaseComplete();
                    } else {
                        showTravelOptions();
                    }
                }, 1200);
            } else {
                // Si es erróneo, mostrar opciones restantes en el contenedor de este lugar
                const nextOptions = thisCard.querySelector('.next-options-container');
                if (nextOptions) {
                    const travel = data.travels[currentTravel];
                    const availableLocations = travel.locations.filter(loc => !visitedLocations.has(`${currentTravel}|${loc.name}`));
                    if (availableLocations.length > 0) {
                        nextOptions.innerHTML = `
                            <div class="location-options">
                                <h6>¿A dónde irás ahora?</h6>
                                <div class="options-container">
                                    <div class="options-grid">
                                        ${shuffleArray([...availableLocations]).map(loc => `
                                            <div class="location-option ${loc.target ? 'correct' : 'incorrect'}" onclick="selectLocation('${loc.name.replace(/'/g, "\\'")}')">
                                                <h6>${loc.name}</h6>
                                                <p>${loc.description}</p>
                                                <div class="location-info">
                                                    <p><strong>Ciudad:</strong> ${loc.city}</p>
                                                    <p><strong>País:</strong> ${loc.country}</p>
                                                    <p><strong>Año:</strong> ${loc.year}</p>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                }
            }
        }, 300);
    }
    
    // Marcar el botón de pista como abierto
    btn.classList.add('opened');
}

function showCaseComplete() {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal];
    const nombreCulpable = data.culpable;

    const completeCard = document.createElement('div');
    completeCard.className = 'location-card complete';

    if (window.selectedSuspect === nombreCulpable) {
        completeCard.innerHTML = `
            <div class="location-header">
                <div class="location-icon">🎉</div>
                <h5>¡Caso Resuelto!</h5>
            </div>
            <p class="location-description">¡Felicidades! Has resuelto el caso y capturado al ladrón.</p>
            <button class="restart-button" onclick="restartCase()">Iniciar Nuevo Caso</button>
        `;
    } else {
        completeCard.innerHTML = `
            <div class="location-header">
                <div class="location-icon">❌</div>
                <h5>¡Has fallado!</h5>
            </div>
            <p class="location-description">No has seleccionado al sospechoso correcto. El verdadero culpable ha escapado...</p>
            <button class="restart-button" onclick="restartCase()">Intentar de nuevo</button>
        `;
    }

    const locationsGrid = document.querySelector('.locations-grid');
    locationsGrid.appendChild(completeCard);
    completeCard.scrollIntoView({ behavior: 'smooth' });
}

function restartCase() {
    currentTravel = 0;
    visitedLocations.clear(); // Limpiar las ubicaciones visitadas al reiniciar
    updateCaseDetails();
}

function fadeOutCurrentPage(callback) {
    const currentPage = document.querySelector('.page.active');
    if (currentPage) {
        currentPage.classList.add('fade-out');
        setTimeout(() => {
            currentPage.classList.remove('fade-out');
            if (callback) callback();
        }, 400); // Debe coincidir con la duración de la animación CSS
    } else {
        if (callback) callback();
    }
}

function goToStep(stepNumber) {
    // Activar la pestaña visualmente de inmediato
    document.querySelectorAll('.bookmark').forEach(bookmark => {
        bookmark.classList.remove('active');
        if (parseInt(bookmark.dataset.step) === stepNumber) {
            bookmark.classList.add('active');
        }
    });
    // Luego fade-out y cambio de contenido
    fadeOutCurrentPage(() => {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
            if (parseInt(page.dataset.step) === stepNumber) {
                page.classList.add('active');
            }
        });
        // Mostrar sospechosos si es la pestaña 5
        if (stepNumber === 5 && typeof renderSuspects === 'function') {
            renderSuspects();
        }
    });
}

function updateAdventureSteps() {
    fadeOutCurrentPage(() => {
        const selectedCriminal = document.getElementById('criminalSelect').value;
        const data = cases[selectedCriminal].adventure;
        if (data) {
            // Actualizar el contenido de las páginas
            for (let i = 1; i <= 5; i++) {
                const stepData = data[`step${i}`];
                if (stepData) {
                    document.getElementById(`step${i}Title`).textContent = stepData.title;
                    document.getElementById(`step${i}Description`).textContent = stepData.description;
                }
            }
            // Reiniciar al primer paso con animación
            goToStep(1);
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el libro
    updateAdventureSteps();
    updateCaseDetails();
    
    // Manejar clic en marcapáginas
    document.querySelectorAll('.bookmark').forEach(bookmark => {
        bookmark.addEventListener('click', () => {
            const stepNumber = parseInt(bookmark.dataset.step);
            goToStep(stepNumber);
        });
    });
    
    // Manejar cambio en el select
    const book = document.querySelector('.book');
    const criminalSelect = document.getElementById('criminalSelect');

    criminalSelect.addEventListener('change', () => {
        currentTravel = 0;
        visitedLocations.clear();

        // Clonar el dossier actual
        const bookClone = book.cloneNode(true);
        bookClone.classList.add('dossier-slide-out');
        bookClone.style.position = 'absolute';
        bookClone.style.top = book.offsetTop + 'px';
        bookClone.style.left = book.offsetLeft + 'px';
        bookClone.style.width = book.offsetWidth + 'px';
        bookClone.style.height = book.offsetHeight + 'px';
        bookClone.style.zIndex = 100;
        bookClone.style.margin = 0;
        bookClone.style.padding = 0;
        book.parentNode.appendChild(bookClone);

        // Preparar el dossier real para la entrada
        const selectedCriminal = criminalSelect.value;
        book.setAttribute('data-criminal', selectedCriminal);
        updateAdventureSteps();
        updateCaseDetails();
        book.classList.add('dossier-pre-enter');

        // Lanzar ambas animaciones a la vez
        setTimeout(() => {
            book.classList.remove('dossier-pre-enter');
            book.classList.add('dossier-slide-in');
        }, 10);

        setTimeout(() => {
            book.classList.remove('dossier-slide-in');
            if (bookClone.parentNode) bookClone.parentNode.removeChild(bookClone);
        }, 810);
    });

    // Mostrar detalles del caso al pulsar el botón
    const showCaseDetailsBtn = document.getElementById('showCaseDetailsBtn');
    if (showCaseDetailsBtn) {
        showCaseDetailsBtn.addEventListener('click', () => {
            startTravel();
            showCaseDetailsBtn.style.display = 'none';
        });
    }

    // Lógica del switch
    const toggleColorHints = document.getElementById('toggleColorHints');
    const colorHintsText = document.getElementById('colorHintsText');
    if (toggleColorHints && colorHintsText) {
        toggleColorHints.addEventListener('change', function() {
            window.showColorHints = this.checked;
            colorHintsText.textContent = this.checked ? 'Mostrar pistas de color' : 'Ocultar pistas de color';
            document.body.classList.toggle('no-hints', !this.checked);
            if (typeof renderCurrentOptions === 'function') renderCurrentOptions();
        });
    }

    // Mostrar el switch solo cuando el dossier esté visible
    const colorHintsSwitch = document.getElementById('colorHintsSwitch');
    if (colorHintsSwitch && book) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    colorHintsSwitch.classList.add('visible');
                } else {
                    colorHintsSwitch.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });
        observer.observe(book);
    }
});

// Crear función para mostrar modal de pista
function showClueModal(witness) {
    // Eliminar cualquier modal anterior
    const oldModal = document.getElementById('clue-modal');
    if (oldModal) oldModal.remove();
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'clue-modal';
    overlay.className = 'clue-modal-overlay';
    overlay.innerHTML = `
      <div class='clue-modal-card'>
        <button class='clue-modal-close' aria-label='Cerrar' onclick='document.getElementById("clue-modal").remove()'>×</button>
        <div class='witness-area'><i class='fas fa-map-marker-alt'></i> ${witness.area}</div>
        <div class='witness-id'><strong>${witness.name}</strong> <span class='witness-role'>- ${witness.role}</span></div>
        <div class='testimony'><i class='fas fa-quote-left'></i> ${witness.testimony}</div>
        <div class='clue-text'>${witness.clue}</div>
      </div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'), 10);
} 