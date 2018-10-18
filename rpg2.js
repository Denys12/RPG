	var ennemie={
		nom:"",
		force:5, 
		endurance:7,
		barre de vie:7,
} 





function ennemie(force,endurance,barre de vie){ 
	this.force = force;
	this.endurance = endurance;
	this.barre de vie = barre de vie;
	}






function achatPotionFor(){
	if (bourse >=2){
		bourse = bourse - 2;
		potionFor++;
		alert ("Veut tu acheter cette potion ?");
	}
	else{
		alert("Nan ? Alors dégage de ma boutique");
	}
}


function achatPotionAgi(){
	if (bourse >=2){
		bourse = bourse - 2;
		potionAgi++;
		alert ("Veut tu acheter cette potion ?");
	}
	else{
		alert("Nan ? Alors dégage de ma boutique");
	}
}



function achatPotionEndu(){
	if (bourse >=2){
		bourse = bourse - 2;
		potionEndu++;
		alert ("Veut tu acheter cette potion ?");
	}
	else{
		alert("Nan ? Alors dégage de ma boutique");
	}
}


function achatPotionVie(){
	if (bourse >=5){
		bourse = bourse - 5;
		potionAgi++;
		alert ("Veut tu acheter cette potion ?");
	}
	else{
		alert("Nan ? Alors dégage de ma boutique");
	}
}
















