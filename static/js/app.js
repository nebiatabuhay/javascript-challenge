// from data.js
var tableData = data;

// YOUR CODE HERE!
var tb =d3.select("tbody");
function buildTable(data){
    tb.html("");
    data.forEach(row=> {
        var tableRow = tb.append("tr");
        Object.values(row).forEach(value => {
           var cell = tableRow.append("td");
           cell.text(value);

        });
        
    });

}
function filter() {
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if(date) {
        filterData = filterData.filter(row=>row.datetime===date);
        
    }
    buildTable(filterData);
 
    
}
d3.select("#filter-btn").on("click", filter);

buildTable(tableData);