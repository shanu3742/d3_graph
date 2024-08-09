import { data } from "./Assets/SampleData";
import { ScoreTrajectory } from "./src/data-visualization/graph/Score.Trajectory";



const main = () => {
  const graphArea = document.getElementById('graph-container');
  const width= window.innerWidth<500? window.innerWidth-100:400;
  const height = 400;
  const scoreTrajectory  = new ScoreTrajectory({selector:graphArea,data:data,width:width,height:height});


  // if resize is needed

   scoreTrajectory.onResize()

}

main()
