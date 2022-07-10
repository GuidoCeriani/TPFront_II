/* eslint-disable no-restricted-globals */
/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "assets/htmlCss.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "assets/js.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "assets/react.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2021 - prompt("¿En que año naciste?");
  datosPersona.ciudad = prompt("¿De que ciudad sos?");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?") ? "Si" : "No";
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerText = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;
  document.getElementById("javascript").innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.querySelector("#fila");
  fila.innerHTML = "";
  listado.forEach((element) => {
    fila.innerHTML += `
        <div class="caja">
          <img src="${element.imgUrl}" alt="">
          <p class="lenguajes">Lenguajes: ${element.lenguajes}</p>
          <p class="bimestre">Bimestre: ${element.bimestre}</p>
        </div> 
        `;
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.querySelector("#sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.getElementById("sobre-mi");
document.addEventListener("keypress", (e) => {
  if (e.key === "f") {
    sobreMi.classList.remove("oculto");
  }
});