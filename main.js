//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const biciclette = [
    { nome: "Bianchi", peso: 7.5 },
    { nome: "Trek", peso: 6.8 },
    { nome: "Specialized", peso: 7.0 },
    { nome: "Cannondale", peso: 6.5 }
];

let biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
      biciLeggera = biciclette[i];
    }
};

//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const squadre = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
];

const nomiEFalli = squadre.map(squadra => {
    return { nome: squadra.nome, falliSubiti: squadra.falliSubiti };
});

console.log("Squadre originali:", squadre);
console.log("Nomi e falli subiti:", nomiEFalli);