const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../imagenes/cielo.jpg', function(texture){
    scene.background = texture;
});

{
    const color=0X000000;
    const near =0.1;
    const far = 50; 
    scene.fog =new THREE.Fog(color, near, far);
} 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
 
const geometry = new THREE.ConeGeometry( 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xf93ca6} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );
camera.position.z = 40;



function animate() {

	requestAnimationFrame( animate );
	cone.rotation.x += 0.2;
	cone.rotation.y += 1;

	renderer.render( scene, camera );
}
animate();
