import {WebGLRenderer} from '../../../vendor/three/build/three.module'
const createRendrer = (canvas) => {
// create the renderer
const renderer = new WebGLRenderer({
    canvas:canvas
});

// set anti-aliasing
// renderer.physicallyCorrectLights = true;
// renderer.antialias = true;
return renderer
}

export {createRendrer}