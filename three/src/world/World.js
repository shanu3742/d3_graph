import { createCamera } from "./component/camera"
import { createCube } from "./component/cube"
import { createScene } from "./component/scene"
import { createRendrer } from "./system/renderer"
import { Resizer } from "./system/Resize"

class World {
    #container //private 
    #scene
    #camera
    #renderer
    #cube
    constructor(container){
        this.#container= container;
        // Select the canvas element within that container
        const canvas = container.querySelector('canvas');
        this.#scene = createScene();
        this.#camera = createCamera(canvas);
        this.#renderer = createRendrer(canvas);
        this.#cube = createCube();
        this.#scene.add(this.#cube)
        // this.#container.append(this.#renderer.domElement);
        const resizer = new Resizer(this.#container,this.#camera,this.#renderer)
    }
    rendrer(){
        this.#renderer.render(this.#scene,this.#camera)
     
    }

}

export {World}