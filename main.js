const translations = {
    en: {
        virsraksts: "Macronutrient Calculator",
        apaksteksts: "Estimate calories (TDEE) and split them into protein, fats, and carbs.",
        taviDati: "Your details",
        dzimte: "Sex",
        virietis: "Male",
        sieviete: "Female",
        vecums: "Age",
        svars: "Weight (kg)",
        garums: "Height (cm)",
        aktivitate: "Activity level",
        akt1: "Sedentary (little or no exercise)",
        akt2: "Light exercise (1–3 days/week)",
        akt3: "Moderate exercise (3–5 days/week)",
        akt4: "Heavy exercise (6–7 days/week)",
        akt5: "Athlete (twice per day)",
        merkisVirsraksts: "Goal",
        merkis: "Target",
        merkis1: "Maximum fat loss (-20%)",
        merkis2: "Fat loss (-10%)",
        merkis3: "Maintain (0%)",
        merkis4: "Gain (+10%)",
        merkis5: "Gain a lot (+20%)",
        makroMetode: "Macronutrient method",
        kartosana: "Sort",
        kartProc: "By percentages",
        kartSabloni: "By preset templates",
        sablonaNosaukums: "Preset",
        sablonsSabalansēts: "Balanced (30/30/40)",
        sablonsAugstsProteins: "High protein (40/30/30)",
        sablonsMazOglhidratu: "Low carb (30/35/35)",
        sablonsKeto: "Keto (20/70/10)",
        olbaltumvielas: "Protein %",
        tauki: "Fat %",
        oglhidrati: "Carb %",
        aprekinat: "Calculate",
        atiestatit: "Reset",
        tdee: "TDEE (est.)",
        dienasMerkis: "Daily target",
        bmr: "BMR",
        makroelementi: "Macronutrient",
        grami: "Grams / day",
        kalorijas: "Calories",
        procenti: "Percent",
        kopa: "Total",
        formulas: "Formulas",
        formulaBMR: "BMR (Mifflin–St Jeor):",
        formulaBMRVirietis: "Men: BMR = 10×weight + 6.25×height – 5×age + 5",
        formulaBMRSieviete: "Women: BMR = 10×weight + 6.25×height – 5×age – 161",
        formulaTDEE: "TDEE = BMR × activity factor",
        formulaDienasMerkis: "Daily target = TDEE × goal modifier",
        formulaMakroKalorijas: "Calories per macronutrient:",
        formulaOlbaltumvieluKcal: "Protein kcal = Target × (Protein% ÷ 100)",
        formulaTaukuKcal: "Fat kcal = Target × (Fat% ÷ 100)",
        formulaOglhidratuKcal: "Carb kcal = Target × (Carb% ÷ 100)",
        formulaMakroGrami: "Grams per macronutrient:",
        formulaOlbaltumvieluG: "Protein g = Protein kcal ÷ 4",
        formulaTaukuG: "Fat g = Fat kcal ÷ 9",
        formulaOglhidratuG: "Carb g = Carb kcal ÷ 4",
        piezime: "Protein and carbohydrates = 4 kcal/g, fat = 9 kcal/g.",
        kludaIevade: "Enter age, weight, height",
        kludaMakro: "Sum must be 100%. Now:",
        Olbaltumvielas: "Protein",
        Tauki: "Fat",
        Ogļhidrāti: "Carbonates"
    },

    lv: {
        virsraksts: "Makroelementu kalkulators",
        apaksteksts: "Aprēķini TDEE un sadali kalorijas olbaltumvielās, taukos un ogļhidrātos.",
        taviDati: "Tavi dati",
        dzimte: "Dzimums",
        virietis: "Vīrietis",
        sieviete: "Sieviete",
        vecums: "Vecums",
        svars: "Svars (kg)",
        garums: "Garums (cm)",
        aktivitate: "Aktivitātes līmenis",
        akt1: "Mazkustīgs (maz vai nav aktivitātes)",
        akt2: "Vieglas aktivitātes (1–3 dienas nedēļā)",
        akt3: "Vidējas aktivitātes (3–5 dienas nedēļā)",
        akt4: "Intensīvas aktivitātes (6–7 dienas nedēļā)",
        akt5: "Sportists (2 reizes dienā)",
        merkisVirsraksts: "Mērķis",
        merkis: "Mērķis",
        merkis1: "Maksimāls tauku zudums (-20%)",
        merkis2: "Tauku zudums (-10%)",
        merkis3: "Uzturēt (0%)",
        merkis4: "Palielināt (+10%)",
        merkis5: "Palielināt daudz (+20%)",
        makroMetode: "Makroelementu metode",
        kartosana: "Kārtot",
        kartProc: "Pēc procentiem",
        kartSabloni: "Pēc šabloniem",
        sablonaNosaukums: "Šablons",
        sablonsSabalansēts: "Sabalansēts (30/30/40)",
        sablonsAugstsProteins: "Augsts proteīns (40/30/30)",
        sablonsMazOglhidratu: "Maz ogļhidrātu (30/35/35)",
        sablonsKeto: "Keto (20/70/10)",
        olbaltumvielas: "Olbaltumvielas %",
        tauki: "Tauki %",
        oglhidrati: "Ogļhidrāti %",
        aprekinat: "Aprēķināt",
        atiestatit: "Atiestatīt",
        tdee: "TDEE",
        dienasMerkis: "Dienas mērķis",
        bmr: "BMR",
        makroelementi: "Makroelementi",
        grami: "Grami dienā",
        kalorijas: "Kalorijas",
        procenti: "Procenti",
        kopa: "Kopā",
        formulas: "Formulas",
        formulaBMR: "BMR (Mifflin–St Jeor):",
        formulaBMRVirietis: "Vīrieši: BMR = 10×svars + 6.25×garums – 5×vecums + 5",
        formulaBMRSieviete: "Sievietes: BMR = 10×svars + 6.25×garums – 5×vecums – 161",
        formulaTDEE: "TDEE = BMR × aktivitātes koeficients",
        formulaDienasMerkis: "Dienas mērķis = TDEE × mērķa koeficients",
        formulaMakroKalorijas: "Kalorijas pēc makroelementiem:",
        formulaOlbaltumvieluKcal: "Olbaltumvielu kcal = Mērķis × (Olb.% ÷ 100)",
        formulaTaukuKcal: "Tauku kcal = Mērķis × (Tauk.% ÷ 100)",
        formulaOglhidratuKcal: "Ogļhidrātu kcal = Mērķis × (Ogļh.% ÷ 100)",
        formulaMakroGrami: "Grami pēc makroelementiem:",
        formulaOlbaltumvieluG: "Olbaltumvielas g = Olb. kcal ÷ 4",
        formulaTaukuG: "Tauki g = Tauk. kcal ÷ 9",
        formulaOglhidratuG: "Ogļhidrāti g = Ogļh. kcal ÷ 4",
        piezime: "Olbaltumvielas un ogļhidrāti = 4 kcal/g, tauki = 9 kcal/g.",
        kludaIevade: "Ievadiet vecumu, svaru, garumu",
        kludaMakro: "Summai jābūt 100%. Tagad:",
        Olbaltumvielas: "Olbamtumvielas",
        Tauki: "Tauki",
        Ogļhidrāti: "Ogļhidrāti"
    }
};


function applyLanguage(valoda) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const atsl = el.getAttribute("data-i18n");
        el.textContent = translations[valoda][atsl];
    });
    localStorage.setItem("lang", valoda);
}

document.addEventListener("DOMContentLoaded", () => {

    const akordeonaGalvene = document.querySelector(".accordion-header");
    const akordeonaSaturs = document.querySelector(".accordion-content");

    akordeonaGalvene.addEventListener("click", () => {
        const irAtverts = akordeonaSaturs.style.maxHeight;

        if (irAtverts) {
            akordeonaSaturs.style.maxHeight = null;
            akordeonaSaturs.classList.remove("open");
        } else {
            akordeonaSaturs.style.maxHeight = akordeonaSaturs.scrollHeight + "px";
            akordeonaSaturs.classList.add("open");
        }
    });

    document.getElementById("valodaEN").addEventListener("click", () => applyLanguage("en"));
    document.getElementById("valodaLV").addEventListener("click", () => applyLanguage("lv"));

    const saglabataValoda = localStorage.getItem("lang") || "lv";
    applyLanguage(saglabataValoda);

    const sablonaKonteneris = document.getElementById("sablonaKonteneris");
    const sablonaIzvele = document.getElementById("sablonaIzvele");

    const ievades = {
        dzimte: document.getElementById("dzimte"),
        vecums: document.getElementById("vecums"),
        svars: document.getElementById("svars"),
        garums: document.getElementById("garums"),
        aktivitate: document.getElementById("aktivitate"),
        merkis: document.getElementById("merkis"),
        olbaltumvielas: document.getElementById("olbaltumvielas"),
        tauki: document.getElementById("tauki"),
        oglhidrati: document.getElementById("oglhidrati"),
        kartosana: document.getElementById("kartosana")
    };

    const aprekinatPoga = document.querySelector("button[data-i18n='aprekinat']");
    const atiestatitPoga = document.querySelector("button[data-i18n='atiestatit']");
    const pogaDiagramma = document.querySelector(".pie");

    const tdeeLauks = document.getElementById("tdeeLauks");
    const dienasMerkisLauks = document.getElementById("dienasMerkisLauks");
    const bmrLauks = document.getElementById("bmrLauks");

    const bridinajums = document.createElement("div");
    bridinajums.style.color = "yellow";
    bridinajums.style.marginTop = "10px";
    bridinajums.style.fontWeight = "bold";
    ievades.oglhidrati.parentNode.appendChild(bridinajums);

    const tabula = {
        olbaltumvielas: {
            grami: document.querySelector("table tr:nth-child(2) td:nth-child(2)"),
            kalorijas: document.querySelector("table tr:nth-child(2) td:nth-child(3)"),
            procenti: document.querySelector("table tr:nth-child(2) td:nth-child(4)")
        },
        tauki: {
            grami: document.querySelector("table tr:nth-child(3) td:nth-child(2)"),
            kalorijas: document.querySelector("table tr:nth-child(3) td:nth-child(3)"),
            procenti: document.querySelector("table tr:nth-child(3) td:nth-child(4)")
        },
        oglhidrati: {
            grami: document.querySelector("table tr:nth-child(4) td:nth-child(2)"),
            kalorijas: document.querySelector("table tr:nth-child(4) td:nth-child(3)"),
            procenti: document.querySelector("table tr:nth-child(4) td:nth-child(4)")
        },
        kopa: {
            grami: document.querySelector("table tr:nth-child(5) th:nth-child(2)"),
            kalorijas: document.querySelector("table tr:nth-child(5) th:nth-child(3)"),
            procenti: document.querySelector("table tr:nth-child(5) th:nth-child(4)")
        }
    };

    const aktivitatesKarte = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        heavy: 1.725,
        athlete: 1.9
    };

    const makroSabloni = {
        balanced: {
            olbaltumvielas: 30,
            tauki: 30,
            oglhidrati: 40
        },
        highProtein: {
            olbaltumvielas: 40,
            tauki: 30,
            oglhidrati: 30
        },
        lowCarb: {
            olbaltumvielas: 30,
            tauki: 35,
            oglhidrati: 35
        },
        keto: {
            olbaltumvielas: 20,
            tauki: 70,
            oglhidrati: 10
        }
    };

    sablonaKonteneris.style.display = "none";

    function pielietotKartosanasMetodi() {
        const metode = ievades.kartosana.value;

        sablonaKonteneris.style.display = "none";

        if (metode === "percent") {
            atjaunotMakroIevadi();
            sablonaKonteneris.style.display = "none";

            return;
        } else {
            sablonaKonteneris.style.display = "block";
            const sablons = makroSabloni[sablonaIzvele.value];
            ievades.olbaltumvielas.value = sablons.olbaltumvielas;
            ievades.tauki.value = sablons.tauki;
            ievades.oglhidrati.value = sablons.oglhidrati;
            parbauditMakro();
            return;
        }
    }

    const makroPecDzimuma = {
        male: {
            olbaltumvielas: 30,
            tauki: 25,
            oglhidrati: 45
        },
        female: {
            olbaltumvielas: 25,
            tauki: 30,
            oglhidrati: 45
        }
    };

    const makroMerkaKorekcija = {
        goal1: {
            olbaltumvielas: +10,
            tauki: -5,
            oglhidrati: -5
        },
        goal2: {
            olbaltumvielas: +2,
            tauki: -2,
            oglhidrati: 0
        },
        goal3: {
            olbaltumvielas: 0,
            tauki: 0,
            oglhidrati: 0
        },
        goal4: {
            olbaltumvielas: -2,
            tauki: +2,
            oglhidrati: 0
        },
        goal5: {
            olbaltumvielas: -10,
            tauki: +5,
            oglhidrati: +5
        }
    };

    function atjaunotMakroIevadi() {
        const dzimte = ievades.dzimte.value;
        const merkis = ievades.merkis.value;

        const pamats = makroPecDzimuma[dzimte];
        const korekcija = makroMerkaKorekcija[merkis];

        ievades.olbaltumvielas.value = pamats.olbaltumvielas + korekcija.olbaltumvielas;
        ievades.tauki.value = pamats.tauki + korekcija.tauki;
        ievades.oglhidrati.value = pamats.oglhidrati + korekcija.oglhidrati;

        parbauditMakro();
    }

    ievades.kartosana.addEventListener("change", pielietotKartosanasMetodi);
    ievades.dzimte.addEventListener("change", atjaunotMakroIevadi);
    ievades.merkis.addEventListener("change", atjaunotMakroIevadi);

    sablonaIzvele.addEventListener("change", () => {
        const sablons = makroSabloni[sablonaIzvele.value];
        ievades.olbaltumvielas.value = sablons.olbaltumvielas;
        ievades.tauki.value = sablons.tauki;
        ievades.oglhidrati.value = sablons.oglhidrati;
        parbauditMakro();
    });

    document.querySelectorAll("input[type='number']").forEach((ievade) => {
        ievade.setAttribute("min", "0");
        ievade.addEventListener("input", () => {
            if (ievade.value < 0) ievade.value = 0;
            parbauditMakro();
        });
    });

    function parbauditMakro() {
        const p = Number(ievades.olbaltumvielas.value);
        const t = Number(ievades.tauki.value);
        const o = Number(ievades.oglhidrati.value);

        const summa = p + t + o;

        if (summa !== 100) {
            const valoda = localStorage.getItem("lang") || "lv";
            bridinajums.textContent = `${translations[valoda].kludaMakro} ${summa}%`;
            aprekinatPoga.disabled = true;
            return false;
        }

        bridinajums.textContent = "";
        aprekinatPoga.disabled = false;
        return true;
    }

    function aprekinat() {
        if (!parbauditMakro()) return;

        const vecums = Number(ievades.vecums.value);
        const svars = Number(ievades.svars.value);
        const garums = Number(ievades.garums.value);

        const valoda = localStorage.getItem("lang") || "lv";

        if (vecums <= 0 || svars <= 0 || garums <= 0) {
            bridinajums.textContent = translations[valoda].kludaIevade;
            return;
        }

        let olbProc = Number(ievades.olbaltumvielas.value);
        let tauProc = Number(ievades.tauki.value);
        let oglProc = Number(ievades.oglhidrati.value);

        let dzKonst;
        if (ievades.dzimte.value === "male") dzKonst = 5;
        else dzKonst = -161;

        let bmr =
            10 * svars +
            6.25 * garums -
            5 * vecums +
            dzKonst;

        const aktKoef = aktivitatesKarte[ievades.aktivitate.value];
        const tdee = bmr * aktKoef;

        const merkaKoef = {
            goal1: 0.8,
            goal2: 0.9,
            goal3: 1.0,
            goal4: 1.1,
            goal5: 1.2
        };

        const merkisKcal = Math.round(tdee * merkaKoef[ievades.merkis.value]);

        const olbKcal = (merkisKcal * olbProc) / 100;
        const tauKcal = (merkisKcal * tauProc) / 100;
        const oglKcal = (merkisKcal * oglProc) / 100;

        const grOlb = olbKcal / 4;
        const grTau = tauKcal / 9;
        const grOgl = oglKcal / 4;

        tdeeLauks.innerText = Math.round(tdee) + " kcal";
        dienasMerkisLauks.innerText = Math.round(merkisKcal) + " kcal";
        bmrLauks.innerText = Math.round(bmr) + " kcal";

        tabula.olbaltumvielas.grami.innerText = grOlb.toFixed(1);
        tabula.olbaltumvielas.kalorijas.innerText = Math.round(olbKcal);
        tabula.olbaltumvielas.procenti.innerText = olbProc + "%";

        tabula.tauki.grami.innerText = grTau.toFixed(1);
        tabula.tauki.kalorijas.innerText = Math.round(tauKcal);
        tabula.tauki.procenti.innerText = tauProc + "%";

        tabula.oglhidrati.grami.innerText = grOgl.toFixed(1);
        tabula.oglhidrati.kalorijas.innerText = Math.round(oglKcal);
        tabula.oglhidrati.procenti.innerText = oglProc + "%";

        tabula.kopa.grami.innerText = (grOlb + grTau + grOgl).toFixed(1);
        tabula.kopa.kalorijas.innerText = merkisKcal;
        tabula.kopa.procenti.innerText = "100%";

        const lenkisOlb = olbProc * 3.6;
        const lenkisTau = lenkisOlb + tauProc * 3.6;

        pogaDiagramma.style.background = `conic-gradient(
      #002aff 0deg ${lenkisOlb}deg,
      #51ff00 ${lenkisOlb}deg ${lenkisTau}deg,
      #ff0000 ${lenkisTau}deg 360deg
    )`;
    }

    function atiestatitVisu() {
        Object.values(ievades).forEach((el) => {
            if (el.tagName === "INPUT") el.value = 0;
        });
        bridinajums.textContent = "";
    }

    aprekinatPoga.addEventListener("click", aprekinat);
    atiestatitPoga.addEventListener("click", atiestatitVisu);

    atjaunotMakroIevadi();
});
