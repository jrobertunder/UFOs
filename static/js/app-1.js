// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    tbody.html("");
    data.forEach((datarow) => { 
        
        let row = tbody.append('tr');
        Object.values(datarow).forEach((val)=> {
            
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}
function handleclick() {
    let date = d3.select("#datetime").property("value");
    let filtereddata = tableData;
    if (date) {
        filtereddata = filtereddata.filter(row => row.datetime === date);
        buildTable(filtereddata);
    };
};
    d3.selectAll("#filter-btn").on("click", handleclick);
buildTable(tableData);
