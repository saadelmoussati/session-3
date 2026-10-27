const prompt=require("prompt-sync")();

let notes=[];
let taille=5;
let somme=0;

// notes[0]=10;
// notes[1]=11;
// notes[2]=12;
// notes[3]=13;
// notes[4]=14;



for(let i=0;i<taille;i++){
    notes[i]=Number(prompt("entre la not "+(i+1)+":" ));
    somme=somme+notes[i];


}
console.log(notes);
console.log("le moyene des notes est :",somme /5);