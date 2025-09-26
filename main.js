let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BufferGeometry();
let vertices = [];
for (let i = 0; i < 1000; i++) {
  vertices.push(Math.random()*10-5, Math.random()*10-5, Math.random()*10-5);
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

let material = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  vertexColors: false
});

let points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
