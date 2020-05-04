var width = 2000;
var height = 500;
var companyTypeWidth = 200;
var companyTypeHeight = 40;
var companyNameHeight = 70;
var graph = {
  height: 40,
  width: 200,
};
var purchaserData = [15, 18, 46];
var distributorData = [10, 134, 23, 123];
var mainCompanyData = [10];
var colors = ["#ffffcc", "#c2e699", "#78c679", "#31a354", "#006837"];

var mainCompany = {
  width: 2000,
  height: 300,
};

const populateCompany = (type, data, container) => {
  let svg = d3
    .select(`.${container}`)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  let g = svg
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("height", graph.height)
    .attr("width", graph.width)
    .attr("transform", function (d, i) {
      return "translate(-100,-100)";
    });

  g.append("rect")
    .attr("width", companyTypeWidth)
    .attr("height", companyTypeHeight)
    .style("fill", "#D3D3D3")
    .style("stroke", "black")
    .attr("x", function (d, i) {
      return i * 300 + 400;
    })
    .attr("y", function (d, i) {
      return type == "purchaser" ? 100 : companyTypeHeight + 200;
    });

  g.append("rect")
    .attr("width", companyTypeWidth)
    .attr("height", companyNameHeight)
    .style("fill", "#ffff")
    .style("stroke", "black")
    .attr("x", function (d, i) {
      return i * 300 + 400;
    })
    .attr("y", function (d, i) {
      return type == "purchaser" ? 140 : 2 * companyTypeHeight + 200;
    });
};

const populateMainCompany = (type, data, container) => {
  var lineGenerator = d3.line();
  var points = [
    [0, 80],
    [100, 100],
    [200, 20],
    [300, 100],
    [400, 40],
    [500, 80]

  ];


  var pathData = lineGenerator(points);

  d3.select("path").attr("d", pathData);
};

populateCompany("purchaser", purchaserData, "purchaser-container");
populateCompany("distributor", distributorData, "distributor-container");
populateMainCompany("mainCompany", mainCompanyData, "maincompany-container");
