// const THREE = require('./three');

const width = 400;
const height = 400;
const canvas = document.getElementById('demo-canvas');


/* 核心3要素 */
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(
  -width / 2, width / 2, height / 2, -height / 2, -1000, 1000,
);


/* renderer */
renderer.setClearAlpha(new THREE.Color(0x000000, 1));
renderer.setSize(400, 400);


/* scene */
const triangleShape = new THREE.Shape();
triangleShape.moveTo(0, 100);
triangleShape.lineTo(-100, -100);
triangleShape.lineTo(100, -100);
triangleShape.lineTo(0, 100);

const geometry = new THREE.ShapeGeometry(triangleShape); // 几何体
const material = new THREE.MeshBasicMaterial({ // 材质
  color: 0xff0000,
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(geometry, material); // 类比：contex shader, fragment shader
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 1;
scene.add(mesh);


/* camera */
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;
camera.lookAt(new THREE.Vector3(0, 0, 1)); // 望向 (0, 0, 1)


/* animation */
let currentAngle = 0;
let lastTimestamp = Date.now();

function animate() {
  // 改变 currentAngle 的角度
  const now = Date.now();
  const duration = now - lastTimestamp;
  lastTimestamp = now;
  currentAngle = currentAngle + duration / 1000 * Math.PI;
}


/* render */
function render() {
  animate();
  mesh.rotation.set(0, currentAngle, 0);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
