
// Merci à Kevin, c'est en ayant son code sous les yeux que j'ai pu réussir à tout comprendre

var perso = {
	pseudo : "",
	force : 10,
	agilite : 10,
	endurance : 100,
    pv : 100
} ;
var bourse = 0;
var nbtour = 0;
var inventaire = {
	potionForce  : 0,
	potionAgi : 0,
	potionEndu : 0,
	potionSoinMineur : 0,
	potionSoinMajeur : 0
} ;
var monstre = {
    nom : "",
    force : 5,
    endurance : 7,
    pv : 7
} ;
var premiercoup;



// AVENTURE


    function run(){
        perso.pseudo = document.getElementById('pseudo').value;
        if (perso.pseudo == ""){
            alert('Tu dois rentrer un pseudo pour commencer bolosse.');
        }
        else if (nbtour <= 0) {
            monstre.force = 5+ (1*nbtour);
            monstre.endurance = 7 + (1*nbtour);
            monstre.pv = monstre.endurance;
            alert("Bats-toi jusqu'à la mort !");
            taper();
        }
        else if (nbtour >= 1){
            monstre.force = 5+ (1*nbtour);
            monstre.endurance = 7 + (1*nbtour);
            monstre.pv = monstre.endurance;
            alert("C'est reparti mon kiki !!!");
            taper();
        }
    }

    function monstre_aleatoire(){
        var nb_aleatoire = Math.floor(Math.random() * 10);
            switch(nb_aleatoire){
                case(nb_aleatoire == 0 ? nb_aleatoire : null):
                    monstre.nom = 'Araignée géante';
                break;
                case(nb_aleatoire == 1 ? nb_aleatoire : null):
                    monstre.nom = 'Calamar';                   
                break;
                case(nb_aleatoire == 2 ? nb_aleatoire : null):
                    monstre.nom = 'Troll';
                break;
                case(nb_aleatoire == 3 ? nb_aleatoire : null):
                    monstre.nom = 'Dragon';
                break;
                case(nb_aleatoire == 4 ? nb_aleatoire : null):
                    monstre.nom = 'Fourmi';
                break;
                case(nb_aleatoire == 5 ? nb_aleatoire : null):
                    monstre.nom = 'Zombie';
                break;
                case(nb_aleatoire == 6 ? nb_aleatoire : null):
                    monstre.nom = 'Couvin';
                break;
                case(nb_aleatoire == 7 ? nb_aleatoire : null):
                    monstre.nom = 'Orc';
                break;
                case(nb_aleatoire == 8 ? nb_aleatoire : null):
                    monstre.nom = 'Cochon radioactif';
                break;
                case(nb_aleatoire == 9 ? nb_aleatoire : null):
                    monstre.nom = 'TERMINATOR';
                break;
            }
    }


    function aventure(){
        monstre_aleatoire();
        

        
        var chanceux = Math.floor(Math.random() * 100) + 1;
        switch (chanceux){
            case (chanceux <= perso.agilite ? chanceux : null):
                premiercoup = 1;
            break;
            case (chanceux > perso.agilite ? chanceux : null):
                premiercoup = 2;
            break;
            }
    }

    function taper(){
        aventure();
        if (premiercoup == 1){
            alert('Tu commences !')
            if(perso.pv > 0){
                monstre.pv = monstre.pv - perso.force;
                if(monstre.pv > 0){
                    perso.pv = perso.pv - monstre.force;
                    taper();
                }
                else{
                    monstremort();
                }
            }
            else {
                persomort();
            }
        }

        else if(premiercoup == 2){
            alert('Le monstre commmence !')
            if(monstre.pv > 0){
                perso.pv = perso.pv - monstre.force;
                if(perso.pv > 0){
                    monstre.pv = monstre.pv - perso.force;
                    taper();
                }
                else{
                    persomort();
                }
            }
            else {
                monstremort();
            }
        }
        

    }


    function monstremort(){
        document.getElementById('nomJoueur').innerHTML=perso.pseudo;
        document.getElementById('pvjoueur').innerHTML="PV :" + perso.pv;
        document.getElementById('forcejoueur').innerHTML="Force :" + perso.force;
        document.getElementById('endurancejoueur').innerHTML="Endurance :" + perso.endurance;
        document.getElementById('agi').innerHTML="Agilité :" + perso.agilite;

        document.getElementById('nomMonstre').innerHTML=monstre.nom;
        document.getElementById('pvmonstre').innerHTML="PV :" + monstre.pv;
        document.getElementById('forcemonstre').innerHTML="Force :" + monstre.force;
        document.getElementById('endurancemonstre').innerHTML="Endurance :" + monstre.endurance;
        var loot = Math.floor(Math.random() *10);
        bourse = bourse + 3;
        if (loot > 0){
            nbtour++;
            alert("T'as battu " + monstre.nom + " et t'as gagné 3 pièces d'or, pas mal pas mal.");
        }
        else{
            nbtour++;
            inventaire.potionSoinMineur++;
            alert("Tu as vaincu " + monstre.nom + " et t'as gagné 3 pièces d'or et une petite potion de soin, GG !");
        }
    }

    function persomort(){
        document.getElementById('nomJoueur').innerHTML=perso.pseudo;
        document.getElementById('pvjoueur').innerHTML="PV :" + perso.pv;
        document.getElementById('forcejoueur').innerHTML="Force :" + perso.force;
        document.getElementById('endurancejoueur').innerHTML="Endurance :" + perso.endurance;
        document.getElementById('agi').innerHTML="Agilité :" + perso.agilite;

        document.getElementById('nomMonstre').innerHTML=monstre.nom;
        document.getElementById('pvmonstre').innerHTML="PV :" + monstre.pv;
        document.getElementById('forcemonstre').innerHTML="Force :" + monstre.force;
        document.getElementById('endurancemonstre').innerHTML="Endurance :" + monstre.endurance;
        nbtour++;
        alert(monstre.nom + " t'a niqué bien sale.");
    }




// BOUTIQUE


    function Boutique(){
    alert("Tu as dans tes poches " + bourse + " pièces d'or\n" +  
    "Tu as dans tes poches " + inventaire.potionForce + " potions de force\n" +
    "Tu as dans tes poches " + inventaire.potionAgi + " potions d'agi\n" +   
    "Tu as dans tes poches " + inventaire.potionEndu + " potions d'endurance\n"  +
    "Tu as dans tes poches " + inventaire.potionSoinMineur + " petites potions de vie\n"  +
    "Tu as dans tes poches " + inventaire.potionSoinMajeur + " grandes potions de vie");
    document.getElementById('bourse').innerHTML="Bourse :" + bourse + " pièces d'or";
    }
    
    
    function achatPotionFor(){
        if (bourse >=2){
            alert("Tu as acheté une potion de Force.");
            bourse = bourse - 2;
            document.getElementById('bourse').innerHTML="Bourse :" + bourse + " pièces d'or";
            inventaire.potionForce++;
        }
        else{
            alert("T'es fauché bolosse.");
        }
    }
    
    function achatPotionAgi(){
        if (bourse >=2){
            alert("Tu as acheté une potion d'agilité.");
            bourse = bourse - 2;
            document.getElementById('bourse').innerHTML="Bourse :" + bourse + " pièces d'or";
            inventaire.potionAgi++;         
        }
        else{
            alert("T'es fauché bolosse.");
        }
    }
    
    function achatPotionEndu(){
        if (bourse >=2){
            alert("Tu as acheté une potion d'endurance.");
            bourse = bourse - 2;
            document.getElementById('bourse').innerHTML="Bourse :" + bourse + " pièces d'or";
            inventaire.potionEndu++;
        }
        else{
            alert("T'es fauché bolosse.");
        }
    }
    
    function achatPotionVie(){
        if (bourse >=5){
            alert("Tu as acheté une potion de vie.");
            bourse = bourse - 5;
            document.getElementById('bourse').innerHTML="Bourse :" + bourse + " pièces d'or";
            inventaire.potionSoinMajeur++;
        }
        else{
            alert("T'es fauché bolosse.");
        }
    }


// INVENTAIRE



function Inventaire(){
	document.getElementById("bourse").innerHTML="Bourse :" + bourse + " pièces d'or";
	document.getElementById("useforce").innerHTML=inventaire.potionForce;
	document.getElementById("useagi").innerHTML=inventaire.potionAgi;
    document.getElementById("useendu").innerHTML=inventaire.potionEndu;
    document.getElementById("usesoinmin").innerHTML=inventaire.potionSoinMineur;
	document.getElementById("usesoinmaj").innerHTML=inventaire.potionSoinMajeur;
}
                                     



function useForce(){
    if(inventaire.potionForce >= 1){
	    perso.force++;
        inventaire.potionForce--;
        document.getElementById("useforce").innerHTML=inventaire.potionForce;
        document.getElementById('forcejoueur').innerHTML="Force :" + perso.force;
        alert('Tu as gagné 1 point de force.');
    }
    else{
        alert("Dommage t'en as pas en stock ahah");
    }
}


function useAgi(){
	if(inventaire.potionAgi >= 1){
	    perso.agilite++;
        inventaire.potionAgi--;
        document.getElementById("useagi").innerHTML=inventaire.potionAgi;
        document.getElementById('agi').innerHTML="Agilité :" + perso.agilite;
        alert("Tu as gagné 1 point d'agilité.");
    }
    else{
        alert("Dommage t'en as pas en stock ahah");
    }
}


function useEndu(){
	if(inventaire.potionEndu >= 1){
	    perso.endurance++;
        inventaire.potionEndu--;
        document.getElementById("useendu").innerHTML=inventaire.potionEndu;
        document.getElementById('endurancejoueur').innerHTML="Endurance :" + perso.endurance;
        alert("Tu as gagné 1 point d'endurance.");
    }
    else{
        alert("Dommage t'en as pas en stock ahah");
    }
}


function useSoinMineur(){
	if (perso.pv <= perso.endurance && potionSoinMineur >= 1){
		perso.pv = perso.pv + 10;
        inventaire.potionSoinMineur--;
        document.getElementById("usesoinmin").innerHTML=inventaire.potionSoinMineur;
        document.getElementById('pvjoueur').innerHTML="PV :" + perso.pv;
        alert('Tu as gagné 10 points de vie.');
		if (perso.pv > perso.endurance){
			perso.pv == perso.endurance;
		}
	}
	else if (perso.pv == perso.endurance && potionSoinMineur >= 1){
		alert ("Tu as ta vie au maximum, la potion n'est pas utilisée");
	}
	else if (perso.pv <= 0 && potionSoinMineur >= 1){
		alert ("Mais t'es mort, tu peux pas l'utiliser.");
    }
}


function useSoinMajeur(){
	if (perso.pv <= perso.endurance && potionSoinMajeur >= 1){
		perso.pv = perso.pv + 20;
        inventaire.potionSoinMajeur--;
        document.getElementById("usesoinmaj").innerHTML=inventaire.potionSoinMajeur;
        document.getElementById('pvjoueur').innerHTML="PV :" + perso.pv;
        alert('Tu as gagné 20 points de vie.');
		if (perso.pv > perso.endurance){
			perso.pv == perso.endurance;
		}
	}
	else if (perso.pv == perso.endurance && potionSoinMajeur >= 1){
		alert ("Tu as ta vie au maximum, la potion n'est pas utilisée");
	}
	else if (perso.pv <= 0 && potionSoinMajeur >= 1){
		alert ("T'es déjà mort, tu peux pas l'utiliser.");
	}
}



// Tableau des scores (merci Antonin sans qui... non en fait il marche pas)


// On commence par créer deux variables, qui contiendront le pseudo et le score
var scoreJoueur = 0;
var myPseudo;

//Ensuite on créé un tableau vide
var score = [];

//À chaque appel de cette fonction, donc à chaque click sur le bouton concerné dans index.html,
//on va :
function AddScore() {

	//récupérer les données insérées dans les input
	myPseudo = document.getElementById("pseudo").value;
	scoreJoueur = document.getElementById("score").value;

	//créer un nouvel objet contenant le pseudo, ici la variable myPseudo associée à la key pseudo,
	//et le score, ici la variable scoreJoueur associée à la key score
	var obj = {pseudo : myPseudo, score : scoreJoueur};

	//ajouter cet objet à notre tableau
	score.push(obj);

	//trier notre tableau par ordre décroissant ( ici b.score et a.score permettent de trier le tableau
	//en fonction du score uniquement, les chaînes de caractères contenues dans le pseudo étant compliquée
	//à trier )
	score.sort((a,b)=> b.score - a.score);

	//si la taille du tableau dépasse 5 élément ( le nombre d'élément qu'il contient, ici 5 objet ), 
	//on enlève la dernière ( donc la plus petite parce que notre tableau a été trié juste avant )
	if(score.length > 5){
		score.pop();
	}

	//appeler la fonction qui permettra d'afficher le tableau
	AfficherTab();
}

//Cette fonction va permettre la création du tableau en HTML et donc son affichage
function AfficherTab(){

	//on crée une variable contenant le tableau en html, on commence donc par ouvrir la première balise
	var html = '<table>';
	
	//cette boucle va parcourir notre tableau. La variable item correspond à ce qui est contenu
	//dans le tableau, ici l'objet créé précédemment
	for (let item of score) {

		//pour chaque item, on ajoute une balise <tr> au tableau
		html += '<tr>';

		//Object.keys(item) créer un tableau contenant les keys de l'objet item. On va donc parcourir
		//ce tableau ( la variable myKey correspond donc à ce qui est contenu dans le tableau créé par
		//Object.keys(item))
		for (let myKey of Object.keys(item)) {
			console.log(item[myKey]);

			//pour chaque élément du tableau Object.keys(item), donc pour chaque key du tableau score,
			//on va créér ajouter une balise <td> contenant la valeur de la key
			html += '<td>' + item[myKey] + '</td>';
		}
		//on ferme la balise <tr> ouverte précedemment
		html += '</tr>';
	}
	//on ferme le tableau
	html += '</table>';

	//et enfin, on l'affiche
	document.getElementById("monTableau").innerHTML = html;
}

//À chacun maintenant d'adapter ce tableau à son code



