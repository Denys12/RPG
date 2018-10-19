var perso = {
	pseudo : "",
	force : 10,
	agilite : 10,
	endurance : 100,
    pv : 100
} ;
var bourse = 0;
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


    function run(){
        if (perso.pseudo == ""){
            alert('Vous devez rentrer un pseudo pour commencer !');
        }
        else {
            alert("Battez-vous jusqu'à la mort !");
        }
    }

    function monstre_aleatoire(){
        var max = 10;
        var nb_aleatoire = Math.floor(Math.random() * max) + 1;
            switch(nb_aleatoire){
                case(nb_aleatoire == 1):
                    monstre.nom = 'Araignée géante';
                break;
                case(nb_aleatoire == 2):
                    monstre.nom = 'Calamar';                   
                break;
                case(nb_aleatoire == 3):
                    monstre.nom = 'Troll';
                break;
                case(nb_aleatoire == 4):
                    monstre.nom = 'Dragon';
                break;
                case(nb_aleatoire == 5):
                    monstre.nom = 'Fourmi';
                break;
                case(nb_aleatoire == 6):
                    monstre.nom = 'Zombie';
                break;
                case(nb_aleatoire == 7):
                    monstre.nom = 'Couvin';
                break;
                case(nb_aleatoire == 8):
                    monstre.nom = 'Orc';
                break;
                case(nb_aleatoire == 9):
                    monstre.nom = 'Cochon radioactif';
                break;
                case(nb_aleatoire == 10):
                    monstre.nom = 'TERMINATOR';
                break;
            }
            return monstre.nom;
    }



    function aventure(){
        document.getElementById('').innerHTML=monstre.nom;
        document.getElementById('').innerHTML=perso.pseudo;

        function premiertape(){
            var maxi = 100;
            var chanceux = Math.floor(Math.random() * maxi) + 1;
            var premiercoup;
            switch (chanceux){
                case (chanceux <= perso.agilite):
                    premiercoup = 1;
                break;
                case (chanceux > perso.agilite):
                    premiercoup = 2;
                break;
            }
            return premiercoup;
        }

        //if (premiercoup == 1){
        //    alert('Vous commencez')    
        //}
        //else (premiercoup == 2) {

        //}

        //function






    }




    function boutique(){

    }




    function inventaire(){

    }
