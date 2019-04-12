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
const shiptable = document.getElementById("shiptable");
const tbody = document.createElement("tbody");

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
shiptable.appendChild(tbody);
