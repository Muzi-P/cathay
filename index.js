var width = 2000;
var height = 500;
var companyTypeWidth = 200;
var companyTypeHeight = 40;
var companyNameHeight = 70;
var graph = {
  height: 40,
  width: 200,
};
var distributorData = [
  {
    type: "關係企業",
    name: "國民關係股份有限公司",
    risk: false,
    percentange: "55%",
    personInCharge: "陳XX",
  },
  {
    type: "非關係企業",
    name: "OOXX股份有限公司",
    risk: true,
    percentange: "45%",
    personInCharge: "陳XX",
  }
];

var purchaserData = [
  {
    type: "非關係/集團企業",
    name: "XXXX股份有限公司",
    risk: true,
    percentange: "55%",
    personInCharge: "陳XX",
  },
  {
    type: "國民平安股份有限公司",
    name: "OOXX股份有限公司",
    risk: true,
    percentange: "45%",
    personInCharge: "陳XX",
  },
];

var mainCompanyData = [{ name: " 國泰民安" }];
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
    .attr("height", height)
    .attr("fill", "red");

  let g = svg
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("height", graph.height)
    .attr("width", graph.width)
    .attr("transform", function (d, i) {
      return "translate(-100,-80)";
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

  // adding text for company type
  g.append("text")
    .attr("x", function (d, i) {
      return i * 300 + 410;
    })
    .attr("y", function (d, i) {
      return type == "purchaser" ? 125 : companyTypeHeight + 225;
    })
    .text(function (d) {
      // console.log(d.type.length)
      return `${d.type}`;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .attr("fill", "black")
    .attr("text-align", "center");

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

  // adding text for company name

  g.append("text")
    .attr("x", function (d, i) {
      return i * 300 + 410;
    })
    .attr("y", function (d, i) {
      return type == "purchaser" ? 180 : companyTypeHeight + 280;
    })
    .text(function (d) {
      // console.log(d.type.length)
      return `${d.name}`;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .attr("fill", "green")
    .attr("text-align", "center");

  /**************************************************************************
   * Warning sign svg
   */
  let arc = d3.symbol().type(d3.symbolTriangle).size(400);
  let circle = d3.symbol().type(d3.symbolCircle).size(20);
  g.append("path")
    .attr("d", arc)
    .attr("fill", "red")
    .attr("stroke", "#000")
    .attr("stroke-width", 1)
    .attr("opacity", function (d) {
      return d.risk ? 1 : 0;
    })
    .attr("transform", function (d, i) {
      console.log(d);
      return type == "purchaser"
        ? `translate(${610 + 300 * i},100)`
        : `translate(${610 + 300 * i},250)`;
    });

  g.append("path")
    .attr("d", circle)
    .attr("fill", "white")
    .attr("stroke", "white")
    .attr("stroke-width", 1)
    .attr("opacity", function (d) {
      return d.risk ? 1 : 0;
    })
    .attr("transform", function (d, i) {
      return type == "purchaser"
        ? `translate(${610 + 300 * i},103)`
        : `translate(${610 + 300 * i},252.5)`;
    });

  g.append("rect")
    .attr("width", 3.5)
    .attr("height", 8)
    .style("fill", "white")
    .attr("x", function (d, i) {
      return i * 293 + 400;
    })
    .attr("opacity", function (d) {
      return d.risk ? 1 : 0;
    })
    .attr("y", function (d, i) {
      return type == "purchaser" ? 140 : 2 * companyTypeHeight + 200;
    })
    .attr("transform", function (d, i) {
      return type == "purchaser"
        ? `translate(${208 + 7 * i},-50)`
        : `translate(${208 + 7 * i},-40)`;
    });

  /****************************end of warning sign svg****************** */

  /**************************************************************************
   * Drawing Connectors between companies
   */

  let drawPurchaserConnectors = (d, i) => {
    let lineGenerator = d3.line();
    let points;
    switch (i) {
      case 0:
        points = [
          [500, 210],
          [500, 250],
          [660, 250],
          [660, 290],
        ];
        break;

      case 1:
        points = [
          [800, 210],
          [800, 250],
          [660, 250],
          [660, 290],
        ];
        break;

      case 2:
        points = [
          [1100, 210],
          [1100, 250],
          [660, 250],
          [660, 290],
        ];
        break;

      default:
        points = [
          [500, 210],
          [500, 250],
          [660, 250],
          [660, 290],
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
          [660, 130],
        ];
        break;

      case 1:
        points = [
          [820, 240],
          [820, 190],
          [660, 190],
          [660, 130],
        ];
        break;

      case 2:
        points = [
          [1080, 240],
          [1080, 190],
          [660, 190],
          [660, 130],
        ];
        break;

      default:
        points = [
          [500, 240],
          [500, 190],
          [660, 190],
          [660, 130],
        ];
        break;
    }

    let pathData = lineGenerator(points);
    return pathData;
  };

  if (type === "purchaser") {
    g.append("path")
      .attr("d", function (d, i) {
        return drawPurchaserConnectors(d, i);
      })
      .attr("fill", "none")
      .attr("stroke", "#999");
  } else {
    g.append("path")
      .attr("d", function (d, i) {
        return drawDistributorsConnectors(d, i);
      })
      .attr("fill", "none")
      .attr("stroke", "#999");
  }

  /****************************end of drawing connectors between companies****************** */
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

  g.append("path")
    .attr("class", "radial")
    .attr("d", radialLine)
    .attr("fill", "none")
    .attr("stroke", "#999");

  g.append("text")
    .attr("x", -30)
    .attr("y", 5)
    .text(function (d) {
      // console.log(d.type.length)
      return `${d.name}`;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .attr("fill", "green")
    .attr("text-align", "center");
};

populateCompany("purchaser", purchaserData, "purchaser-container");
populateCompany("distributor", distributorData, "distributor-container");
populateMainCompany("mainCompany", mainCompanyData, "maincompany-container");
