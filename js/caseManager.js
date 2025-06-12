import { caseDetails } from '../data/caseDetails.js';

// Función para actualizar los detalles del caso
export function updateCaseDetails() {
    const selectedCriminal = document.getElementById('criminalSelect').value;
    const locationsGrid = document.querySelector('.locations-grid');
    const data = caseDetails[selectedCriminal];
    
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