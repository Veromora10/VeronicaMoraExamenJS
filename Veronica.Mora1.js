let horasAdicionales=13;
let horasTrabajadas=53;
let horasNormales= horasTrabajadas*265;
let horasExtras= horasAdicionales*350;

if (horasTrabajadas<=40) {
    console.log ("El total a pagar por horas normales es: " + horasNormales);
}
else {
    console.log ("El total a pagar por horas extraordinarias es: " + horasExtras);
    console.log ("El total a pagar por horas normales es:" + horasNormales);
}
