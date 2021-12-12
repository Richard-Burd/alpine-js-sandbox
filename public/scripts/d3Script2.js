// https://youtu.be/TOJ9yjvlapY?t=1320
console.log("i'm reading the js file");

// we wanna render this into a bar chart
const SECOND_DUMMY_DATA = [
  {id: 'd1', value: 10, region: 'USA'},
  {id: 'd2', value: 11, region: 'China'},
  {id: 'd3', value: 12, region: 'UK'},
  {id: 'd4', value: 6, region: 'Monaco'},
];

//scaling functions
const xScale = d3
  .scaleBand()
  .domain(SECOND_DUMMY_DATA.map((dataPoint) => dataPoint.region))
  .rangeRound([0, 250])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([200, 0]);

const container2 = d3.select('svg')
  .classed('container2', true)

const bars = container2
  .selectAll('.bar')
  .data(SECOND_DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 200 - yScale(data.value))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value));




/*
d3.select('div')
  .selectAll('p')
  .data(DUMMY_DATA)
  .enter()
  .append('p')
  .text(dta => dta.region);
*/
