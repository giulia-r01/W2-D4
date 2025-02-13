/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2
}

console.log("Base 35 per Altezza 20 = ", area(35, 20))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3
  } else {
    return n1 + n2
  }
}
console.log("Valore ottenuto", crazySum(2, 2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1, n2 = 19) {
  if (Math.abs(n1 - n2) > 19) {
    return Math.abs(n1 - n2) * 3
  } else {
    return Math.abs(n1 - n2)
  }
}

console.log("n1 - n2 fa: ", crazyDiff(100))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (num1) {
  if ((num1 >= 20 && num1 <= 100) || num1 === 400) {
    return true
  } else {
    return num1
  }
}

console.log("Il valore", boundary(100), "è compreso tra 20 e 100 oppure è 400")

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (txt = "Diventa Web Developer!") {
  if (txt.slice(0, 7) === "EPICODE") {
    return txt
  } else {
    return "EPICODE " + txt
  }
}

console.log("È venuto fuori:", epify())

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (numberPos) {
  if (numberPos % 3 === 0 && numberPos > 0) {
    return numberPos + " è un multiplo di 3"
  } else if (numberPos % 7 === 0 && numberPos > 0) {
    return numberPos + " è un multiplo di 7"
  } else {
    return numberPos + " non è un multiplo né di 3 né di 7"
  }
}

console.log(check3and7(27))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (txt2 = "EPICODE") {
  return (txt2 = txt2.split("").reverse().join(""))
}

console.log(reverseString())

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (txt3 = "questa è una stringa") {
  return (txt3 = txt3
    .split(" ")
    .map((txt3) => txt3.charAt(0).toUpperCase() + txt3.slice(1))
    .join(" "))
}

console.log(upperFirst())

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (txt4 = "Anche questa è una stringa") {
  return (txt4 = txt4.slice(1, 25))
}

console.log(cutString())

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (numToTxt) {
  let weirdNumbers = []
  for (let i = 0; i < numToTxt; i++) {
    weirdNumbers.push(Math.floor(Math.random() * 11))
  }
  return weirdNumbers
}

console.log(giveMeRandom(7))
