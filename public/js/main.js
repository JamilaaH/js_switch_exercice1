// exo 1
// let jour = prompt("quel jour sommes-nous ?");

// switch (jour) {
//     case "lundi":
//         alert("on est lundi ! Aujourd'hui c'est cours et sport le soir");
//         break;
//     case "mardi":
//         alert("on est mardi ! Aujourd'hui c'est natation");
//         break;
//     case "mercredi":
//         alert("on est mercredi ! Day off , temps de repos");
//         break;
//     case "jeudi":
//         alert("on est jeudi ! Aujourd'hui c'est cours et sport le soir");
//         break;
//     case "vendredi":
//         alert("Le vendredi c'est test de resto ! ");
//         break;
//     case "samedi":
//     case "dimanche":
//         alert("Le weekend c'est repos total ! ");
//         break;

//     default:
//         alert('donnée incorrecte');
//         break;
// }

// exo 2
let age = parseInt(prompt("quel age avez vous?"));
switch (age>18) {
    case true:
        console.log("vous etes majeur");
        
        break;

    default:
        console.log("vs etes mineur");
        break;
}
