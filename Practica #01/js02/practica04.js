const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../imagenes/espacio.jpg', function(texture){
    scene.background = texture;
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
 
const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );
camera.position.z = 40;


function animate() {

	requestAnimationFrame( animate );
    plane.rotation.x += 0.1;
	plane.rotation.y += 0.1;

	renderer.render( scene, camera );
}
animate();
