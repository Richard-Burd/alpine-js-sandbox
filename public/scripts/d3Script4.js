// https://youtu.be/nzshmMlOuwI
console.log("i'm reading d4 script Number 3");

const canvas = d3.select(".canva");

let dataArray = [1, 4, 34];

// add an SVG element:
// const svg = canvas.append("svg")
//   .attr('width', 600)
//   .attr('height', 600)

const svg = canvas.select("svg")
  .attr("height", "100")
  .attr('style', 'background-color:#d3f2f0');


// const rect = svg.append("rect");

//const rect = svg.select("rect");
const rect = svg.selectAll("rect");

rect.attr("width", 25)
  .data(dataArray)
  .attr('fill', 'orange')
  //.attr("height", 100)
  .attr('height', function(d) {
    return d*2;
  })

  .attr('x', function(d, i) {
    console.log(d);
    return i*32;
  })

  .attr('y', function(d, i) {
    return 100 - (d*2);
  })

  // left off here: https://youtu.be/nzshmMlOuwI?t=4635
  // on 12/13/2021 @ 8:49 at night
