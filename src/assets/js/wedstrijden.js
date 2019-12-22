function getLastTenGames() {
  var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() { 
          if (this.readyState == 4) {
              console.log(this.responseText);
              let wedstrijden = JSON.parse(this.responseText);
              for (let index = 0; index < wedstrijden.length; index++) {
                  createTableRow(index, wedstrijden[index]);
              }
              console.log(wedstrijden);
          }
      }
      xhr.open("GET", "http://localhost:8082/wedstrijden", true);
      xhr.send();
}

function createTableRow(index, wedstrijd) {
  let row = document.createElement('tr');
  row.innerHTML =     '<tr>' + 
                          '<th scope="row">' + index + '</th>' +
                          '<td>' + wedstrijd.teamThuis + ' - ' + wedstrijd.teamUit + '</td>' +
                          '<td>' + wedstrijd.competitie + '</td>' +
                          '<td>' + wedstrijd.beginTijd + '</td>' +
                      '</tr>';
  return row;
}