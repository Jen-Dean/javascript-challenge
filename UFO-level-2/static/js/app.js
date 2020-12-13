/////////////////// Creating the Base Table

var tableData = data;
var tableElement = d3.select("#ufo-table")
var tbody = d3.select("tbody")


tableData.forEach((item) => {
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
    var inputDateValue = d3.select("#datetime").property("value");
    var inputCityValue = d3.select("#city").property("value");
    var inputStateValue = d3.select("#state").property("value");
    var inputCountryValue = d3.select("#country").property("value");
    var inputShapeValue = d3.select("#shape").property("value");

    console.log(inputDateValue);
    console.log(inputCityValue);
    console.log(inputStateValue);
    console.log(inputCountryValue);
    console.log(inputShapeValue);


    if (inputDateValue) {
        var filteredData = tableData.filter(ufo => ufo.datetime === inputDateValue);
        console.log(filteredData);
    } else {
        var filteredData = tableData;
    }

    if (inputCityValue) {
        filteredData = filteredData.filter(ufo => ufo.city === inputCityValue);
        console.log(filteredData);
    }

    if (inputStateValue) {
        filteredData = filteredData.filter(ufo => ufo.state === inputStateValue);
        console.log(filteredData);
    }

    if (inputCountryValue) {
        filteredData = filteredData.filter(ufo => ufo.country === inputCountryValue);
        console.log(filteredData);
    }

    if (inputShapeValue) {
        filteredData = filteredData.filter(ufo => ufo.shape === inputShapeValue);
        console.log(filteredData);
    }

    // Clear out old queries
    tbody.html("");

    // input the new queries
    filteredData.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
