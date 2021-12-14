// https://youtu.be/nzshmMlOuwI
console.log("i'm reading d4 script Number 3");

const canvas = d3.select(".canva");

// add an SVG element:
const svg = canvas.append("svg")
  .attr('width', 400)
  .attr('height', 100)
  .attr('style', 'background-color:#d3f2f0');


const rect = svg.selectAll("rect");

let dataArray = d3.json('../scripts/test.json')
  .then(data => {
    console.log(data)

    rect.data(data)
      .enter().append("rect")
      .attr('ry', '3')
      .attr("width", 25)

      .attr('fill', d => d.fill)

      .attr('height', d => d.height*2)

      .attr('x', function(d, i) {
        return i*32;
      })

      .attr('y', function(d, i) {
        return 100 - (d.height*2);
      })

});
