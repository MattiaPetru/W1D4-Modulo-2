/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
1. String = sequenza di caratteri delimitati con ""
2. Number = dato di tipo numerico (può essere intero integer o decimale floating)
3. Boolean = dato di tipo booleano (i valori possono essere True o False)
4. Undefined = viene definito quando il valore della variabile non è stato asseganto
5. Null = rappresenta un valore nullo o vuoto (ma di solito viene definito da noi )
6. Array = lisa di dati (può contenere più elementi)   [1, 2, 3, 4]
7. Object = insieme di coppie chiave-valore (insieme di variabili)  { nome: "Mattia", cognome: "Petruzzi" }
 
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
é un insieme di coppie chiave-valore che descrivono la variabile stessa! (può contenere sia stringhe, numeri, booleani,..) Piccolo esempio:

let persona = {
  nome: "Mattia",
  cognome: "Petruzzi",
  età: 31,
  } */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let risultato3 = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Mattia Petruzzi";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let risultato6 = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "jhon";
let name2 = "Jhon";
console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());

/* ESERCIZIO 8
Crea un oggetto di Javascript che ti rappresenti(come proprietà usa nome, cognome e hobby)
*/
let persona = {
  nome: "Mattia",
  cognome: "Petruzzi",
  età: 31,
  hobby: "Programmazione",
};
