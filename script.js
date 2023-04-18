var homeTeamLogo = document.getElementById("home-team-logo");
var awayTeamLogo = document.getElementById("away-team-logo");
var homeTeamName = document.getElementById("home-team-name");
var awayTeamName = document.getElementById("away-team-name");
var competicion = document.getElementById("competicion");

var homeTeamLogo1 = document.getElementById("home-team-logo1");
var awayTeamLogo1 = document.getElementById("away-team-logo1");
var homeTeamName1 = document.getElementById("home-team-name1");
var awayTeamName1 = document.getElementById("away-team-name1");
var competicion1 = document.getElementById("competicion1");

var homeTeamLogo2 = document.getElementById("home-team-logo2");
var awayTeamLogo2 = document.getElementById("away-team-logo2");
var homeTeamName2 = document.getElementById("home-team-name2");
var awayTeamName2 = document.getElementById("away-team-name2");
var competicion2 = document.getElementById("competicion2");


var dateMatch = document.getElementById("dateMatch");


function getData(){
  fetch("https://v3.football.api-sports.io/fixtures?season=2023&team=451&next=3",{
    method: "GET",
    headers: {
      "x-rapidapi-key": "0f44f04fd33a6e5f665b921287605a7c",
      "x-rapidapi-host": "v3.football.api-sports.io",
    }
  })
  .then((response) => response.json())
  .then(data =>{
    var matchesList = data['response'];
    
    // SETEANDO PARTIDO 
    homeTeamName.innerHTML = matchesList[0].teams.home.name;
    awayTeamName.innerHTML = matchesList[0].teams.away.name;
    homeTeamLogo.src = matchesList[0].teams.home.logo;
    awayTeamLogo.src = matchesList[0].teams.away.logo;
    competicion.innerHTML = matchesList[0].league.name;
    // SETEANDO FECHA Y HORARIO
    var date0 = document.getElementById("fecha")
    var date = new Date(matchesList[0].fixture.date)
    // Agregando un 0 al mes si es necesario
    var month = ((date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : date.getMonth())
    date0.innerHTML = date.getDate() + "/" + month + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "hs.";

  // SETEANDO PARTIDO 2
    homeTeamName1.innerHTML = matchesList[1].teams.home.name;
    awayTeamName1.innerHTML = matchesList[1].teams.away.name;
    homeTeamLogo1.src = matchesList[1].teams.home.logo;
    awayTeamLogo1.src = matchesList[1].teams.away.logo;
    competicion1.innerHTML = matchesList[1].league.name;

    // SETEANDO FECHA Y HORARIO
    var date1 = document.getElementById("fecha1")
    var date = new Date(matchesList[1].fixture.date)
    // Agregando un 0 al mes si es necesario
    var month = ((date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : date.getMonth())
    date1.innerHTML = date.getDate() + "/" + month + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "hs.";


  // SETEANDO PARTIDO 3
    homeTeamName2.innerHTML = matchesList[2].teams.home.name;
    awayTeamName2.innerHTML = matchesList[2].teams.away.name;
    homeTeamLogo2.src = matchesList[2].teams.home.logo;
    awayTeamLogo2.src = matchesList[2].teams.away.logo;
    competicion2.innerHTML = matchesList[2].league.name;

    // SETEANDO FECHA Y HORARIO
    var date2 = document.getElementById("fecha2")
    var date = new Date(matchesList[2].fixture.date)
    // Agregando un 0 al mes si es necesario
    var month = ((date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1) : date.getMonth())
    date2.innerHTML = date.getDate() + "/" + month + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + "hs.";
    

    
  })
  .catch(err => console.error(err));
}
  
getData()