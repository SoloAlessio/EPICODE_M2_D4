console.log("\n");

// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const array = [] // array di utenti
const ambassadors = [] // array di ambassadors
const prices = [34, 5, 2] // array di prezzi
const shippingCost = 50 // costo di spedizione

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const alessio = {
  name: "Alessio",
  lastName: "Belcastro",
  isAmbassador: true,
}

const mattia = {
  name: "Mattia",
  lastName: "Martini",
  isAmbassador: true,
}

let count = array.push(marco, paul, amy, alessio, mattia) // inserisce tutti gli utennti nell'array

for (let i = 0; i < array.length; i++) { // filtra tutti gli utenti e li inserisce nell'array ambassadors
  if (array[i].isAmbassador == true) {
    ambassadors.push(array[i])
  } else {}
}

console.log("AMBASSADORS:\n-----------------------------------"); // TITOLO sezione ambassadors

for (let i = 0; i < ambassadors.length; i++) { // stampa tutti gli ambassadors
  console.log(ambassadors[i].name, ambassadors[i].lastName);
}
console.log("-----------------------------------\n");


let carrello = prices[0] + prices[1] + prices[2] // inserisce la somma di prezzi nel carrello

let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


console.log("UTENTI:\n-----------------------------------"); // TITOLO sezione utenti

for (let i = 0; i < count; i++) {  // stampa tutti gli utenti dividendoli per ambassadors
  if(array[i].isAmbassador == true){
    console.log(array[i].name, array[i].lastName, "è un ambassador");
  } else{
    console.log(array[i].name, array[i].lastName, "non è un ambassador");
  }
}
console.log("-----------------------------------\n");



console.log("Prezzo totale del carrelo:", carrello);

if (utenteCheEffettuaLAcquisto.isAmbassador == true){
  carrello = carrello - (carrello * 30 / 100) // applica sconto del 30%
  console.log("Sconto del 30% applicato:", carrello);
  if (carrello < 100){ // se il carrello è superiore a 100, la spedizione è gratuita
    carrello += shippingCost
    console.log("Spedizione:", shippingCost);
  }
  console.log("Il totale del carrelo di", utenteCheEffettuaLAcquisto.name,"è:", carrello);

} else {
  if (carrello < 100){
    carrello += shippingCost
    console.log("Spedizione:", shippingCost);
  }
  console.log("Il totale del carrelo di", utenteCheEffettuaLAcquisto.name,"è:", carrello);
}