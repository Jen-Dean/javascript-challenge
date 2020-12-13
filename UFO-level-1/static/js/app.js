/////////////////// Creating the Base Table

var tableData = data;
var tableElement = d3.select("#ufo-table")
var tbody = d3.select("tbody")


data.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

/////////////////// Creating the Clickable form

var button = d3.select("#filter-btn");
var form = d3.select(".form-control");


button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");