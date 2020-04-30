var width = 5000;
var height = 5000;
var companyTypeWidth = 200;
var companyTypeHeight = 40;
var companyNameHeight = 100;

var purchaserData = [10, 15];
var colors = ["#ffffcc", "#c2e699", "#78c679", "#31a354", "#006837"];

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var g = svg
  .selectAll("g")
  .data(purchaserData)
  .enter()
  .append("g")
  .attr("transform", function (d, i) {
    return "translate(0,0)";
  });

// purchaser

g.append("rect")
  .attr("width", companyTypeWidth)
  .attr("height", companyTypeHeight)
  .style("fill", "#D3D3D3")
  .style("stroke", "black")
  .attr("x", function (d, i) {
    return i * 400 + 400;
  })
  .attr("y", function (d, i) {
    return 100;
  });

g.append("rect")
  .attr("width", companyTypeWidth)
  .attr("height", companyNameHeight)
  .style("fill", "#ffff")
  .style("stroke", "black")
  .attr("x", function (d, i) {
    return i * 400 + 400;
  })
  .attr("y", function (d, i) {
    return 140;
  });

// Company being queried

g.append("line")
  .attr("x1", 100)
  .attr("x2", 500)
  .attr("y1", 50)
  .attr("y2", 250)
  .attr("stroke", "black");

// Distributor

g.append("rect")
  .attr("width", companyTypeWidth)
  .attr("height", companyTypeHeight)
  .style("fill", "#D3D3D3")
  .style("stroke", "black")
  .attr("x", function (d, i) {
    return i * 400 + 400;
  })
  .attr("y", function (d, i) {
    return companyTypeHeight + 400;
  });

g.append("rect")
  .attr("width", companyTypeWidth)
  .attr("height", companyNameHeight)
  .style("fill", "#ffff")
  .style("stroke", "black")
  .attr("x", function (d, i) {
    return i * 400 + 400;
  })
  .attr("y", function (d, i) {
    return 2 * companyTypeHeight + 400;
  });

/* g.append("circle")
     .attr("cx", function (d, i) {
         return i * 100 + 50;
     })
     .attr("cy", function (d, i) {
         return 100;
     })
     .attr("r", function (d) {
         return d * 1.5;
     })
     .attr("fill", function (d, i) {
         return colors[i];
     }) */

/*g.append("text")
    .attr("x", function (d, i) {
        return i * 100 + 40;
    })
    .attr("y", 105)
    .attr("stroke", "teal")
    .attr("font-size", "12px")
    .attr("font-family", "sans-serif")
    .text(function (d) {
        return d;
    }); */

/*
let data = [1,2,3,4]
var svg = d3.select('body')
            .append('svg')
            .attr('width', 400)
            .attr('height', 200)
            .style('background', 'grey')
            .style('stroke', 'black')

d3.select('svg')
    .append('rect')
    .attr('width', 400)
    .attr('height', 40)
    .style('fill', '#D3D3D3')
    .style('stroke', 'black')

/*d3.select('svg')
    .append('rect')
    .attr('width', 400)
    .attr('height', 160)
    .style('fill', 'white')
    .style('y', '40')
    .style('stroke', 'black')

/*
var data = [1, 2, 3, 4]
var width = 100,
    childWith = 800,
    childHeight = 800,
    offsetChild = 40;

var graph = d3.select(".container")
    .append("svg")
    .attr("width", childWith)
    .attr("height", childHeight)
    .style('background', 'green')
    .style('stroke', 'black')

var company = d3.select('g')
    .data()
    .enter()
    .append("g")


comapany.append('rect')
    .attr('width', 400)





.append('rect')
    .attr('width', 400)
    .attr('height', 40)
    .style('fill', '#D3D3D3')
    .style('stroke', 'black')


var svg = d3.select('body')
            .append('svg')
            .attr('width', 400)
            .attr('height', 200)
            .style('background', 'grey')
            .style('stroke', 'black')

d3.select('svg')
    .append('rect')
    .attr('width', 400)
    .attr('height', 40)
    .style('fill', '#D3D3D3')
    .style('stroke', 'black')

d3.select('svg')
    .append('rect')
    .attr('width', 400)
    .attr('height', 160)
    .style('fill', 'white')
    .style('y', '40')
    .style('stroke', 'black')
*/
