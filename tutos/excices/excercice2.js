let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let CA=0;
let Maximum=ventes[0];
let Minimum=ventes[0];
let NbVentesEX=0;
let sommeVentesEx=0;

console.log("Le nombre total de ventes réalisées",ventes.length);
for (let i=0;i<ventes.length;i++){
    CA+=ventes[i];
    if(ventes[i]>=Maximum){
        Maximum=ventes[i];

    }
    if (ventes[i]<Minimum){
        Minimum=ventes[i];
    }
    if (ventes[i]>=130){
        NbVentesEX++;
        sommeVentesEx+=ventes[i];
        }

}
console.log("Le chiffre d’affaires total (la somme)",CA);
console.log ("le Maximum est :",Maximum);
console.log("le minimum est :",Minimum);
console.log("Le nombre de ventes “Exceptionnelles”:",NbVentesEX);
console.log("total de ventes Exceptionnelles :",sommeVentesEx);