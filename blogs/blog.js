window.onload = function () {
    var dataPoints = [];
    var table = document.getElementById("portfolio").getElementsByTagName("table")[0];
    var rows = table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        dataPoints.push({
            y: parseInt(cells[2].innerHTML.replace(/[^0-9]/g, "")),
            name: cells[0].innerHTML
        });
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: 'light1',
        animationEnabled: true,
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>${y}</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: dataPoints
        }]
    });
    chart.render();
}
