const width = 960;
const height = 600;
const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }

const main = d3.select("#main");

main.append("h1")
    .attr("id", "title")
    .text("United States Educational Attainment");
  
main.append("h3")
    .attr("id", "description")
    .text("Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)");


var svg = main.append("svg")
              .attr("align", "centre")
              .attr("width", width)
              .attr("height", height);

var path = d3.geoPath();

d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json", us => {

  svg.append("g")
     .attr("class", "counties")
     .selectAll("path")
     .data(topojson.feature(us, us.objects.counties).features)
     .enter()
     .append("path")
     .attr("d", path)
     .attr("fill", "darkcyan");

  svg.append("path")
      .attr("class", "county-borders")
      .attr("d", path(topojson.mesh(us, us.objects.counties, (a, b) => a !== b)));
});
