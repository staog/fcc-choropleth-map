const educationDataSet = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
const countyDataSet = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

const files = [educationDataSet, countyDataSet];

Promise.all(files.map(url => d3.json(url))).then(values => choroplethmap(values));

function choroplethmap(data) {
  
  console.log(data)
  
  const width = 960;
  const height = 600;
  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }
  
  const colors = [
    '#90caf9',
    '#42a5f5',
    '#1e88e5',
    '#1565c0',
  ];

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;  

  const main = d3.select("#main");

  main.append("h1")
      .attr("id", "title")
      .text("United States Educational Attainment");
  
  main.append("h3")
      .attr("id", "description")
      .text("Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)");

  const svg = main.append("svg")
                  .attr("align", "centre")
                  .attr("width", width)
                  .attr("height", height);

  const projection = d3.geoMercator();
  const path = d3.geoPath();

  svg.append("g")
     .attr("class", "counties")
     .selectAll("path")
     .data(topojson.feature(data[1], data[1].objects.counties).features)
     .enter()
     .append("path")
     .attr("d", path)
     .attr("fill", "darkcyan");

  svg.append("path")
      .attr("class", "county-borders")
      .attr("d", path(topojson.mesh(data[1], data[1].objects.counties, (a, b) => a !== b)));
  
};

