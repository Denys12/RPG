function Jour(){

    chrono = setTimeout(function() {
		alert ("Temps écoulé MOTHAFUCKA");
        scoreIA++;
        document.getElementById("score").innerHTML = "Joueur : "+scoreJoueur+" Ordi : "+scoreIA;  }, 45000);
        Nuit();
        }  

function Nuit(){

 		clearTimeout(chrono);
 		monstre.force = monstre.force +1;
 		chrono = setTimeout(function() {
 		alert ("La nuit tombe.Attention, les monstre sont plus fort.");
 		scoreIA++;
 		document.getElementById("score").innerHTML = "Joueur : "+scoreJoueur+" Ordi : "+scoreIA;
 		}, 45000);
 		     monstre.force = monstre.force -1;
 		     Jour(); 

 		 }