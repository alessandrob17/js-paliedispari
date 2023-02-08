
// INSERIRE UNA PAROLA 
let parola = prompt("Inserisci una parola:");

// FUNZIONE
  function parolaPalindroma(parola) {
  let parolaInversa = parola.split("").reverse().join("");
  return parola === parolaInversa;
}

// OUTPUT
if (parolaPalindroma(parola)) {
  console.log("La parola inserita è palindroma.");
} else {
  console.log("La parola inserita non è palindroma.");
}
