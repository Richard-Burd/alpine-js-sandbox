// https://youtu.be/nzshmMlOuwI
console.log("i'm reading d4 script Number 3");

const canvas = d3.select(".canva");

let dataArray = [
  {width:25, height:4, fill: "pink"},
  {width:25, height:12, fill: "orange"},
  {width:25, height:14, fill: "purple"},
  {width:25, height:42, fill: "green"},
  {width:25, height:28, fill: "grey"}
];

// add an SVG element:
const svg = canvas.append("svg")
  .attr('width', 400)
  .attr('height', 100)
  .attr('style', 'background-color:#d3f2f0');

// const svg = canvas.select("svg")
//   .attr("height", "100")
//   .attr('style', 'background-color:#d3f2f0');


// const rect = svg.append("rect");

//const rect = svg.select("rect");
const rect = svg.selectAll("rect"); // you're "selecting" these before they're created below

rect.data(dataArray)

  // All about the enter() selection method:
  // https://youtu.be/nzshmMlOuwI?t=4730
  // this is where you "enter-in" all the data in the array
  .enter().append("rect")

  .attr('ry', '3')
  .attr("width", 25)


  // .attr('fill', function(d){
  //   return d.fill
  // })
  // ** the code above can be re-written as an arrow function:
  .attr('fill', d => d.fill)


  //.attr("height", 100)
  .attr('height', function(d) { // anonymous function
    console.log(d.height);    // needed b/c we have more than 1 line of code
    return d.height*2;
  })

  .attr('x', function(d, i) { // anonymous function
    console.log(d.height);    // needed b/c we have more than 1 line of code
    return i*32;
  })

  .attr('y', function(d, i) { // anonymous function
    console.log(d.height);    // needed b/c we have more than 1 line of code
    return 100 - (d.height*2);
  })
