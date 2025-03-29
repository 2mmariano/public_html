

function ValidaCobertura()
{
const datos_cps=[{"cp":47980,"COMUNIDAD":"Once Pueblos","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":47983,"COMUNIDAD":"San Miguel ","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47984,"COMUNIDAD":"El Guayabo","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47986,"COMUNIDAD":"El Sicuicho","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47987,"COMUNIDAD":"La Noria)","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47989,"COMUNIDAD":"La Concepcion","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":75685,"COMUNIDAD":"San Antonio ","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":75687,"COMUNIDAD":"La Ribera","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":75689,"COMUNIDAD":"Guamuchil Grande","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":75676,"COMUNIDAD":"Colonia Emiliano Zapata","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":75678,"COMUNIDAD":"Monteleon","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":75679,"COMUNIDAD":"La Joya","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":75700,"COMUNIDAD":"La Barranca","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":75710,"COMUNIDAD":"Cieneguitas","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":75720,"COMUNIDAD":"Tanhuato","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":75760,"COMUNIDAD":"Sicuicho de Villanueva","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":75853,"COMUNIDAD":"El Caudillo","ZONA":"Rancheria","municipio":"TIMILPAN"},{"cp":75857,"COMUNIDAD":"Cuenqueño","ZONA":"Barrio","municipio":"TIMILPAN"}];

var cpostal=parseInt(document.getElementById('nombre').value)   



const resultado = datos_cps.find( cp => cp.cp ===cpostal );
console.log(datos_cps);
/*function esCobertura(datos_cps,cp) {
    return datos_cps.cp === cp;
}*/


if(resultado)
{
    Swal.fire({
        icon: 'success',
        title: 'Grandioso!!',
        text: 'Contamos con cobertura'
      
      })
   
}
    

else
{
    Swal.fire({
        icon: 'error',
        title: 'Lo sentimos',
        text: 'Próximamente estaremos dando servicio en tu localidad'
      
      })
    console.log("Sin cobertura");
}
}




