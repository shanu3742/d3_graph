import {Scene,PerspectiveCamera,BoxGeometry, MeshBasicMaterial,Color,WebGLRenderer,Mesh} from '../vendor/three/build/three.module'

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');


//create threejs scene 


const scene = new Scene();

//set the background of scene 
scene.background = new Color('skyblue');


//add camera to scene 
const fov =35  // aka field of view ;
const aspectRatio = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
const camera = new PerspectiveCamera(fov,aspectRatio,near,far);
camera.position.set(0, 0, 10);


// create a geometry
const geometry = new BoxGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial({color: new Color('white')});


// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);


// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();


// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight)

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio??1);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement)


// render, or 'create a still image', of the scene
renderer.render(scene, camera);