var width = 2000;
var height = 500;
var companyTypeWidth = 200;
var companyTypeHeight = 40;
var companyNameHeight = 70;
var graph = {
  height: 40,
  width: 200,
};
var purchaserData = [15, 13];
var distributorData = [34,44];
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

  let drawPurchaserConnectors = (d, i) => {
    let lineGenerator = d3.line();
    let points;
    switch (i) {
      case 0:
        points = [
          [500, 210],
          [500, 250],
          [660, 250],
          [660, 310],
        ];
        break;

      case 1:
        points = [
          [800, 210],
          [800, 250],
          [660, 250],
          [660, 310],
        ];
        break;

      case 2:
        points = [
          [1100, 210],
          [1100, 250],
          [660, 250],
          [660, 310],
        ];
        break;

      default:
        points = [
          [500, 210],
          [500, 250],
          [660, 250],
          [660, 310],
        ];
        break;
    }

    let pathData = lineGenerator(points);
    return pathData;
  };

  let drawDistributorsConnectors = (d, i) => {
    let lineGenerator = d3.line();
    let points;
    switch (i) {
      case 0:
        points = [
          [500, 240],
          [500, 190],
          [660, 190],
          [660, 150],
        ];
        break;

      case 1:
        points = [
          [820, 240],
          [820, 190],
          [660, 190],
          [660, 150],
        ];
        break;

      case 2:
        points = [
          [1080, 240],
          [1080, 190],
          [660, 190],
          [660, 150],
        ];
        break;

      default:
        points = [
          [500, 210],
          [500, 250],
          [660, 250],
          [660, 310],
        ];
        break;
    }

    let pathData = lineGenerator(points);
    return pathData;
  };

  if (type === "purchaser") {
    g.append("path").attr("d", function (d, i) {
      return drawPurchaserConnectors(d, i);;
    });
  } else {
    g.append("path").attr("d", function (d, i) {
      return drawDistributorsConnectors(d, i);;
    });
  }
};

const populateMainCompany = (type, data, container) => {
  let svg = d3
    .select(`.${container}`)
    .append("svg")
    .attr("width", mainCompany.width)
    .attr("height", mainCompany.height)
    .attr("transform", function (d, i) {
      return "translate(-10,-10)";
    });

  let g = svg
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("height", graph.height)
    .attr("width", graph.width)
    .attr("transform", function (d, i) {
      return "translate(70,90)";
    });

  var radialLineGenerator = d3.radialLine();
  var r1 = 70;
  var radialpoints = [
    [0, r1],
    [Math.PI * 0.5, r1],
    [Math.PI, r1],
    [Math.PI * 1.5, r1],
    [Math.PI * 2, r1],
  ];

  var radialLine = radialLineGenerator(radialpoints);

  g.append("path").attr("class", "radial").attr("d", radialLine);
};

populateCompany("purchaser", purchaserData, "purchaser-container");
populateCompany("distributor", distributorData, "distributor-container");
populateMainCompany("mainCompany", mainCompanyData, "maincompany-container");
