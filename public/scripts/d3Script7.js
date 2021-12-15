console.log("i'm reading D3 script Number 7");
// https://youtu.be/kz4OCMzkEnY?t=2024 <------------ left off here on 12/14/2021 @ 11:18pm
// https://github.com/DavGarcia/d3-occ

// let dataArray = d3.json('../scripts/test.json')

var dataset;

d3.csv("../scripts/nfl.csv", function(d){
  dataset = d;
  createChart();
});

function createChart() {
  let svg = d3.select("#vis")
    .append("svg");

  let w = 500, h = 100;

  svg.attr("width", w)
    .attr('height', h);

  let bandScale = d3.scaleBand()
    .domain()                      //  <------------ left off here on 12/14/2021 @ 11:18pm

  let bandWidth = w / dataset.length - 1; // <------ this gets deleted & replaced w/line above

  let heightScale = d3.scaleLinear()
    .domain([0,16])
    .range([0,h]);

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d,i){
      return i * bandWidth + i;
    })

    .attr('y', function(d){
      return h - heightScale(d.W);
    })

    .attr('width', bandWidth)
    .attr('height', function(d){
      return heightScale(d.W);
    })
    .attr('fill', function(d){
      return d.Color;
    })
}
