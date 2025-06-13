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
let foundClues = [];

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
            <p><i class="fas fa-map-marker-alt"></i> ${data.startingLocation.city ? data.startingLocation.city : ''}${data.startingLocation.city && data.startingLocation.country ? ', ' : ''}${data.startingLocation.country ? data.startingLocation.country : ''}</p>
            ${data.startingLocation.year && data.startingLocation.year !== 'null' ? `<p><strong>Año:</strong> ${data.startingLocation.year}</p>` : ''}
        </div>
        <button class="travel-button" id="showStartWitnessesBtn">Iniciar Viaje</button>
        <div id="startWitnessesContainer"></div>
        <div class="next-options-container" id="nextOptions-startingLocation"></div>
    `;
    locationsGrid.appendChild(startingLocation);
    currentTravel = 0;
    visitedLocations.clear();
    foundClues = [];

    // Añadir evento para mostrar testigos solo al pulsar el botón
    const showBtn = document.getElementById('showStartWitnessesBtn');
    if (showBtn && data.startingLocation.witnesses && Array.isArray(data.startingLocation.witnesses)) {
        showBtn.addEventListener('click', () => {
            const container = document.getElementById('startWitnessesContainer');
            if (container.innerHTML.trim() === '') {
                container.innerHTML = `
                    <div class=\"witnesses-container\">
                        <div class=\"witnesses\">
                            ${data.startingLocation.witnesses.map((witness, idx) => `
                                <div class=\"witness\" data-location=\"${data.startingLocation.name}\" data-idx=\"${idx}\" data-travel=\"-1\" onclick=\"handleClueClick(this, '${data.startingLocation.name}', -1)\" aria-label=\"Ver pista\">
                                    <div class=\"witness-bombilla\">
                                        <img src=\"assets/lightbulb.svg\" alt=\"Pista\" />
                                    </div>
                                    <div class=\"witness-area\"><i class=\"fas fa-map-marker-alt\"></i> ${witness.area}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            showBtn.style.display = 'none';
        });
    }

    // Lógica para mostrar destinos tras abrir una pista en startingLocation
    window.handleClueClick = function(btn, locationName, travelIdx) {
        // Mostrar la pista normalmente
        const selectedCriminal = document.getElementById('criminalSelect').value;
        const data = cases[selectedCriminal].case;
        let location, travel;
        if (travelIdx === -1) {
            location = data.startingLocation;
        } else {
            travel = data.travels[travelIdx !== undefined ? travelIdx : currentTravel];
            location = travel.locations.find(loc => loc.name === locationName);
        }
        if (!location) return;
        const idx = parseInt(btn.getAttribute('data-idx'));
        const witness = location.witnesses[idx];
        showClueOverlay(btn, witness);

        // Si la pista es de una localización correcta (target), añadirla al listado si no está
        if ((location.target || travelIdx === -1) && witness.clue) {
            if (!foundClues.some(c => c.text === witness.clue)) {
                foundClues.push({
                    text: witness.clue,
                    location: location.name,
                    step: travelIdx + 2 // +2 porque step 2 es Pistas
                });
                renderFoundClues();
            }
        }

        // Mostrar destinos solo la primera vez que se abre cualquier pista en startingLocation
        if (travelIdx === -1) {
            const thisCard = document.querySelector('.location-card');
            if (thisCard && thisCard.dataset.pistaAbierta !== 'true') {
                thisCard.dataset.pistaAbierta = 'true';
                setTimeout(() => {
                    const nextOptions = document.getElementById('nextOptions-startingLocation');
                    if (nextOptions) {
                        const travel = data.travels[0];
                        const availableLocations = travel.locations.filter(location => !visitedLocations.has(`0|${location.name}`));
                        if (availableLocations.length > 0) {
                            nextOptions.innerHTML = `
                                <div class=\"location-options\">
                                    <h6>¿A dónde irás ahora?</h6>
                                    <div class=\"options-container\">
                                        <div class=\"options-grid\">
                                            ${shuffleArray([...availableLocations]).map(loc => `
                                                <div class=\"location-option ${loc.target ? 'correct' : 'incorrect'}\" onclick=\"selectLocation('${loc.name.replace(/'/g, "\\'")}')\">
                                                    <h6>${loc.name}${loc.country ? ', ' + loc.country : ''}</h6>
                                                    <p>${loc.descriptionTarget || ""}</p>
                                                    <div class=\"location-info\">
                                                        <p><i class='fas fa-map-marker-alt'></i> ${loc.city ? loc.city : ''}</p>
                                                        ${loc.year && loc.year !== 'null' ? `<p><strong>Año:</strong> ${loc.year}</p>` : ''}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;
                        }
                    }
                }, 300);
            }
        } else {
            // Lógica normal para el resto de localizaciones (ya implementada en el resto del código)
            const locationCards = document.querySelectorAll('.location-card');
            let thisCard = null;
            locationCards.forEach(card => {
                if (card.querySelector('h4') && card.querySelector('h4').textContent === locationName) {
                    thisCard = card;
                }
            });
            if (thisCard && thisCard.dataset.pistaAbierta !== 'true') {
                thisCard.dataset.pistaAbierta = 'true';
                setTimeout(() => {
                    if (location.target) {
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
                        const nextOptions = thisCard.querySelector('.next-options-container');
                        if (nextOptions) {
                            const travel = data.travels[currentTravel];
                            const availableLocations = travel.locations.filter(loc => !visitedLocations.has(`${currentTravel}|${loc.name}`));
                            if (availableLocations.length > 0) {
                                nextOptions.innerHTML = `
                                    <div class=\"location-options\">
                                        <h6>¿A dónde irás ahora?</h6>
                                        <div class=\"options-container\">
                                            <div class=\"options-grid\">
                                                ${shuffleArray([...availableLocations]).map(loc => `
                                                    <div class=\"location-option ${loc.target ? 'correct' : 'incorrect'}\" onclick=\"selectLocation('${loc.name.replace(/'/g, "\\'")}')\">
                                                        <h6>${loc.name}${loc.country ? ', ' + loc.country : ''}</h6>
                                                        <p>${loc.descriptionTarget || ""}</p>
                                                        <div class=\"location-info\">
                                                            <p><i class='fas fa-map-marker-alt'></i> ${loc.city ? loc.city : ''}</p>
                                                            ${loc.year && loc.year !== 'null' ? `<p><strong>Año:</strong> ${loc.year}</p>` : ''}
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
        }
        // Cambiar el estilo de la pista completa y la bombilla para indicar que ya se abrió
        btn.classList.add('opened');
        const bombilla = btn.querySelector('.witness-bombilla');
        if (bombilla) {
            bombilla.classList.add('opened');
        }
    }
    renderFoundClues();
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
                        <h6>${location.name}${location.country ? ', ' + location.country : ''}</h6>
                        <p>${location.descriptionTarget || ""}</p>
                        <div class="location-info">
                            <p><i class='fas fa-map-marker-alt'></i> ${location.city ? location.city : ''}</p>
                            ${location.year && location.year !== 'null' ? `<p><strong>Año:</strong> ${location.year}</p>` : ''}
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
    showLocation(location, currentTravel);
}

function showLocation(location, travelIdx = currentTravel) {
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
                        <div class="witness" data-location="${location.name}" data-idx="${idx}" data-travel="${travelIdx}" onclick="handleClueClick(this, '${location.name}', ${travelIdx})" aria-label="Ver pista">
                            <div class="witness-bombilla">
                                <img src="assets/lightbulb.svg" alt="Pista" />
                            </div>
                            <div class="witness-area"><i class="fas fa-map-marker-alt"></i> ${witness.area}</div>
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
            <p><i class="fas fa-map-marker-alt"></i> ${location.city ? location.city : ''}${location.city && location.country ? ', ' : ''}${location.country ? location.country : ''}</p>
            ${location.year && location.year !== 'null' ? `<p><strong>Año:</strong> ${location.year}</p>` : ''}
        </div>
        ${witnessesHTML}
        <div class="next-options-container" id="nextOptions-${location.name.replace(/'/g, "")}"></div>
    `;
    locationsGrid.appendChild(locationElement);
    locationElement.scrollIntoView({ behavior: 'smooth' });
    locationElement.dataset.pistaAbierta = 'false';
}

function showCaseComplete() {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const data = cases[selectedCriminal];
    const nombreCulpable = data.culpable;

    const completeCard = document.createElement('div');
    completeCard.className = 'location-card complete';

    if (window.selectedSuspect === nombreCulpable) {
        completeCard.classList.add('success');
        completeCard.innerHTML = `
            <div class="location-header">
                <div class="location-icon">🎉</div>
                <h5>¡Caso Resuelto!</h5>
            </div>
            <p class="location-description">¡Felicidades! Has resuelto el caso y capturado al ladrón.</p>
            <button class="restart-button" onclick="restartCase()">🔄 Reiniciar</button>
        `;
    } else {
        completeCard.classList.add('failure');
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

function animatePageHeight(callback) {
    const pagesContainer = document.querySelector('.pages');
    if (!pagesContainer) {
        if (callback) callback();
        return;
    }

    // Añadir clase de optimización para performance
    pagesContainer.classList.add('animating');
    
    // Obtener altura actual del contenido
    const currentHeight = pagesContainer.scrollHeight;
    
    // Establecer altura actual explícitamente
    pagesContainer.style.height = currentHeight + 'px';
    pagesContainer.style.overflow = 'hidden';
    
    // Animar a altura 0
    requestAnimationFrame(() => {
        pagesContainer.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        pagesContainer.style.height = '0px';
        
        setTimeout(() => {
            // Ejecutar callback para cambiar contenido
            if (callback) callback();
            
            // Obtener nueva altura después del cambio de contenido
            pagesContainer.style.height = 'auto';
            const newHeight = pagesContainer.scrollHeight;
            pagesContainer.style.height = '0px';
            
            // Animar a la nueva altura
            requestAnimationFrame(() => {
                pagesContainer.style.height = newHeight + 'px';
                
                setTimeout(() => {
                    // Limpiar estilos después de la animación
                    pagesContainer.style.height = '';
                    pagesContainer.style.overflow = '';
                    pagesContainer.style.transition = '';
                    pagesContainer.classList.remove('animating');
                }, 300);
                
                // Scroll suave hacia abajo DESPUÉS de que todo esté completamente terminado
                setTimeout(() => {
                    // Hacer scroll hasta el final completo de la página
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth'
                    });
                }, 650); // 300ms contracción + 300ms expansión + 50ms buffer
            });
        }, 300);
    });
}

function goToStep(stepNumber) {
    // Activar la pestaña visualmente de inmediato
    document.querySelectorAll('.bookmark').forEach(bookmark => {
        bookmark.classList.remove('active');
        if (parseInt(bookmark.dataset.step) === stepNumber) {
            bookmark.classList.add('active');
        }
    });
    
    // Animar altura y cambio de contenido
    animatePageHeight(() => {
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
    animatePageHeight(() => {
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
            // Activar la primera pestaña sin animación adicional
            document.querySelectorAll('.bookmark').forEach(bookmark => {
                bookmark.classList.remove('active');
                if (parseInt(bookmark.dataset.step) === 1) {
                    bookmark.classList.add('active');
                }
            });
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
                if (parseInt(page.dataset.step) === 1) {
                    page.classList.add('active');
                }
            });
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar animaciones de vehículos
    if (window.animateTransports) {
        window.animateTransports();
    }

    // Animación hero y título aventura educativa
    if (window.gsap) {
        gsap.set('.main-title', {opacity: 0, y: 60, scale: 0.95});
        gsap.set('.impact-subtitle', {opacity: 0, y: 40});
        gsap.set('.fancy-video', {opacity: 0, y: 40, scale: 0.95});
        gsap.set('.hero-plane', {opacity: 0, x: 80, scale: 0.7});
        gsap.set('.hero-glow', {opacity: 0});
        gsap.set('.gradient-title', {opacity: 0, y: 40, scale: 0.95});

        gsap.timeline()
            .to('.main-title', {opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out'})
            .to('.impact-subtitle', {opacity: 1, y: 0, duration: 0.7, ease: 'expo.out'}, '-=0.5')
            .to('.fancy-video', {opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'expo.out'}, '-=0.4')
            .to('.hero-glow', {opacity: 1, duration: 1.2, ease: 'power2.out'}, '-=0.7')
            .to('.hero-plane', {opacity: 1, x: 0, scale: 1, duration: 1, ease: 'back.out(1.7)'}, '-=0.8')
            .to('.gradient-title', {opacity: 1, y: 0, scale: 1, duration: 1, ease: 'expo.out'}, '-=0.7');
    }

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

        // Función para animar pestañas al cerrar
        function animateTabsOut(callback) {
            const bookmarkContainer = book.querySelector('.bookmark-container');
            const bookmarks = book.querySelectorAll('.bookmark');
            
            if (!bookmarkContainer || bookmarks.length === 0) {
                callback();
                return;
            }

            const tl = gsap.timeline({
                onComplete: callback
            });

            // Crear orden aleatorio para las pestañas (más rápido en cierre)
            const shuffledBookmarks = [...bookmarks].sort(() => Math.random() - 0.5);
            
            // Primero animar pestañas desapareciendo hacia abajo (detrás de la línea) en orden aleatorio
            shuffledBookmarks.forEach((bookmark, index) => {
                tl.to(bookmark, {
                    y: 60,
                    opacity: 0,
                    scale: 0.7,
                    rotateX: 90,
                    duration: 0.2,
                    ease: "back.in(2)"
                }, index * 0.05);
            });

            // Después animar la línea (::before) deslizándose hacia la izquierda
            tl.to(bookmarkContainer, {
                x: -window.innerWidth - 100,
                duration: 0.4,
                ease: "power3.in"
            }, "-=0.15");
        }

        // Función para animar pestañas al abrir
        function animateTabsIn() {
            const bookmarkContainer = book.querySelector('.bookmark-container');
            const bookmarks = book.querySelectorAll('.bookmark');
            
            if (!bookmarkContainer || bookmarks.length === 0) {
                return;
            }

            // Preparar estado inicial: línea fuera de pantalla, pestañas ocultas debajo
            gsap.set(bookmarkContainer, { x: -window.innerWidth - 100 });
            gsap.set(bookmarks, { y: 60, opacity: 0, scale: 0.7, rotateX: 90 });

            const tl = gsap.timeline();

            // Primero: línea entra deslizándose desde la izquierda
            tl.to(bookmarkContainer, {
                x: 0,
                duration: 0.6,
                ease: "power3.out"
            });

            // Después: pestañas aparecen en orden aleatorio asomando desde abajo (detrás de la línea)
            const shuffledBookmarks = [...bookmarks].sort(() => Math.random() - 0.5);
            shuffledBookmarks.forEach((bookmark, index) => {
                tl.to(bookmark, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    duration: 0.4,
                    ease: "back.out(1.4)"
                }, 0.4 + (index * 0.1));
            });
        }

        // Ejecutar animación de cierre primero
        animateTabsOut(() => {
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
                
                // Animar pestañas después de que empiece la entrada del dossier
                setTimeout(() => {
                    animateTabsIn();
                }, 100);
            }, 10);

            setTimeout(() => {
                book.classList.remove('dossier-slide-in');
                if (bookClone.parentNode) bookClone.parentNode.removeChild(bookClone);
                updateAdventureGradientVars();
            }, 810);
        });
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
    const adventureSection = document.querySelector('.adventure.bg-animated-gradient');
    if (colorHintsSwitch && adventureSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    colorHintsSwitch.classList.add('visible');
                } else {
                    colorHintsSwitch.classList.remove('visible');
                }
            });
        }, { threshold: 0.1 });
        observer.observe(adventureSection);
    }

    // Control de música de fondo
    const audio = document.getElementById('bgMusic');
    const audioBtn = document.getElementById('audioControlBtn');
    const audioIcon = document.getElementById('audioIcon');
    let isPlaying = false;

    if (audio && audioBtn && audioIcon) {
        // Precargar el audio
        audio.load();

        audioBtn.addEventListener('click', async () => {
            try {
                if (isPlaying) {
                    await audio.pause();
                    audioIcon.textContent = '▶';
                } else {
                    await audio.play();
                    audioIcon.textContent = '⏸';
                }
                isPlaying = !isPlaying;
            } catch (error) {
                console.error('Error al reproducir el audio:', error);
            }
        });

        // Manejar eventos del audio
        audio.addEventListener('ended', () => {
            isPlaying = false;
            audioIcon.textContent = '▶';
        });

        audio.addEventListener('pause', () => {
            isPlaying = false;
            audioIcon.textContent = '▶';
        });

        audio.addEventListener('play', () => {
            isPlaying = true;
            audioIcon.textContent = '⏸';
        });

        // Manejar errores de audio
        audio.addEventListener('error', (e) => {
            console.error('Error en el audio:', e);
            audioIcon.textContent = '▶';
            isPlaying = false;
        });
    }

    function updateAdventureGradientVars() {
        if (adventureSection && book) {
            adventureSection.style.setProperty('--dossier-color', getComputedStyle(book).getPropertyValue('--dossier-color'));
            adventureSection.style.setProperty('--dossier-accent', getComputedStyle(book).getPropertyValue('--dossier-accent'));
        }
    }
});

// Crear función para mostrar overlay de pista
function showClueOverlay(witnessElement, witness) {
    // Verificar si ya existe un overlay en este elemento
    const existingOverlay = witnessElement.querySelector('.witness-overlay');
    if (existingOverlay) {
        return; // Ya está abierto
    }

    // Verificar si es la primera pista abierta en este paso
    const currentStepContainer = witnessElement.closest('.step');
    const isFirstClueInStep = !currentStepContainer || !currentStepContainer.querySelector('.witness.expanded');

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'witness-overlay';
    overlay.innerHTML = `
        <button class='witness-overlay-close' aria-label='Cerrar'>×</button>
        <div class='witness-overlay-content'>
            <div class='witness-area'><i class='fas fa-map-marker-alt'></i></div>
            <div class='witness-id'><strong>${witness.name}</strong></div>
            <div class='witness-role'>${witness.role}</div>
            <div class='testimony'>${witness.testimony}</div>
            <div class='clue-text'>${witness.clue}</div>
        </div>
    `;

    // Obtener elementos para animación
    const bombilla = witnessElement.querySelector('.witness-bombilla');
    const witnessArea = witnessElement.querySelector('.witness-area');
    
    // Obtener altura inicial del contenedor
    const initialHeight = witnessElement.offsetHeight;
    
    // Scroll suave hacia el elemento antes de expandir (solo si es la primera pista del paso)
    if (isFirstClueInStep) {
        witnessElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
    
    // Esperar un momento para que el scroll se complete antes de expandir (o ejecutar inmediatamente si no hay scroll)
    setTimeout(() => {
        // Crear timeline principal para animación secuenciada
        const tl = gsap.timeline();
        
        // Añadir al elemento de la pista
        witnessElement.appendChild(overlay);
        
        // Marcar como expandido
        witnessElement.classList.add('expanded');
        
        // Obtener altura final del contenedor
        const finalHeight = witnessElement.offsetHeight;
        
        // Secuencia de animación optimizada
        tl.set(witnessElement, { height: initialHeight })
          .set(overlay, { opacity: 0, y: 20 })
          
          // 1. Animar altura del contenedor elegantemente hacia automático
          .to(witnessElement, {
              duration: 1.0,
              height: "auto",
              ease: "power2.out",
              onUpdate: isFirstClueInStep ? () => {
                  witnessElement.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start',
                      inline: 'nearest'
                  });
              } : undefined
          })
          
          // 2. Mover bombilla a su posición final suavemente
          .to(bombilla, {
              duration: 0.8,
              x: 0,
              y: 0,
              ease: "power2.out"
          }, 0.2)
          
          // 3. Mantener texto área opaco y reposicionarlo
          .to(witnessArea, {
              duration: 0.6,
              opacity: 1,
              y: 0,
              ease: "power2.out"
          }, 0.4)
          
          // 4. Mostrar overlay con contenido
          .to(overlay, {
              duration: 1.0,
              opacity: 1,
              y: 0,
              ease: "power3.out"
          }, 0.6)
          
          // Scroll final si es necesario
          .call(() => {
              if (isFirstClueInStep) {
                  setTimeout(() => {
                      witnessElement.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'start'
                      });
                  }, 100);
              }
          });
        
    }, isFirstClueInStep ? 300 : 50); // Delay de 300ms si hay scroll, 50ms si no

    // Función para cerrar el overlay
    function closeOverlay() {
        // Obtener altura actual antes de cerrar
        const currentHeight = witnessElement.offsetHeight;
        
        // Animar el cierre del overlay y la reducción de altura (más lento y suave)
        const tl = gsap.timeline();
        
        tl.to(overlay, {
            duration: 0.8,
            opacity: 0,
            rotateY: 15,
            ease: "power2.in"
        })
        .to(witnessElement, {
            duration: 1.0,
            height: initialHeight,
            ease: "power2.inOut",
            onComplete: () => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                    // Quitar clase expanded
                    witnessElement.classList.remove('expanded');
                    // Volver a altura automática
                    gsap.set(witnessElement, { height: "auto" });
                }
            }
        }, "-=0.4"); // Solapar las animaciones para mayor fluidez
    }

    // Event listener para el botón de cerrar
    const closeBtn = overlay.querySelector('.witness-overlay-close');
    closeBtn.addEventListener('click', closeOverlay);

    // Prevenir que el clic en el overlay cierre la pista
    overlay.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Función para renderizar las pistas encontradas en la pestaña 2 (Pistas)
function renderFoundClues() {
    const page = document.querySelector('.page[data-step="2"] .step-content');
    if (!page) return;
    let html = '<h4>Pistas encontradas:</h4>';
    if (foundClues.length === 0) {
        html += '<p class="no-clues">Aún no has encontrado ninguna pista relevante.</p>';
    } else {
        html += '<ul class="clues-list">' + foundClues.map(clue => `<li><strong>${clue.location}:</strong> ${clue.text}</li>`).join('') + '</ul>';
    }
    page.innerHTML = html;
}

// Lógica mejorada para mostrar el switch solo en la sección de juego
// Reemplazar el observer de colorHintsSwitch por:
function updateColorHintsSwitchVisibility() {
    const colorHintsSwitch = document.getElementById('colorHintsSwitch');
    const adventureSection = document.querySelector('.adventure.bg-animated-gradient');
    if (!colorHintsSwitch || !adventureSection) return;
    const rect = adventureSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    colorHintsSwitch.classList.toggle('visible', inView);
}
window.addEventListener('scroll', updateColorHintsSwitchVisibility);
window.addEventListener('resize', updateColorHintsSwitchVisibility);
document.addEventListener('DOMContentLoaded', updateColorHintsSwitchVisibility); 