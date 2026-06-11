const { jsx } = require("react/jsx-runtime")

const nombreCoperativa = "montes Claros rl"
const diametrotuberiaPrincipal = 12

let tramosDigitalizados = 150
tramosDigitalizados = 200
let estadoTapa = 'bueno'
estadoTapa = 'malo'

const sistemaCoordenandas = 'EPSG:32720'
let longitudtramo = 127
let materialEstandar = 'PVC'

const calcularPendiente = (cotaSuperior, cotaInferior, longitud) => {
    let desnivel = cotaSuperior-cotaInferior;
    return desnivel / longitud;
}

const calcularCaudal = (area, velocidad) => {
    let caudal = velocidad * area
    return caudal
}
const validarFormato = (formato) =>{
    if (formato === "GeoPackage"){
        return "Formato aceptado para sincronizacion en campo"
    }else {
        return "Errror: solo admite GeoPackage"
    }
}
let pi = 3.1416    
const calcularAreaTubo = (radio, pi) => resultado = radio * pi

const evaluarTuboPrincipal = (diametroPulgadas) => {
    if (diametroPulgadas >= 10){
        return "Tuberia principal"
    }else {
        return "tuberia Secundaria"
    }
}

const calcularPerimetroPozo = (diametroPulgadas) => diametroPulgadas * 3.1416

const evaluarTuboPrincipal = (diametroPulgadas) => diametroPulgadas >= 10 ? "Tuberia Principal": "Tuberia Secundaria"
const tuberiasMedidas = [6,8, 12, 4, 10, 14];
const tuberiasPrincipales = tuberiasMedidas.filter(diametro => diametro >= 10 ? true : false) 
    

const tramoRed = {
  codigo: "TR-550",
  material: "PVC",
  diametroPulgadas: 8,
  longitud: 120.5,
  tipoTerreno: "Tierra"
};
const imprimirPropiedades = {material, diametroPulgadas, longitud} = tramoRed => console.log(`material ocupado es ${material} y el diametro en pulgadas es ${diametroPulgadas} y su longitud es ${longitud}`)

const {codigo: idTramo} = tramoRed;

const verificarMaterial = ({material}) => material === 'PVC'

const coordenadaPozo = [-64.123, -18.456] 
const [long, lat] = coordenadaPozo
console.log(long)

const puntoTopografo = ['PT-105',-63.183, -17.783]
const [codPunto, lat, long] = puntoTopografo
console.log(codPunto)

const respuestaServidor = {
  id: "TR-990",
  geometria: {
    tipo: "Punto",
    coordenadas: [-64.111, -18.555]
  }
};
const {geometria} = respuestaServidor
const {coordenadas} = geometria
console.log(coordenadas)

const obtenerRedAlcantarillado = async () =>{
    console.log("solicitando datos al servidor.....")

    const respuesta = await fetch("https://tu-servidor.com/api/tuberias/")

    const datosExtraidos = await respuesta.json()
    
    console.log("2. datos extraidos!", datosExtraidos)

}
obtenerRedAlcantarillado()

const cargarPozo = async ()=>{
    console.log("solicitando datos al servidor ..........")

    const urlServidor = await fetch("https://api.cooperativa.com/pozos")
    const respuesta = await urlServidor.json()

    console.log("la respuesta es ",respuesta)

}
cargarPozo()
const jsonDelServidor = {
  status: 200,
  mensaje: "Carga exitosa",
  datosEspaciales: [ /* miles de coordenadas aquí */ ]
};

const mostrarDatos = {status,mensaje,datosEspaciales} = cargarPozo => console.log(`el status es ${status}, el mensaje ${mensaje} y los datos especiales ${datosEspaciales}`)
