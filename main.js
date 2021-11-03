//LOADING
const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('/texture/normal map.jpeg')

//GUI
let kendali = new Object();
kendali.x = 0.9;
kendali.y = 0.9;
kendali.z = 1;
//let gui = new dat.GUI();
//gui.add(kendali, "x");
//gui.add(kendali, "y");
//gui.add(kendali, "z");

let kendali1 = new Object();
kendali1.x = -1.3;
kendali1.y = 0.9;
kendali1.z = 0.1;
//gui.add(kendali1, "x");
//gui.add(kendali1, "y");
//gui.add(kendali1, "z");

let kendali2 = new Object();
kendali2.x = 1;
kendali2.y = -1.35;
kendali2.z = 1.3;
//gui.add(kendali2, "x");
//gui.add(kendali2, "y");
//gui.add(kendali2, "z");

//SCENE
const scene = new THREE.Scene();

//CAMERA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
scene.add(camera)

/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//RENDERER
const renderer = new THREE.WebGLRenderer({
    alpha: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//OBJECTS
const geometry = new THREE.SphereBufferGeometry(1, 64, 64)
const geometry1 = new THREE.BoxGeometry();
const geometry2 = new THREE.TorusKnotGeometry( 7, 0.6, 112, 14, 4, 7 );
const geometry3 = new THREE.BoxGeometry();


//MATERIALS
const material = new THREE.MeshStandardMaterial({antialias: true})
material.metalness = 0.7
material.roughness = 0.2
material.normalMap = normalTexture;
material.color = new THREE.Color(0x292929)
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const material1 = new THREE.MeshStandardMaterial();
material1.metalness = 0.7
material1.roughness = 0.2
material1.normalMap = normalTexture;
material1.color = new THREE.Color(0x292929)
const cube1 = new THREE.Mesh( geometry1, material1 );
cube1.position.x = 2;
cube1.position.y = 1;
cube1.position.z = 2;
scene.add( cube1 );

const material2 = new THREE.MeshStandardMaterial({antialias: true});
material2.metalness = 0.7
material2.roughness = 0.2
material2.normalMap = normalTexture;
material2.color = new THREE.Color(0x292929)
const cube2 = new THREE.Mesh( geometry2, material2 );
cube2.position.x = 0;
cube2.position.y = 0;
cube2.position.z = -2;
scene.add( cube2 );

const material3 = new THREE.MeshStandardMaterial({antialias: true});
material3.metalness = 0.7
material3.roughness = 0.2
material3.normalMap = normalTexture;
material3.color = new THREE.Color(0x292929)
const cube3 = new THREE.Mesh( geometry3, material3 );
cube3.position.x = -4;
cube3.position.y = -2
;
cube3.position.z = -2;
scene.add( cube3 );

// Lights

const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

//const sphereSize = .1;
//const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
//scene.add( pointLightHelper );

const pointLight1 = new THREE.PointLight(0xff0000, 2)
pointLight1.position.x = -1.5
pointLight1.position.y = -1.4
pointLight1.position.z = 1.2
scene.add(pointLight1)

//const sphereSize1 = .1;
//const pointLightHelper1 = new THREE.PointLightHelper( pointLight1, sphereSize );
//scene.add( pointLightHelper1 );

const pointLight2 = new THREE.PointLight(0x0000ff, 3)
pointLight2.position.x = -1.5
pointLight2.position.y = -1.4
pointLight2.position.z = 1.2
scene.add(pointLight2)

//const sphereSize2 = .1;
//const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
//scene.add( pointLightHelper2 );



//ANIMATE
/**
 * Animate
 */

 const clock = new THREE.Clock()

 const tick = () =>
 {
 
     const elapsedTime = clock.getElapsedTime()
 
     // Update objects
     cube.rotation.y = .8 * elapsedTime
     cube.rotation.z = .8 * elapsedTime

     cube1.rotation.z = .1 * elapsedTime
     cube1.rotation.x = .1 * elapsedTime

     cube2.rotation.y = .05 * elapsedTime
     cube2.rotation.z = .05 * elapsedTime

     cube3.rotation.y = .7 * elapsedTime
     cube3.rotation.x = .7 * elapsedTime


     pointLight.position.set(kendali.x, kendali.y, kendali.z);
     pointLight1.position.set(kendali1.x, kendali1.y, kendali1.z);
     pointLight2.position.set(kendali2.x, kendali2.y, kendali2.z);

     // Update Orbital Controls
     // controls.update()
 
     // Render
     renderer.render(scene, camera)
 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 }
 
 tick()