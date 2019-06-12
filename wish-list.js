let liste = "";
let souhaitBalise = "";

const ajouterSouhait = () => {
	let nouveauSouhait = document.getElementById('text').value;
	souhaitBalise = "<li>" + nouveauSouhait + "</li>";

	liste += souhaitBalise;

	document.getElementById('listfull').innerHTML = liste;
	document.getElementById('text').value = "";
};

const supprimerListe = () => {
	document.getElementById('listfull').innerHTML = "";
	liste = "";
};

document.getElementById('envoyer').addEventListener('click', ajouterSouhait);
document.getElementById('suppr').addEventListener('click', supprimerListe);



