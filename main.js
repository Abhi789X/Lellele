const particles = new THREE.BufferGeometry();
const positions = [];
const colors = [];
const count = 5000;

for(let i = 0; i < count; i++){
    const r = Math.random() * 5;
    const angle = Math.random() * 2 * Math.PI;
    const spin = r * 1.5;

    positions.push(
        r * Math.cos(angle + spin), 
        (Math.random()-0.5)*0.2, 
        r * Math.sin(angle + spin)
    );

    colors.push(Math.random(), Math.random(), 1); // bluish galaxy
}

particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
particles.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });
const galaxy = new THREE.Points(particles, material);

scene.add(galaxy);

function animate() {
    requestAnimationFrame(animate);
    galaxy.rotation.y += 0.001; // slow rotation
    renderer.render(scene, camera);
}
animate();
