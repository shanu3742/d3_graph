
    // set the dimensions and margins of the graph
    const width = 450,
    height = 450,
    margin = {
      top:90,
      bottom:20,
      left:40,
      right:20
    };



// append the svg object to the div called 'my_dataviz'
const svg = d3.select("svg")
    .attr("width", width+margin.left+margin.right)
    .attr("height", height+margin.top+margin.bottom)
  .append("g")
  .attr('transform',`translate(${margin.left},${margin.top})`)
    

// Create dummy data
const data = [
  {
    name:'a',
    value:76.4
  },
  {
    name:'b',
    value:76.5
  },
  {
    name:'tk',
    value:76.6
  },
  {
    name:'bk',
    value:76.8
  },
  {
    name:'nk',
    value:78
  },
 
]

let chartData = data.toSorted((a,b) => a.value>b.value?1:-1);
let yDomain = d3.extent(chartData,(d) => d.value);
const xScale = d3.scaleLinear().domain([0,chartData.length]).range([0,width]);
const yScale = d3.scaleLinear().domain(yDomain).range([height,0]);


//  svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(xScale));

//   svg.append("g")
//       .call(d3.axisLeft(yScale));





      let imageList = [
        'https://store-images.s-microsoft.com/image/apps.14475.9007199266245695.9c915e5c-d0d3-411b-90e8-90213b159483.193a1d36-acfb-4f3f-bebd-807ab33293ee',
        'https://static-00.iconduck.com/assets.00/amazon-icon-512x431-b9xn172f.png',
        'https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WynFZTLLzpaReiEBwqXuQ6cnUUsk9g8tqw&s',
        'https://d3js.org/logo.svg'


      ]

const  getPointAtLength = (path, length)  =>  {
  var totalLength = path.getTotalLength();

  if (length > totalLength) {
    throw new Error("Length exceeds path length");
  }
  return path.getPointAtLength(length);
}


// Define a linear gradient
const gradient = svg.append("linearGradient")
    .attr("id", "gradient1")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");

// Add color stops to the gradient
gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "red")
    .attr("stop-opacity", 1);

gradient.append("stop")
    .attr("offset", "33.33%")
    .attr("stop-color", "orange")
    .attr("stop-opacity", 0.5);

gradient.append("stop")
    .attr("offset", "66.67%")
    .attr("stop-color", "green")
    .attr("stop-opacity", 1);



// getPointAtLength(pathElement.node(), length)
    // Add the line
  let pathElement =  svg.append("path")
      .datum(chartData)
      .attr("fill", "none")
      .attr("stroke","url(#gradient1)" )
      .attr("stroke-width", 8)
      .attr('marker-end','url(#arrow)')
      .attr("d", d3.line()
        .x(function(d,i) { 
          return xScale(i) 
        })
        .y(function(d) { return yScale(d.value) })
        .curve(d3.curveBasis)
      
        )


        data.forEach((el,i) => {
          let length= Math.sqrt( ((xScale(0)- xScale(i)) * (xScale(0)- xScale(i)) ) +  ( (yScale(data[0].value) - yScale(el.value) ) * (yScale(data[0].value) - yScale(el.value) ) ) ) 
          console.log('length',length,xScale(0),xScale(i),i)
          let point =getPointAtLength(pathElement.node(), length);
          svg.append('circle').attr('cx',point.x).attr('cy',point.y).attr('r',4).attr('fill','grey')
          svg.append('line').attr('x1' ,point.x).attr('x2' ,point.x).attr('y1',point.y).attr('y2',point.y-40).attr('stroke','black');
             
        
           let imageSize=20;
          svg.append("image")
          .attr('x', point.x - imageSize/2)
          .attr('y',point.y-40 - 35)
          .attr('width', imageSize)
          .attr('height', imageSize)
          .attr("href", imageList[i]);


          let radius=imageSize;
          svg.append("circle")
          .attr('cx', (point.x - imageSize/2)+radius/2)
          .attr('cy',(point.y-40 - 35)+radius/2)
          .attr('r',radius)
          .attr("stroke", 'grey')
          .attr('fill','transparent')
          
          svg.append("text")
          .attr('x', (point.x - imageSize/2)+radius/2)
          .attr('y',(point.y-40 - 35)-radius)
          .text(el.value)
          .attr("stroke", 'grey')
          .attr('fill','transparent')
          .attr('text-anchor','middle')
        })

