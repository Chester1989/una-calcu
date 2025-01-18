//este modulo (index.js)tiene como proposito recivir el imput
//por el usuario
//entenderlo y delegar la operacion matematica a quien corresponda

const operaciones = require("./operaciones")
function parsearTerminos(texto){
   //mock
    return{
        primerTermino:225,
segundoTermino:180,
operacion:"+",
    };
}

function ejecutarOperacion(objetoOperacion){
    const mapa={
        "+":operaciones.sumar,
        "-":operaciones.restar,
        "/":operaciones.dividir,
        "*":operaciones.multiplicar,
    }
    const simbolo=objetoOperacion.operacion;
    const ejecutor=mapa[simbolo];

    return ejecutor(objetoOperacion.primerTermino,
        objetoOperacion.segundoTermino);
};

function main(){
const operacionParseada = parsearTerminos(process.argv[2]);
const resultado=ejecutarOperacion(operacionParseada);
console.log(resultado);
}

main();
