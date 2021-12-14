// https://youtu.be/nzshmMlOuwI
console.log("i'm reading d3 script Number 3");

// you can change colors of HTML elements & style things:
d3.select("h1")
  .style("color", "orange");

// https://youtu.be/nzshmMlOuwI?t=1679
// here's how we would select the <div> tag w/ a "canva" class:
const myHTMLCanva = document.querySelector(".canva");

// this is the same thing in D3:
const myD3Canva = d3.select(".canva");

console.log(myHTMLCanva, myD3Canva)
// => <div class="canva">...</div>
// => Fn {_groups: Array(1), _parents: Array(1)}

// https://youtu.be/nzshmMlOuwI?t=2030
const svg = myD3Canva.append("svg")
  .attr('width', '420')
  .attr("height", "300")
  .attr('style', 'background-color:green');

svg.append("circle")
  .attr('cx', '210')    // these numbers can be in or out of quotes
  .attr('cy', '150')    // these numbers can be in or out of quotes
  .attr('r', '100')     // these numbers can be in or out of quotes
  .attr('fill', 'red');

svg.append("rect")
  .attr('ry', '10')
  .attr('rx', '30')
  .attr('width', '100')
  .attr('height', '100')
  .attr('x', '160')
  .attr('y', '98')
  .attr('fill', 'yellow');

svg.append("line")
  .attr('x1', '0')   // start-point
  .attr('y1', '0')   // start-point
  .attr('x2', '410') // end-point
  .attr('y2', '290') // end-point
  .attr('stroke', 'gray')
  .attr('stroke-width', '10');

// https://youtu.be/nzshmMlOuwI?t=2881
svg.append("text")
  .text("This flag features a Google Font!")
  .attr('x', '10')
  .attr('y', '280')
  .attr('font-size', '1.2em')
  .attr('fill', 'white')
  .attr('letter-spacing', '2');

svg.append("image")
  //.attr('viewBox', '512 512')
  .attr('x', '20')
  .attr('y', '20')
  .attr('width', '70')
  .attr('height', '70')
  .attr('href', '../../images/alpinejs.svg')

svg.append("image")
  .attr('x', '330')
  .attr('y', '150')
  .attr('width', '100')
  .attr('height', '100')
  .attr('fill', 'blue')
  .attr('href', '../../images/embedded.svg');
