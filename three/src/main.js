import {Scene,PerspectiveCamera,BoxGeometry, MeshBasicMaterial,Color,WebGLRenderer,Mesh} from '../vendor/three/build/three.module'
import { World } from './world/World';

// Get a reference to the container element that will hold our scene





// add the mesh to the scene
//scene.add(cube);

// // create the renderer
// const renderer = new WebGLRenderer();


// // next, set the renderer to the same size as our container element
// renderer.setSize(container.clientWidth, container.clientHeight)

// // finally, set the pixel ratio so that our scene will look good on HiDPI displays
// renderer.setPixelRatio(window.devicePixelRatio??1);

// // add the automatically created <canvas> element to the page
// container.append(renderer.domElement)


// // render, or 'create a still image', of the scene
// renderer.render(scene, camera);


const main = () => {
const createWorld = () => {
    const container = document.querySelector('#scene-container');
    const world = new World(container);
    //render world
    world.rendrer();
}

//draw the world first time  
createWorld();


}

main()