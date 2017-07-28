function fashion() {
  var girly=document.getElementById("girl").selected;
  var tomboy=document.getElementById("tom").selected;
  var sporty=document.getElementById("sport").selected;
  var casual=document.getElementById("cas").selected;
if (girly==true) {
  document.location.href="girly.html";
  }

else if (tomboy==true) {
  document.location.href="tomboy.html";
  }

else if (sporty==true) {
  document.location.href="sporty.html";
  }

else if (casual==true) {
  document.location.href="casual.html";
  }
}


//Starting GIRLY


function openGirlySeason(season) {
    if (season=="Fall") {
      if (document.getElementById("falloutfit").style.display=='none'){
      document.getElementById("falloutfit").src="girlyfall.jpg";
      document.getElementById("falloutfit").style.display='block';
      document.getElementById("winteroutfit").style.display='none';
      document.getElementById("springoutfit").style.display='none';
      document.getElementById("summeroutfit").style.display='none';
      }

      else if (document.getElementById("falloutfit").style.display=='block'){
      document.getElementById("falloutfit").style.display='none';
      }
    }
    else if (season=="Winter") {
      if (document.getElementById("winteroutfit").style.display=='none'){
        document.getElementById("winteroutfit").src="girlywinter.jpg";
        document.getElementById("winteroutfit").style.display='block';
        document.getElementById("falloutfit").style.display='none';
        document.getElementById("springoutfit").style.display='none';
        document.getElementById("summeroutfit").style.display='none';
      }

      else if (document.getElementById("winteroutfit").style.display=='block'){
      document.getElementById("winteroutfit").style.display='none';
      }
    }

    else if (season=="Spring") {
      if (document.getElementById("springoutfit").style.display=='none'){
        document.getElementById("springoutfit").src="girlyspring.jpg";
        document.getElementById("springoutfit").style.display='block';
        document.getElementById("falloutfit").style.display='none';
        document.getElementById("winteroutfit").style.display='none';
        document.getElementById("summeroutfit").style.display='none';
      }

      else if (document.getElementById("springoutfit").style.display=='block'){
      document.getElementById("springoutfit").style.display='none';
      }
    }


    else if (season=="Summer") {
      if (document.getElementById("summeroutfit").style.display=='none'){
        document.getElementById("summeroutfit").src="girlysummer.jpg";
        document.getElementById("summeroutfit").style.display='block';
        document.getElementById("falloutfit").style.display='none';
        document.getElementById("springoutfit").style.display='none';
        document.getElementById("winteroutfit").style.display='none';
      }

      else if (document.getElementById("summeroutfit").style.display=='block'){
      document.getElementById("summeroutfit").style.display='none';
      }
    }
  }

//Ending GIRLY


//Starting CASUAL

function openCasualSeason(season) {
    if (season=="Fall") {
      if (document.getElementById("falloutfit2").style.display=='none'){
      document.getElementById("falloutfit2").src="casualfall.jpg";
      document.getElementById("falloutfit2").style.display='block';
      document.getElementById("winteroutfit2").style.display='none';
      document.getElementById("springoutfit2").style.display='none';
      document.getElementById("summeroutfit2").style.display='none';
      }

      else if (document.getElementById("falloutfit2").style.display=='block'){
      document.getElementById("falloutfit2").style.display='none';
      }
    }
    else if (season=="Winter") {
      if (document.getElementById("winteroutfit2").style.display=='none'){
        document.getElementById("winteroutfit2").src="casualwinter.jpg";
        document.getElementById("winteroutfit2").style.display='block';
        document.getElementById("falloutfit2").style.display='none';
        document.getElementById("springoutfit2").style.display='none';
        document.getElementById("summeroutfit2").style.display='none';
      }

      else if (document.getElementById("winteroutfit2").style.display=='block'){
      document.getElementById("winteroutfit2").style.display='none';
      }
    }

    else if (season=="Spring") {
      if (document.getElementById("springoutfit2").style.display=='none'){
        document.getElementById("springoutfit2").src="casualspring.jpg";
        document.getElementById("springoutfit2").style.display='block';
        document.getElementById("falloutfit2").style.display='none';
        document.getElementById("winteroutfit2").style.display='none';
        document.getElementById("summeroutfit2").style.display='none';
      }

      else if (document.getElementById("springoutfit2").style.display=='block'){
      document.getElementById("springoutfit2").style.display='none';
      }
    }


    else if (season=="Summer") {
      if (document.getElementById("summeroutfit2").style.display=='none'){
        document.getElementById("summeroutfit2").src="casualsummer.jpg";
        document.getElementById("summeroutfit2").style.display='block';
        document.getElementById("falloutfit2").style.display='none';
        document.getElementById("springoutfit2").style.display='none';
        document.getElementById("winteroutfit2").style.display='none';
      }

      else if (document.getElementById("summeroutfit2").style.display=='block'){
      document.getElementById("summeroutfit2").style.display='none';
      }
    }
  }

// Ending CASUAL

// Starting sporty


function openSportySeason(season) {
    if (season=="Fall") {
      if (document.getElementById("falloutfit3").style.display=='none'){
      document.getElementById("falloutfit3").src="sportyfall.jpg";
      document.getElementById("falloutfit3").style.display='block';
      document.getElementById("winteroutfit3").style.display='none';
      document.getElementById("springoutfit3").style.display='none';
      document.getElementById("summeroutfit3").style.display='none';
      }

      else if (document.getElementById("falloutfit3").style.display=='block'){
      document.getElementById("falloutfit3").style.display='none';
      }
    }
    else if (season=="Winter") {
      if (document.getElementById("winteroutfit3").style.display=='none'){
        document.getElementById("winteroutfit3").src="sportywinter.jpg";
        document.getElementById("winteroutfit3").style.display='block';
        document.getElementById("falloutfit3").style.display='none';
        document.getElementById("springoutfit3").style.display='none';
        document.getElementById("summeroutfit3").style.display='none';
      }

      else if (document.getElementById("winteroutfit3").style.display=='block'){
      document.getElementById("winteroutfit3").style.display='none';
      }
    }

    else if (season=="Spring") {
      if (document.getElementById("springoutfit3").style.display=='none'){
        document.getElementById("springoutfit3").src="sportyspring.jpg";
        document.getElementById("springoutfit3").style.display='block';
        document.getElementById("falloutfit3").style.display='none';
        document.getElementById("winteroutfit3").style.display='none';
        document.getElementById("summeroutfit3").style.display='none';
      }

      else if (document.getElementById("springoutfit3").style.display=='block'){
      document.getElementById("springoutfit3").style.display='none';
      }
    }


    else if (season=="Summer") {
      if (document.getElementById("summeroutfit3").style.display=='none'){
        document.getElementById("summeroutfit3").src="sportysummer.jpg";
        document.getElementById("summeroutfit3").style.display='block';
        document.getElementById("falloutfit3").style.display='none';
        document.getElementById("springoutfit3").style.display='none';
        document.getElementById("winteroutfit3").style.display='none';
      }

      else if (document.getElementById("summeroutfit3").style.display=='block'){
      document.getElementById("summeroutfit3").style.display='none';
      }
    }
  }

  // Ending SPORTY


  // Starting TOMBOY


  function openTomboySeason(season) {
      if (season=="Fall") {
        if (document.getElementById("falloutfit4").style.display=='none'){
        document.getElementById("falloutfit4").src="tomboyfall.jpg";
        document.getElementById("falloutfit4").style.display='block';
        document.getElementById("winteroutfit4").style.display='none';
        document.getElementById("springoutfit4").style.display='none';
        document.getElementById("summeroutfit4").style.display='none';
        }

        else if (document.getElementById("falloutfit4").style.display=='block'){
        document.getElementById("falloutfit4").style.display='none';
        }
      }
      else if (season=="Winter") {
        if (document.getElementById("winteroutfit4").style.display=='none'){
          document.getElementById("winteroutfit4").src="tomboywinter.jpg";
          document.getElementById("winteroutfit4").style.display='block';
          document.getElementById("falloutfit4").style.display='none';
          document.getElementById("springoutfit4").style.display='none';
          document.getElementById("summeroutfit4").style.display='none';
        }

        else if (document.getElementById("winteroutfit4").style.display=='block'){
        document.getElementById("winteroutfit4").style.display='none';
        }
      }

      else if (season=="Spring") {
        if (document.getElementById("springoutfit4").style.display=='none'){
          document.getElementById("springoutfit4").src="tomboyspring.jpg";
          document.getElementById("springoutfit4").style.display='block';
          document.getElementById("falloutfit4").style.display='none';
          document.getElementById("winteroutfit4").style.display='none';
          document.getElementById("summeroutfit4").style.display='none';
        }

        else if (document.getElementById("springoutfit4").style.display=='block'){
        document.getElementById("springoutfit4").style.display='none';
        }
      }


      else if (season=="Summer") {
        if (document.getElementById("summeroutfit4").style.display=='none'){
          document.getElementById("summeroutfit4").src="tomboysummer.jpg";
          document.getElementById("summeroutfit4").style.display='block';
          document.getElementById("falloutfit4").style.display='none';
          document.getElementById("springoutfit4").style.display='none';
          document.getElementById("winteroutfit4").style.display='none';
        }

        else if (document.getElementById("summeroutfit4").style.display=='block'){
        document.getElementById("summeroutfit4").style.display='none';
        }
      }
    }
