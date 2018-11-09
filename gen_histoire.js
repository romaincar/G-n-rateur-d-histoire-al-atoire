
// initialisation des tableaux

var noms = ['michel varuk','jim carrey','albert einstein','vivaldi','emma watson','renaud', 'eminem','paul rudd','jacques','bernadette','johnny depp','the rock','lea','nina','julien lepers','hugh jackman','jacquie','michel','gotaga','phillipe etchebest','hp lovecraft','bill gates'];

var objets = ['ordinateur','telephone','montre','de a coudre','decapsuleur','ballon','clavier','marteau','piece jaune','lunettes de soleil','sabre','cuillere','fourchette','tasse','manette','avion','miche de pain','velo'];

var temperatures = ['10°c','30°c','5°c','50°c','12°c','100°c','69°c','18°c','37°c','25°c','-30°c','-40°c','28°c','24°c','70°c'];

var lieux = ['floyon','wignehies','barcelone','paris','tokyo','reykjavik','bondy','rio de janeiro','le mans','le touquet','big ben','mont fuji','palais de elysee','mairie de paris','mc donalds','kfc','burger king','montcuq','chutes du niagara','hidepark'];

var verbes = ['coder','copier','coordonner','nager','monter','avoir','aimer','etre passionne','developper','jouer','soulever','evoluer','voter','arnaquer','manger','envoyer','enfourner','accomplir','communiquer'];

//
    var texte = document.getElementById("texte").value;

//

document.getElementById("bouton").addEventListener ('click',

    function () {

    for (var i=0; i < 3; i++) {

        var nom_random = Math.floor(Math.random() * 10);

        var nb_aleatoire_noms = noms[Math.floor(Math.random() * noms.length)];

        var nb_aleatoire_objets = objets[Math.floor(Math.random() * objets.length)];

        var nb_aleatoire_temperatures = temperatures[Math.floor(Math.random() * temperatures.length)];

        var nb_aleatoire_lieux = lieux[Math.floor(Math.random() * lieux.length)];

        var nb_aleatoire_verbes = verbes[Math.floor(Math.random() * verbes.length)];



        if (nom_random >= 5) {
            document.getElementById("affichage").innerHTML += nb_aleatoire_noms + " " + nb_aleatoire_objets + " " + nb_aleatoire_temperatures + " " + nb_aleatoire_lieux + " " + nb_aleatoire_verbes;

        }

        if (nom_random < 5) {
            document.getElementById("affichage").innerHTML += texte + " " + nb_aleatoire_objets + " " + nb_aleatoire_temperatures + " " + nb_aleatoire_lieux + " " + nb_aleatoire_verbes;
        }

    }


});




/* var recup_noms = noms[nb_aleatoire_noms];

        var recup_objets = objets[nb_aleatoire_objets];

        var recup_temperatures = temperatures[nb_aleatoire_temperatures];

        var recup_lieux = lieux[nb_aleatoire_lieux];

        var recup_verbes = verbes[nb_aleatoire_verbes]; */






