import {WebGLRenderer} from '../../../vendor/three/build/three.module'
const createRendrer = (canvas) => {
// create the renderer
const renderer = new WebGLRenderer({
    canvas:canvas
});
return renderer
}

export {createRendrer}