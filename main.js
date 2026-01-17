const translations = {
  en: {
    title: "Macronutrient Calculator",
    subtitle: "Estimate calories (TDEE) and split them into protein, fats, and carbs. All in one page, no tracking required.",
    yourDetails: "Your details",
    sex: "Sex",
    male: "Male",
    female: "Female",
    age: "Age",
    weight: "Weight (kg)",
    height: "Height (cm)",
    activity: "Activity level",
    act1: "Sedentary (little or no exercise)",
    act2: "Light exercise (1–3 days/week)",
    act3: "Moderate exercise (3–5 days/week)",
    act4: "Heavy exercise (6–7 days/week)",
    act5: "Athlete (twice per day)",
    goalHeader: "Goal",
    target: "Target",
    goal1: "Maximum fat loss (-20%)",
    goal2: "Fat loss (-10%)",
    goal3: "Maintain (0%)",
    goal4: "Gain (+10%)",
    goal5: "Gain a lot (+20%)",
    macroMethod: "Macronutrient method",
    sort: "Sort",
    sortPercent: "By percentages (P/F/C)",
    sortPreset: "By preset templates",
    protein: "Protein %",
    fat: "Fat %",
    carb: "Carb %",
    calculate: "Calculate",
    reset: "Reset",
    tdee: "TDEE (est.)",
    dailyTarget: "Daily target",
    bmr: "BMR",
    macro: "Macronutrient",
    grams: "Grams / day",
    calories: "Calories",
    percent: "Percent",
    total: "Total",
    footer: "Protein and carbohydrates = 4 kcal/g, fat = 9 kcal/g.",
    errorInputs: "Enter age, weight, height",
    errorMacro: "Sum must be 100%. Now:",
    presetLabel: "Preset",
    presetBalanced: "Balanced (30/30/40)",
    presetHighProtein: "High protein (40/30/30)",
    presetLowCarb: "Low carb (30/35/35)",
    presetKeto: "Keto (20/70/10)"
  },

  lv: {
    title: "Makroelementu kalkulators",
    subtitle: "Aprēķini TDEE un sadali kalorijas olbaltumvielās, taukos un ogļhidrātos. Viss vienā lapā, bez izsekošanas.",
    yourDetails: "Tavi dati",
    sex: "Dzimums",
    male: "Vīrietis",
    female: "Sieviete",
    age: "Vecums",
    weight: "Svars (kg)",
    height: "Garums (cm)",
    activity: "Aktivitātes līmenis",
    act1: "Mazkustīgs (maz vai nav aktivitātes)",
    act2: "Vieglas aktivitātes (1–3 dienas nedēļā)",
    act3: "Vidējas aktivitātes (3–5 dienas nedēļā)",
    act4: "Intensīvas aktivitātes (6–7 dienas nedēļā)",
    act5: "Sportists (2 reizes dienā)",
    goalHeader: "Mērķis",
    target: "Mērķis",
    goal1: "Maksimāls tauku zudums (-20%)",
    goal2: "Tauku zudums (-10%)",
    goal3: "Uzturēt (0%)",
    goal4: "Palielināt (+10%)",
    goal5: "Palielināt daudz (+20%)",
    macroMethod: "Makroelementu metode",
    sort: "Kārtot",
    sortPercent: "Pēc procentiem (O/T/Og)",
    sortPreset: "Pēc gataviem šabloniem",
    protein: "Olbaltumvielas %",
    fat: "Tauki %",
    carb: "Ogļhidrāti %",
    calculate: "Aprēķināt",
    reset: "Atiestatīt",
    tdee: "TDEE (apr.)",
    dailyTarget: "Dienas mērķis",
    bmr: "BMR",
    macro: "Makroelements",
    grams: "Grami dienā",
    calories: "Kalorijas",
    percent: "Procenti",
    total: "Kopā",
    footer: "Olbaltumvielas un ogļhidrāti = 4 kcal/g, tauki = 9 kcal/g.",
    errorInputs: "Ievadiet vecumu, svaru, garumu",
    errorMacro: "Summai jābūt 100%. Tagad:",
    presetLabel: "Šablons",
    presetBalanced: "Sabalansēts (30/30/40)",
    presetHighProtein: "Augsts proteīns (40/30/30)",
    presetLowCarb: "Maz ogļhidrātu (30/35/35)",
    presetKeto: "Keto (20/70/10)"
  }
};

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("langEN").addEventListener("click", () => applyLanguage("en"));
  document.getElementById("langLV").addEventListener("click", () => applyLanguage("lv"));

  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);

  const presetContainer = document.getElementById("presetContainer");
  const presetSelect = document.getElementById("presetSelect");

  const inputs = {
    sex: document.getElementById("dzimte"),
    age: document.getElementById("vecums"),
    weight: document.getElementById("svars"),
    height: document.getElementById("garums"),
    activity: document.getElementById("aktivitate"),
    goal: document.getElementById("merkis"),
    protein: document.getElementById("protein"),
    fat: document.getElementById("fat"),
    carb: document.getElementById("carb"),
    sort: document.getElementById("sort")
  };

  const calcBtn = document.querySelector("button[data-i18n='calculate']");
  const resetBtn = document.querySelector("button[data-i18n='reset']");
  const pie = document.querySelector(".pie");

  const tdeeBox = document.getElementById("tdeeValue");
  const targetBox = document.getElementById("targetValue");
  const bmrBox = document.getElementById("bmrValue");

  const warningBox = document.createElement("div");
  warningBox.style.color = "red";
  warningBox.style.marginTop = "10px";
  inputs.carb.parentNode.appendChild(warningBox);

  const table = {
    protein: {
      grams: document.querySelector("table tr:nth-child(2) td:nth-child(2)"),
      calories: document.querySelector("table tr:nth-child(2) td:nth-child(3)"),
      percent: document.querySelector("table tr:nth-child(2) td:nth-child(4)")
    },
    fat: {
      grams: document.querySelector("table tr:nth-child(3) td:nth-child(2)"),
      calories: document.querySelector("table tr:nth-child(3) td:nth-child(3)"),
      percent: document.querySelector("table tr:nth-child(3) td:nth-child(4)")
    },
    carb: {
      grams: document.querySelector("table tr:nth-child(4) td:nth-child(2)"),
      calories: document.querySelector("table tr:nth-child(4) td:nth-child(3)"),
      percent: document.querySelector("table tr:nth-child(4) td:nth-child(4)")
    },
    total: {
      grams: document.querySelector("table tr:nth-child(5) th:nth-child(2)"),
      calories: document.querySelector("table tr:nth-child(5) th:nth-child(3)"),
      percent: document.querySelector("table tr:nth-child(5) th:nth-child(4)")
    }
  };

  const activityMap = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    athlete: 1.9
  };

  const macroPresets = {
    balanced: { protein: 30, fat: 30, carb: 40 },
    highProtein: { protein: 40, fat: 30, carb: 30 },
    lowCarb: { protein: 30, fat: 35, carb: 35 },
    keto: { protein: 20, fat: 70, carb: 10 }
  };

  function applySortMethod() {
    const method = inputs.sort.value;

    presetContainer.style.display = "none";

    if (method === "percent") {
      updateMacroInputs();
      return;
    }

    if (method === "preset") {
      presetContainer.style.display = "block";
      const preset = macroPresets[presetSelect.value];
      inputs.protein.value = preset.protein;
      inputs.fat.value = preset.fat;
      inputs.carb.value = preset.carb;
      validateMacros();
      return;
    }
  }

  const macroBySex = {
    male: { protein: 30, fat: 25, carb: 45 },
    female: { protein: 25, fat: 30, carb: 45 }
  };

  const macroGoalAdjust = {
    goal1: { protein: +10, fat: -5, carb: -5 },
    goal2: { protein: +2, fat: -2, carb: 0 },
    goal3: { protein: 0, fat: 0, carb: 0 },
    goal4: { protein: -2, fat: +2, carb: 0 },
    goal5: { protein: -10, fat: +5, carb: +5 }
  };

  function updateMacroInputs() {
    const sex = inputs.sex.value;
    const goal = inputs.goal.value;

    const base = macroBySex[sex];
    const adj = macroGoalAdjust[goal];

    inputs.protein.value = base.protein + adj.protein;
    inputs.fat.value = base.fat + adj.fat;
    inputs.carb.value = base.carb + adj.carb;

    validateMacros();
  }

  inputs.sort.addEventListener("change", applySortMethod);

  inputs.sex.addEventListener("change", updateMacroInputs);
  inputs.goal.addEventListener("change", updateMacroInputs);

  presetSelect.addEventListener("change", () => {
    const preset = macroPresets[presetSelect.value];
    inputs.protein.value = preset.protein;
    inputs.fat.value = preset.fat;
    inputs.carb.value = preset.carb;
    validateMacros();
  });

  document.querySelectorAll("input[type='number']").forEach((input) => {
    input.setAttribute("min", "0");
    input.addEventListener("input", () => {
      if (input.value < 0) input.value = 0;
      validateMacros();
    });
  });

  function validateMacros() {
    const p = Number(inputs.protein.value);
    const f = Number(inputs.fat.value);
    const c = Number(inputs.carb.value);

    const sum = p + f + c;

    if (sum !== 100) {
      const lang = localStorage.getItem("lang") || "en";
      warningBox.textContent = `${translations[lang].errorMacro} ${sum}%`;
      calcBtn.disabled = true;
      return false;
    }

    warningBox.textContent = "";
    calcBtn.disabled = false;
    return true;
  }

  function calculate() {
    if (!validateMacros()) return;

    const age = Number(inputs.age.value);
    const weight = Number(inputs.weight.value);
    const height = Number(inputs.height.value);

    const lang = localStorage.getItem("lang") || "en";

    if (age <= 0 || weight <= 0 || height <= 0) {
      warningBox.textContent = translations[lang].errorInputs;
      return;
    }

    let proteinP = Number(inputs.protein.value);
    let fatP = Number(inputs.fat.value);
    let carbP = Number(inputs.carb.value);

    let dzimtesConstant;
    if (inputs.sex.value === "male") {
      dzimtesConstant = 5;
    } else {
      dzimtesConstant = -161;
    }

    let bmr =
      10 * weight +
      6.25 * height -
      5 * age +
      dzimtesConstant;

    const activity = activityMap[inputs.activity.value];
    const tdee = bmr * activity;

    const goalMap = {
      goal1: 0.8,
      goal2: 0.9,
      goal3: 1.0,
      goal4: 1.1,
      goal5: 1.2
    };

    const target = Math.round(tdee * goalMap[inputs.goal.value]);

    const proteinCalories = (target * proteinP) / 100;
    const fatCalories = (target * fatP) / 100;
    const carbCalories = (target * carbP) / 100;

    const gramsProtein = proteinCalories / 4;
    const gramsFat = fatCalories / 9;
    const gramsCarb = carbCalories / 4;

    tdeeBox.innerText = Math.round(tdee) + " kcal";
    targetBox.innerText = Math.round(target) + " kcal";
    bmrBox.innerText = Math.round(bmr) + " kcal";

    table.protein.grams.innerText = gramsProtein.toFixed(1);
    table.protein.calories.innerText = Math.round(proteinCalories);
    table.protein.percent.innerText = proteinP + "%";

    table.fat.grams.innerText = gramsFat.toFixed(1);
    table.fat.calories.innerText = Math.round(fatCalories);
    table.fat.percent.innerText = fatP + "%";

    table.carb.grams.innerText = gramsCarb.toFixed(1);
    table.carb.calories.innerText = Math.round(carbCalories);
    table.carb.percent.innerText = carbP + "%";

    table.total.grams.innerText = (
      gramsProtein +
      gramsFat +
      gramsCarb
    ).toFixed(1);
    table.total.calories.innerText = target;
    table.total.percent.innerText = "100%";

    const angleProtein = proteinP * 3.6;
    const angleFat = angleProtein + fatP * 3.6;

    pie.style.background = `conic-gradient(
      #002aff 0deg ${angleProtein}deg,
      #51ff00 ${angleProtein}deg ${angleFat}deg,
      #ff0000 ${angleFat}deg 360deg
    )`;
  }

  function resetAll() {
    Object.values(inputs).forEach((el) => {
      if (el.tagName === "INPUT") el.value = 0;
    });
    warningBox.textContent = "";
  }

  calcBtn.addEventListener("click", calculate);
  resetBtn.addEventListener("click", resetAll);

  updateMacroInputs();
});
