let panier = [15, 42, 5, 89, 12, 50, 8];

let sommeTotale = 0;
let nombreChers = 0;
let sommeChers = 0;

for (let i = 0; i < panier.length; i++) {
    sommeTotale = sommeTotale + panier[i];

    if (panier[i] >= 20) {
        nombreChers++;                 
        sommeChers = sommeChers + panier[i]; 
    }
}

console.log("Total du panier :", sommeTotale);
console.log("Nombre d'articles chers :", nombreChers);
console.log("Montant des articles chers :", sommeChers);