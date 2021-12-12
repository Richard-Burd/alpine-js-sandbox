// https://www.youtube.com/watch?v=TOJ9yjvlapY
console.log("i'm reading the js file");

// we wanna render this into a bar chart
const DUMMY_DATA = [
  {id: 'd1', value: 12, region: 'USA'},
  {id: 'd2', value: 7, region: 'China'},
  {id: 'd3', value: 2, region: 'UK'},
  {id: 'd4', value: 5, region: 'Monaco'},
];

const container = d3.select('div')
  .classed('container', true)
  .style('border', '1px solid red');

container
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('div')
  .classed('bar', true)
  .style('width', '50px')
  .style('height', data => (data.value * 15) + 'px');




/*
d3.select('div')
  .selectAll('p')
  .data(DUMMY_DATA)
  .enter()
  .append('p')
  .text(dta => dta.region);
*/
