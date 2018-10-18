var inventaire = {
	potionForce  = 0,
	potionAgi = 0,
	potionEndu = 0,
	potionSoinMineur = 0,
	potionSoinMajeur = 0
} ;

function useForce(){
	monPerso.force++;
	inventaire.potionForce--;
}

function useAgi(){
	monPerso.agilite++;
	inventaire.potionAgi--;
}

function useEndu(){
	monPerso.endurance++;
	inventaire.potionEndu--;
}

function useSoinMineur(){
	monPerso.pv++;
	inventaire.potionSoinMineur--;
}

function useSoinMajeur(){
	monPerso.pv++;
	inventaire.potionSoinMajeur--;
}