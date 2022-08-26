let  horas Adicionales = 13 ;
let  horas trabajadas = 53 ;
let  horasNormales =  horasTrabajadas * 265 ;
let  horasExtras =  horasAdicionales * 350 ;

si  ( horas trabajadas <= 40 )  {
    consola _ log  ( "El total a pagar por horas normales es: "  +  horasNormales ) ;
}
más  {
    consola _ log  ( "El total a pagar por horas extraordinarias es: "  +  horasExtras ) ;
    consola _ log  ( "El total a pagar por horas normales es:"  +  horasNormales ) ;
}
