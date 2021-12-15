console.log("i'm reading D3 script Number 7");
// https://youtu.be/kz4OCMzkEnY?t=2024
// https://github.com/DavGarcia/d3-occ

let dataset, svg, bandScale;

d3.csv("../scripts/nfl.csv", function(d){
  dataset = d;
  dataset.forEach(function(d, i){
    d.order = i;
  });
  createChart();
});

function createChart() {
  svg = d3.select("#vis")
    .append("svg");

  let w = 500, h = 100;

  svg.attr("width", w)
    .attr('height', h);

  let teams = dataset.map(function(d){
    return d.Team;
  })

  bandScale = d3.scaleBand()
    .domain(teams)
    .range([0,w])
    .padding(0.1);

  let heightScale = d3.scaleLinear()
    .domain([0,16])
    .range([0,h]);

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d,i){
      return bandScale(d.Team);
    })

    .attr('y', function(d){
      return h - heightScale(d.W);
    })

    .attr('width', function(d){
      return bandScale.bandwidth();
    })
    .attr('height', function(d){
      return heightScale(d.W);
    })
    .attr('fill', function(d){
      return d.Color;
    })
    .append("title")
    .text(function(d){
      return d.Team;
    });
}

d3.select("input")
  .on("change", toggleSort);

function toggleSort() {

  let sortComparer;

  if (this.checked) {
    // sort by wins
    sortComparer = function(a,b){
      return b.W - a.W;
    }
  } else {
    //sort by original order
    sortComparer = function(a,b){
      return a.order - b.order;
    }
  }

  dataset.sort(sortComparer);
  let teamOrder = dataset.map(
    function(d){
      return d.Team;
  });

  bandScale.domain(teamOrder);

  svg.transition()
    .duration(1000)
    .selectAll("rect")
    .delay(function(d,i){
      return i * 50;
    })
    .attr('x', function(d){
      return bandScale(d.Team);
    });
}
