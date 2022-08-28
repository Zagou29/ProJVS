const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const form = document.querySelector("form");
const entrées = form.querySelectorAll("input");
const output = document.querySelector(".output");
const res_imc = output.querySelector(".imc");
const pres_com = output.querySelector(".commentaire");
const com_in = pres_com.textContent;
const res_in = res_imc.textContent;
const mise_a_blanc = () => {
  output.style.background = "white";
  pres_com.textContent = com_in;
  res_imc.textContent = res_in;
};
const erreur = () => {
  setTimeout(mise_a_blanc, 2000);
  res_imc.textContent = "OOPS";
  output.style.background = "red";
  pres_com.textContent = " Rentrer des valeurs conformes !";
};
const montre = (imc) => {
  res_imc.textContent = imc;
  const rank = BMIData.find((r) => {
    if (imc >= r.range[0] && imc < r.range[1]) return r;
    else if (typeof r.range === "number" && imc > r.range) return r;
  });
  pres_com.textContent = rank.name;
  output.style.color = rank.color;
};

const calcul_imc = () => {
  taille = entrées[0].value;
  poids = entrées[1].value;
  if (!taille || !poids) {
    erreur();
    return;
  }
  const imc = (poids / Math.pow(taille / 100, 2)).toFixed(2);
  montre(imc);
};

const gerer_form = (e) => {
  e.preventDefault();
  calcul_imc();
};

form.addEventListener("submit", gerer_form);

const res_test = (imr) => {
  BMIData.find((data) => {
    if (imr >= data.range[0] && imr < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });
};
