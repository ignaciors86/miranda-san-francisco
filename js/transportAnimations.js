function circularMotion(element, options) {
  const {
    centerX, centerY, radiusX, radiusY, speed, phase, irregularity = 0.08, rotate = false
  } = options;
  let t = phase;
  function animate() {
    // Irregularidad: suma un pequeño ruido senoidal
    const irrX = Math.sin(t * 2.3 + phase) * radiusX * irregularity;
    const irrY = Math.cos(t * 1.7 - phase) * radiusY * irregularity;
    const x = centerX + (radiusX + irrX) * Math.cos(t);
    const y = centerY + (radiusY + irrY) * Math.sin(t);
    gsap.set(element, {
      x: `${x}vw`,
      y: `${y}vh`,
      rotation: rotate ? (t * 180 / Math.PI) % 360 : 0
    });
    t += speed;
    requestAnimationFrame(animate);
  }
  animate();
}

window.animateTransports = function() {
  // Dimensiones base
  const vw = 100, vh = 100;
  // Avión
  const plane = document.querySelector('.hero-plane');
  if (plane) {
    circularMotion(plane, {
      centerX: 50, centerY: 25, radiusX: 32, radiusY: 16, speed: 0.008, phase: 0, irregularity: 0.12, rotate: true
    });
  }
  // Barco
  const boat = document.querySelector('.hero-boat');
  if (boat) {
    circularMotion(boat, {
      centerX: 50, centerY: 70, radiusX: 28, radiusY: 10, speed: 0.006, phase: 1, irregularity: 0.10, rotate: false
    });
  }
  // Tren
  const train = document.querySelector('.hero-train');
  if (train) {
    circularMotion(train, {
      centerX: 50, centerY: 55, radiusX: 22, radiusY: 7, speed: 0.007, phase: 2, irregularity: 0.09, rotate: false
    });
  }
  // Coche
  const car = document.querySelector('.hero-car');
  if (car) {
    circularMotion(car, {
      centerX: 50, centerY: 85, radiusX: 18, radiusY: 5, speed: 0.009, phase: 3, irregularity: 0.13, rotate: false
    });
  }
} 