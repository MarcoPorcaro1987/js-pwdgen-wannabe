// 1. Chiedi il nome
var nome = prompt("Inserisci il nome")
// 2. Chiedi il cognome
var cognome = prompt("Inserisci il tuo cognome")
// 3. Chiedi il colore preferito
var colore = prompt("Inserisci il tuo colore preferito")
// 4. Scrivi le risposte + il numero della tua classe
var identificazione = nome + cognome + colore + 40;
document.getElementById("identificazione").innerHTML = identificazione;