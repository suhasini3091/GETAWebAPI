const app = document.getElementById("root");
const container = document.createElement("div");
container.id = "container";
app.appendChild(container);

const table = document.createElement("table");
table.className = "shiptable";

var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var hrow = document.createElement("tr");

[
  "Name",
  "Model",
  "Manufacturer",
  "Cost",
  "Length",
  "Max ATM Speed",
  "Crew",
  "Passengers",
  "Cargo capacity",
  "Consumables",
  "Hyperdrive Rating",
  "MGLT",
  "Starship Class",
  "Pilots",
  "Films",
  "Created",
  "Edited",
  "URL"
].forEach(function(el) {
  var th = document.createElement("th");
  th.appendChild(document.createTextNode(el));
  hrow.appendChild(th);
});

thead.appendChild(hrow);
table.appendChild(thead);
/*
var request = new XMLHttpRequest();
request.open("GET", "https://swapi.co/api/starships/", true);

if (request.status >= 200 && request.status < 400) {
  request.onload = function() {
    var starshipsList = JSON.parse(this.response);
    console.log(starshipsList.result);
  };
} else {
  console.log(console.error());
}

request.send();
*/

var starshipsList = data;
starshipsList.results.forEach(starship => {
  var tr = document.createElement("tr");

  for (var element in starship) {
    console.log(starship.length);

    var td = document.createElement("td");
    td.appendChild(document.createTextNode(starship[element]));
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
});
table.appendChild(tbody);

container.appendChild(table);
