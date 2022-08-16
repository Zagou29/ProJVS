const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const boite = document.querySelector(".calc_box");
const taille = boite.querySelector("#taille");
const poids = boite.querySelector("#poids");
const bouton = boite.querySelector(".go");
const solution = boite.querySelector(".resultat");

boite.addEventListener("click", () => {
  solution.textContent = resultat(poids.value, taille.value).toFixed(2);
});
console.log(BMIData[3[3]])

const resultat = (p, t) => {
  return (p * 10000) / (t * t);
};
