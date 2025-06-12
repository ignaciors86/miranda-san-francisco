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
let currentLocation = 0;
let visitedLocations = new Set();
let currentStep = 1;

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
    
    // Limpiar el grid de ubicaciones
    locationsGrid.innerHTML = '';
    
    // Mostrar la ubicación inicial
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
}

function startTravel() {
    // Ocultar el botón 'Iniciar Viaje' si existe
    const travelBtn = document.querySelector('.travel-button');
    if (travelBtn) {
        travelBtn.style.display = 'none';
    }

    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal].case;
    
    if (!data || !data.travels || !data.travels[currentTravel]) {
        console.error('No hay datos de viaje disponibles');
        return;
    }

    const travel = data.travels[currentTravel];
    const location = travel.locations[currentLocation];
    
    if (location) {
        showLocation(location);
    } else {
        console.error('No hay ubicación disponible');
    }
}

function showLocation(location) {
    const locationsGrid = document.querySelector('.locations-grid');
    const locationElement = document.createElement('div');
    locationElement.className = 'location-card correct';
    
    let witnessesHTML = '';
    if (location.witnesses && Array.isArray(location.witnesses)) {
        witnessesHTML = `
            <div class="witnesses-container">
                <div class="witnesses">
                    ${location.witnesses.map(witness => `
                        <div class="witness-card">
                            <div class="witness-area"><i class="fas fa-map-marker-alt"></i> ${witness.area}</div>
                            <button class="clue-button" onclick="showClueModal(${JSON.stringify(witness).replace(/\"/g, '&quot;')})" aria-label="Ver pista">
                                <img src="assets/lightbulb.svg" alt="Pista" width="32" height="32" style="display:block;margin:auto;" />
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let optionsHTML = '';
    if (location.witnesses && location.witnesses[0] && location.witnesses[0].options) {
        const availableOptions = location.witnesses[0].options.filter(option => 
            !visitedLocations.has(`${option.name}-${option.city}-${option.country}`)
        );
        
        if (availableOptions.length > 0) {
            optionsHTML = `
                <div class="location-options">
                    <h6>¿A dónde irás ahora?</h6>
                    <div class="options-container">
                        <div class="options-grid">
                            ${shuffleArray([...availableOptions]).map(option => `
                                <div class="location-option ${option.isCorrect ? 'correct' : 'incorrect'}" onclick="selectLocation(this)">
                                    <h6>${option.name}</h6>
                                    <p>${option.description}</p>
                                    <div class="location-info">
                                        <p><strong>Ciudad:</strong> ${option.city}</p>
                                        <p><strong>País:</strong> ${option.country}</p>
                                        <p><strong>Año:</strong> ${option.year}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            optionsHTML = `
                <div class="location-options">
                    <h6>No hay más lugares disponibles para visitar</h6>
                </div>
            `;
        }
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
        ${optionsHTML}
    `;
    
    locationsGrid.appendChild(locationElement);
    visitedLocations.add(`${location.name}-${location.city}-${location.country}`);
    locationElement.scrollIntoView({ behavior: 'smooth' });
}

function showWrongLocation(optionElement) {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal];
    let travel = data.case.travels[currentTravel];
    let wrongLocation = null;
    let witnesses = [];
    
    // Obtener datos del destino seleccionado
    const destName = optionElement.querySelector('h6').textContent.replace(' (actual)', '').trim();
    const destCity = optionElement.querySelector('.location-info p:nth-child(1)').textContent.replace('Ciudad:', '').trim();
    const destCountry = optionElement.querySelector('.location-info p:nth-child(2)').textContent.replace('País:', '').trim();
    
    if (travel && travel.locations[currentLocation]) {
        const options = travel.locations[currentLocation].witnesses[0].options;
        wrongLocation = options.find(opt => opt.name === destName);
        if (wrongLocation && data.wrongLocations && data.wrongLocations[wrongLocation.name]) {
            witnesses = data.wrongLocations[wrongLocation.name].witnesses || [];
        }
    }
    
    const wrongLocationCard = document.createElement('div');
    wrongLocationCard.className = 'location-card wrong';
    
    let witnessesHTML = '';
    if (witnesses.length > 0) {
        witnessesHTML = `
            <div class="witnesses-container">
                <div class="witnesses">
                    ${witnesses.map(witness => `
                        <div class="witness-card">
                            <div class="witness-area"><i class="fas fa-map-marker-alt"></i> ${witness.area}</div>
                            <button class="clue-button" onclick="showClueModal(${JSON.stringify(witness).replace(/\"/g, '&quot;')})" aria-label="Ver pista">
                                <img src="assets/lightbulb.svg" alt="Pista" width="32" height="32" style="display:block;margin:auto;" />
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    wrongLocationCard.innerHTML = `
        <div class="location-header">
            <div class="location-icon">🏛️</div>
            <h4>${wrongLocation ? wrongLocation.name : 'Ubicación Incorrecta'}</h4>
        </div>
        <p class="location-description">${wrongLocation ? wrongLocation.description : 'Esta no es la ubicación correcta. Revisa las pistas nuevamente y elige otra opción.'}</p>
        <div class="location-info">
            <p><strong>Ciudad:</strong> ${wrongLocation ? wrongLocation.city : destCity}</p>
            <p><strong>País:</strong> ${wrongLocation ? wrongLocation.country : destCountry}</p>
            <p><strong>Año:</strong> ${wrongLocation ? wrongLocation.year : '2024'}</p>
        </div>
        ${witnessesHTML}
    `;
    
    const locationsGrid = document.querySelector('.locations-grid');
    locationsGrid.appendChild(wrongLocationCard);
    visitedLocations.add(`${destName}-${destCity}-${destCountry}`);
    wrongLocationCard.scrollIntoView({ behavior: 'smooth' });

    // Mostrar las opciones restantes
    if (travel && travel.locations[currentLocation] && travel.locations[currentLocation].witnesses[0].options) {
        const optionsSection = document.createElement('div');
        optionsSection.className = 'location-options';
        const availableOptions = travel.locations[currentLocation].witnesses[0].options.filter(option => 
            !visitedLocations.has(`${option.name}-${option.city}-${option.country}`)
        );
        
        if (availableOptions.length > 0) {
            optionsSection.innerHTML = `
                <h6>¿A dónde irás ahora?</h6>
                <div class="options-container">
                    <div class="options-grid">
                        ${shuffleArray([...availableOptions]).map(option => `
                            <div class="location-option ${option.isCorrect ? 'correct' : 'incorrect'}" onclick="selectLocation(this)">
                                <h6>${option.name}</h6>
                                <p>${option.description}</p>
                                <div class="location-info">
                                    <p><strong>Ciudad:</strong> ${option.city}</p>
                                    <p><strong>País:</strong> ${option.country}</p>
                                    <p><strong>Año:</strong> ${option.year}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            optionsSection.innerHTML = `
                <h6>No hay más lugares disponibles para visitar</h6>
            `;
        }
        locationsGrid.appendChild(optionsSection);
    }
}

function selectLocation(optionElement) {
    const isCorrect = optionElement.classList.contains('correct');
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal].case;
    const travel = data.travels[currentTravel];
    const currentLoc = travel.locations[currentLocation];
    
    // Obtener datos del destino
    const destName = optionElement.querySelector('h6').textContent.replace(' (actual)', '').trim();
    const destCity = optionElement.querySelector('.location-info p:nth-child(1)').textContent.replace('Ciudad:', '').trim();
    const destCountry = optionElement.querySelector('.location-info p:nth-child(2)').textContent.replace('País:', '').trim();
    
    // Si el destino es el lugar actual, no hacer nada
    if (
        destName === currentLoc.name &&
        destCity === currentLoc.city &&
        destCountry === currentLoc.country
    ) {
        return;
    }
    
    if (isCorrect) {
        currentLocation++;
        if (currentLocation >= data.travels[currentTravel].locations.length) {
            currentTravel++;
            currentLocation = 0;
            if (currentTravel >= data.travels.length) {
                // Caso completado
                showCaseComplete();
                return;
            }
        }
        startTravel();
    } else {
        showWrongLocation(optionElement);
    }
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
    currentLocation = 0;
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
        currentLocation = 0;
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