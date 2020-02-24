const educationDataSet = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
const countyDataSet = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

const files = [educationDataSet, countyDataSet];

Promise.all(files.map(url => d3.json(url))).then(values => choroplethmap(values));

function choroplethmap(data) {
  
  const counties = topojson.feature(data[1], data[1].objects.counties);

  const width = 960;
  const height = 600;
  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }

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
  
  svg.append("g")
     .attr("class", "county")
     .selectAll("path")
     .data(counties)
     .enter()
     .append("path")
     .attr("d", path);

  const projection = d3.geoMercator();
  const pathGenereator = d3.geoPath(projection(projection));

};
