const education = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
const county = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

function choroplethmap(data) {

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

const svg = d3.select("#main");

const svg = main.append("svg")
                   .attr("width", width)
                   .attr("height", height);
  

};
