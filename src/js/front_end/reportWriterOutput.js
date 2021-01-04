var x ="<table class='table table-bordered table-hover'> <thead> <tr>", i;
data = localStorage.getItem("data");
localStorage.clear();
data = JSON.parse(data)
for (const header in data[0]) {
    x = x + "<th>" + header + "</th>";
}
x = x + "</tr> </thead>"
for (i=0; i<data.length; i++) {
    x = x + "<tr>"
    for (const header in data[i]) {
    x = x + "<td>" + data[i][header] + "</td>"
    }
    x = x + "</tr>"
}
x = x + "</table"; 
console.log(x)
document.getElementById("output-table").innerHTML = x;

//dowload to csv file
function downloadCSV(csv, filename) {
var csvFile;
var downloadLink;

csvFile = new Blob([csv], {type: "text/csv"});
downloadLink = document.createElement("a");
downloadLink.download = filename;

// Create a link to the file
downloadLink.href = window.URL.createObjectURL(csvFile);

// Add the link to DOM
document.body.appendChild(downloadLink);
downloadLink.click();
}

function exportTableToCSV(filename) {
var csv = [];
var rows = document.querySelectorAll("table tr");

for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].querySelectorAll("td, th");
    for (var j = 0; j < cols.length; j++) 
        console.log('cols: ', cols, ' cols[j]: ', colds[j], " j: ", j)
        if(cols[j].innerText.includes(',')){
            cols[j].innerText.replace(',', ' ');
            console.log('HELLO HERE');
        }
        row.push(cols[j].innerText);
        console.log("row", row)
    csv.push(row.join(","));        
}
// Download CSV file
downloadCSV(csv.join("\n"), filename);
}