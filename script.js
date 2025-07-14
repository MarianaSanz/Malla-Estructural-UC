// 1) Define todos los cursos con sus prerrequisitos (AND) y correquisitos (marcados igual)
const cursos = {
  // Primer año
  "MAT1610": { nombre: "MAT1610 Cálculo I", prereq: [] },
  "QIM100E": { nombre: "QIM100E Química para la Ingeniería", prereq: [] },
  "MAT1203": { nombre: "MAT1203 Álgebra Lineal", prereq: [] },
  "ING1004": { nombre: "ING1004 Desafíos de la Ingeniería", prereq: [] },
  "FIL2001": { nombre: "FIL2001 Filosofía, ¿Para qué?", prereq: [] },
  "MAT1620": { nombre: "MAT1620 Cálculo II", prereq: ["MAT1610"] },
  "FIS1514": { nombre: "FIS1514 Dinámica", prereq: ["FIS0154","MAT1610"] },
  "ICE1514": { nombre: "ICE1514 Dinámica", prereq: ["FIS0154","MAT1610"] },
  "FIS0154": { nombre: "FIS0154 Lab. de Dinámica", prereq: ["FIS1514","ICE1514"] },
  "IIC1103": { nombre: "IIC1103 Introducción a la Programación", prereq: [] },
  // (continúa con todos los demás...)
  // Ejemplo de segundo año:
  "MAT1630": { nombre: "MAT1630 Cálculo III", prereq: ["MAT1610","MAT1620"] },
  // … y así sucesivamente, define cada código con su lista de prereq.
};

// 2) Agrupa cada curso por semestre para mostrar
const semestres = {
  "I Semestre": ["MAT1610","QIM100E","MAT1203","ING1004","FIL2001"],
  "II Semestre": ["MAT1620","FIS1514","ICE1514","FIS0154","IIC1103"],
  // … completa con III, IV … hasta X Semestre
};

// 3) Gestión de estado en localStorage
const STORAGE_KEY = "malla_aprobados";
let aprobados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// 4) Función para chequear si un curso está desbloqueado
function estaDesbloqueado(cod) {
  return cursos[cod].prereq.every(r => aprobados.includes(r));
}

// 5) Renderiza la malla
function renderizarMalla() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";
  for (let sem in semestres) {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>${sem}</h2>`;
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
      div.appendChild(wrapper);
    });
    cont.appendChild(div);
  }
}

// 6) Al cargar la página…
window.addEventListener("DOMContentLoaded", renderizarMalla);

