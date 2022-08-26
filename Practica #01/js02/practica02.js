
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../imagenes/galaxia.jpg', function(texture){
    scene.background = texture;
});

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
 
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0x3cf9ce} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
camera.position.z = 30;


function animate() {

	requestAnimationFrame( animate );
    cylinder.rotation.x += 0.1;
	cylinder.rotation.y += 0.2;

	renderer.render( scene, camera );
}
animate();
