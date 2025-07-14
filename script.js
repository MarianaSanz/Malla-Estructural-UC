// ————————————————————————————————
// 1) Definición de cursos con prerequisitos (grupos de alternativas)
// ————————————————————————————————
const cursos = {
  // Primer año
  "MAT1610": { nombre: "MAT1610 Cálculo I", prereq: [] },
  "QIM100E": { nombre: "QIM100E Química para la Ingeniería", prereq: [] },
  "MAT1203": { nombre: "MAT1203 Álgebra Lineal", prereq: [] },
  "ING1004": { nombre: "ING1004 Desafíos de la Ingeniería", prereq: [] },
  "FIL2001": { nombre: "FIL2001 Filosofía, ¿Para qué?", prereq: [] },

  "MAT1620": { 
    nombre: "MAT1620 Cálculo II",
    prereq: [ ["MAT1610"] ] 
  },
  "FIS0154": {
    nombre: "FIS0154 Lab. de Dinámica",
    prereq: [ ["FIS1514"], ["ICE1514"] ]   // correquisito: cualquiera de ambos
  },
  "FIS1514": {
    nombre: "FIS1514 Dinámica",
    prereq: [ ["FIS0154","MAT1610"] ]      // requiere ambos
  },
  "ICE1514": {
    nombre: "ICE1514 Dinámica",
    prereq: [ ["FIS0154","MAT1610"] ]
  },
  "IIC1103": { nombre: "IIC1103 Introducción a la Programación", prereq: [] },
  "OptBioI": { nombre: "Optativo Biológico I", prereq: [] },
  "OptMajI": { nombre: "Optativo de Exploración Major I", prereq: [] },
  "FTI":    { nombre: "Formación Teológica I", prereq: [] },
  "PRI":    { nombre: "Práctica I", prereq: [] },

  // Segundo año – III Semestre
  "MAT1630": {
    nombre: "MAT1630 Cálculo III",
    prereq: [ ["MAT1610","MAT1620"] ]
  },
  "FIS0152": {
    nombre: "FIS0152 Lab. de Termodinámica",
    prereq: [
      ["FIS1523"],["IIQ1003"],["ICM1003"],["IIQ103H"]
    ]  // correquisitos: cualquiera
  },
  // Termodinámicas alternativas:
  "FIS1523": { nombre: "FIS1523 Termodinámica", prereq: [ ["FIS0152","MAT1630"] ] },
  "IIQ1003": { nombre: "IIQ1003 Termodinámica", prereq: [ ["FIS0152","MAT1630"] ] },
  "ICM1003": { nombre: "ICM1003 Termodinámica", prereq: [ ["FIS0152","MAT1630"] ] },
  "IIQ103H": { nombre: "IIQ103H Termodinámica", prereq: [ ["FIS0152","MAT1630"] ] },

  "MAT1640": {
    nombre: "MAT1640 Ecuaciones Diferenciales",
    prereq: [
      ["MAT1203","MAT1620"],
      ["MAT1126","MAT1203"],
      ["MAT1216","MAT1620"],
      ["MAT1126","MAT1216"]
    ]
  },
  "OptBioII": { nombre: "Optativo Biológico II", prereq: [ ["OptBioI"] ] },
  "OptMajII": { nombre: "Optativo de Exploración Major II", prereq: [ ["OptMajI"] ] },
  "FGEco":    { nombre: "FG Ecología Integral/Sustentabilidad", prereq: [] },

  // Segundo año – IV Semestre
  "ICS1513": {
    nombre: "ICS1513 Introducción a la Economía",
    prereq: [ ["MAT1620"], ["IMT2220"] ]
  },
  "FIS0153": {
    nombre: "FIS0153 Lab. de E&M",
    prereq: [
      ["FIS1533"],["FIS1532"],["FIZ0221"],["IEE1533"]
    ]
  },
  "FIS1533": {
    nombre: "FIS1533 Electricidad y Magnetismo",
    prereq: [ ["FIS0153","MAT1630"] ]
  },
  "ICE2006": {
    nombre: "ICE2006 Estática",
    prereq: [
      ["FIS1513"],["ICE1513"],["FIS1514"],["ICE1514"]
    ]
  },
  "ICC2105": {
    nombre: "ICC2105 Materiales de Ingeniería Civil",
    prereq: [
      ["FIS1513","QIM100E"],["FIS1514","QIM100E"],
      ["ICE1513","QIM100E"],["ICE1514","QIM100E"],
      ["FIS1513","QIM100A"],["FIS1514","QIM100A"],
      ["ICE1513","QIM100A"],["ICE1514","QIM100A"]
    ]
  },
  "FGHumII": { nombre: "FG Área Humanidades", prereq: [] },

  // Tercer año – V Semestre
  "ICE2313": {
    nombre: "ICE2313 Mecánica de Sólidos",
    prereq: [ ["ICE2006"], ["ING1024"], ["ICM2403"] ]
  },
  "EYP1113": {
    nombre: "EYP1113 Probabilidades y Estadística",
    prereq: [ ["MAT1523"], ["MAT1630"] ]
  },
  "ING2030": { nombre: "ING2030 Investigación, Innovación y Emprendimiento", prereq: [] },
  "OptFund": { nombre: "Optativo Fund. Ciencias/Ing.", prereq: [] },
  "INVPre":  { nombre: "Investigación en Pregrado", prereq: [] },
  "FGSalud": { nombre: "FG Área Salud y Bienestar", prereq: [] },
  "ExComp":  { nombre: "Examen de Competencias Fundamentales", prereq: [] },

  // Tercer año – VI Semestre
  "ICE2114": {
    nombre: "ICE2114 Análisis Estructural I",
    prereq: [
      ["ICE2004","ICE2313"],
      ["ICE2005","ICE2313"],
      ["ICE2006","ICE2313"]
    ]
  },
  "ICE2604": {
    nombre: "ICE2604 Fundamentos de Geotecnia",
    prereq: [ ["ICE2313"], ["ICE1302"] ]
  },
  "ICE2413": {
    nombre: "ICE2413 Hormigón Armado",
    prereq: [ ["ICE2313"], ["ICE1302"] ]
  },
  "ICH1104": {
    nombre: "ICH1104 Mecánica de Fluidos",
    prereq: [
      ["FIS1523","MAT1630","MAT1640"],
      ["IIQ1003","MAT1630","MAT1640"],
      ["FIZ0211","MAT1630","MAT1640"],
      ["ICM1003","MAT1630","MAT1640"],
      ["IIQ103H","MAT1630","MAT1640"]
    ]
  },
  "FGSocIII": { nombre: "FG Ciencias Sociales", prereq: [] },

  // Cuarto año – VII Semestre
  "ICE2703": {
    nombre: "ICE2703 Ingeniería Antisísmica",
    prereq: [ ["ICE2113"], ["ICE2114"] ]
  },
  "ICE2533": {
    nombre: "ICE2533 Estructuras de Acero",
    prereq: [ ["ICE2313"], ["ICE1302"] ]
  },
  "ICH2114": {
    nombre: "ICH2114 Ingeniería Hidráulica",
    prereq: [ ["ICH1102"], ["ICH1104"] ]
  },
  "ICH2304": {
    nombre: "ICH2304 Ingeniería Ambiental",
    prereq: [
      ["MAT1640","QIM100A"],
      ["MAT1640","QIM100E"]
    ]
  },
  "FGArtIV": { nombre: "FG Área Artes", prereq: [] },

  // Cuarto año – VIII Semestre
  "ICE2880": {
    nombre: "ICE2880 Capstone Major Proyecto de Diseño Estructural y Geotécnico",
    prereq: [
      ["ICE2114","ICE2413","ICE2533","ICE2604"],
      ["ICE2403","ICE2614"],
      ["ICE2413","ICE2614"]
    ]
  },
  "ICE2614": {
    nombre: "ICE2614 Mecánica de Suelos",
    prereq: [ ["ICE1603"], ["ICE2604"] ]
  },
  "ICC2304": { nombre: "ICC2304 Ingeniería de Construcción", prereq: [] },
  "ICC2204": {
    nombre: "ICC2204 Planificación y Control de Proyectos",
    prereq: [ ["EYP1112"], ["EYP1113"], ["EYP2113"] ]
  },
  "ETI188": { nombre: "ETI188 Ética para Ingeniería", prereq: [] },

  // Quinto año – IX Semestre
  "ICC2514": {
    nombre: "ICC2514 Ingeniería Vial",
    prereq: [ ["ICC1102"], ["ICC2104"], ["ICC2105"] ]
  },
  "ICS1113": {
    nombre: "ICS1113 Optimización",
    prereq: [
      ["MAT1203","MAT1620","IIC1103"],
      ["MAT1202","MAT1523","IIC1103"],
      ["MAT1135","MAT1215","IIC1103"]
    ]
  },
  "ICE3413": {
    nombre: "ICE3413 Hormigón Armado Avanzado",
    prereq: [ ["ICE2413"] ]
  },
  "ICE3880": {
    nombre: "ICE3880 Proyecto de Diseño Sismo-Resistente",
    prereq: [
      ["ICE3124","ICE3413","ICE3543","ICE3743"]
    ]
  },

  // Quinto año – X Semestre
  "ICE3124": {
    nombre: "ICE3124 Análisis Estructural II",
    prereq: [ ["ICE2114"] ]
  },
  "ICE3543": {
    nombre: "ICE3543 Diseño en Acero Avanzado",
    prereq: [ ["ICE2533"] ]
  },
  "ICE3743": {
    nombre: "ICE3743 Análisis Sísmico",
    prereq: [ ["ICE2702"], ["ICE2703"] ]
  },
  "OptEsp": { nombre: "Optativos Especialidad (20 cr)", prereq: [] }
};

// ————————————————————————————————
// 2) Semestres en orden
// ————————————————————————————————
const semestres = {
  "1° Semestre":      ["MAT1610","QIM100E","MAT1203","ING1004","FIL2001"],
  "2° Semestre":     ["MAT1620","FIS1514","ICE1514","FIS0154","IIC1103","OptBioI","OptMajI","FTI","PRI"],
  "3° Semestre":    ["MAT1630","FIS1523","IIQ1003","ICM1003","IIQ103H","FIS0152","MAT1640","OptBioII","OptMajII","FGEco"],
  "4° Semestre":     ["ICS1513","FIS1533","FIS0153","ICE2006","ICC2105","FGHumII"],
  "5° Semestre":      ["ICE2313","EYP1113","ING2030","OptFund","INVPre","FGSalud","ExComp"],
  "6° Semestre":     ["ICE2114","ICE2604","ICE2413","ICH1104","FGSocIII"],
  "7° Semestre":    ["ICE2703","ICE2533","ICH2114","ICH2304","FGArtIV"],
  "8° Semestre":   ["ICE2880","ICE2614","ICC2304","ICC2204","ETI188"],
  "9° Semestre":     ["ICC2514","ICS1113","ICE3413","ICE3880"],
  "10° Semestre":      ["ICE3124","ICE3543","ICE3743","OptEsp"]
};

// ————————————————————————————————
// 3) Estado y persistencia
// ————————————————————————————————
const STORAGE_KEY = "malla_aprobados";
let aprobados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Chequea si un curso está desbloqueado según grupos de prereq
function estaDesbloqueado(cod) {
  const reglas = cursos[cod].prereq;
  if (reglas.length === 0) return true;
  return reglas.some(grupo =>
    grupo.every(r => aprobados.includes(r))
  );
}

// ————————————————————————————————
// 4) Renderizado
// ————————————————————————————————
function renderizarMalla() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";
  for (let sem in semestres) {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h2>${sem}</h2>`;
    semestres[sem].forEach(cod => {
      const btn = document.createElement("button");
      btn.textContent = cursos[cod].nombre;
      if (aprobados.includes(cod)) btn.classList.add("aprobado");
      btn.disabled = !estaDesbloqueado(cod);
      btn.onclick = () => {
        if (!aprobados.includes(cod)) {
          aprobados.push(cod);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(aprobados));
          renderizarMalla();
        }
      };
      const wrapper = document.createElement("div");
      wrapper.className = "curso";
      wrapper.appendChild(btn);
      col.appendChild(wrapper);
    });
    cont.appendChild(col);
  }
}

// ————————————————————————————————
// 5) Inicialización
// ————————————————————————————————
window.addEventListener("DOMContentLoaded", renderizarMalla);


