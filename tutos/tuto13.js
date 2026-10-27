let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let caTotal = 0;
let max = ventes[0];
let min = ventes[0];
let nbExceptionnelles = 0;
let caExceptionnelles = 0;

for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];
    
    caTotal += vente;
    
    if (vente > max) {
        max = vente;
    }
    if (vente < min) {
        min = vente;
    }
    
    if (vente >= 130) {
        nbExceptionnelles++;
        caExceptionnelles += vente;
    }
}

console.log("Nombre total de ventes :", ventes.length);
console.log("Chiffre d'affaires total :", caTotal);
console.log("Vente la plus élevée (Max) :", max);
console.log("Vente la plus faible (Min) :", min);
console.log("Nombre de ventes exceptionnelles :", nbExceptionnelles);
console.log("CA généré par les ventes exceptionnelles :", caExceptionnelles);