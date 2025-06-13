function showSuspectDetails(suspect) {
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'suspect-details-modal';
    
    // Crear el contenido del modal
    modal.innerHTML = `
        <div class="suspect-details-content">
            <div class="suspect-details-header">
                <div class="suspect-details-image" style="background-image: url('assets/suspects/${suspect.name.toLowerCase().replace(' ', '-')}.jpg')"></div>
                <h2>${suspect.name}</h2>
                <p class="suspect-origin">${suspect.origin}</p>
            </div>
            <div class="suspect-details-body">
                <div class="suspect-section">
                    <h3>Descripción</h3>
                    <p>${suspect.description}</p>
                </div>
                <div class="suspect-section">
                    <h3>Rasgos Distintivos</h3>
                    <ul>
                        ${suspect.distinctiveTraits.map(trait => `<li>${trait}</li>`).join('')}
                    </ul>
                </div>
                <div class="suspect-section">
                    <h3>Motivación</h3>
                    <p>${suspect.motivation}</p>
                </div>
                <div class="suspect-section">
                    <h3>Habilidades</h3>
                    <ul>
                        ${suspect.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <button type="button" class="close-suspect-details">Cerrar</button>
        </div>
    `;

    // Añadir el modal al body
    document.body.appendChild(modal);

    const content = modal.querySelector('.suspect-details-content');

    // Animación de entrada
    gsap.set(content, { 
        opacity: 0,
        scale: 0.8,
        y: 50
    });

    gsap.to(modal, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
    });

    gsap.to(content, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "back.out(1.7)"
    });

    // Función para cerrar el modal
    const closeModal = () => {
        // Primero animamos el contenido
        gsap.to(content, {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                // Luego desvanecemos el overlay
                gsap.to(modal, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => {
                        modal.remove();
                        // Limpiar el event listener de Escape
                        document.removeEventListener('keydown', handleEscape);
                    }
                });
            }
        });
    };

    // Manejar el cierre del modal
    const closeButton = modal.querySelector('.close-suspect-details');
    if (closeButton) {
        closeButton.onclick = closeModal;
    }

    // Cerrar al hacer clic fuera del contenido
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };

    // Cerrar con la tecla Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };
    document.addEventListener('keydown', handleEscape);
} 