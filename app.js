// INSERIRE UNA PAROLA 

let parola = prompt('Inserisci una parola');


// FUNZIONE

function pPalindroma(parola) {
    let parolaInversa = parola.split("").reverse().join("");
  return parola === parolaInversa;
}

