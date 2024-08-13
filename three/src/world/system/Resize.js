const setSize = (container, camera, renderer) => {

  camera.aspect = container.clientWidth/container.clientHeight;
  camera.updateProjectionMatrix();
   // update the size of the renderer AND the canvas
   renderer.setSize(container.clientWidth, container.clientHeight);
   renderer.setPixelRatio(window.devicePixelRatio);

}


class Resizer {
    constructor(container, camera, renderer) {
    // set initial size
    setSize(container, camera, renderer);


    window.addEventListener("resize", () => {
      // set the size again if a resize occurs
      setSize(container, camera, renderer);


      //create a hooks that's triggred when every resize event get fired 

      this.onResize();

    });
    }

    // we will onResize hooks where Rezier class used
    //  so what ever neeedful change need to do in that
    //   component with the help of this hook we can achive
    onResize(){}


    
  }


  export {Resizer}