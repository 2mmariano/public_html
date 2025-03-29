

function ValidaCobertura()
{
const datos_cps=[{"cp":47980,"COMUNIDAD":"Once Pueblos","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":47983,"COMUNIDAD":"San Miguel ","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47984,"COMUNIDAD":"El Guayabo","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47986,"COMUNIDAD":"El Sicuicho","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47987,"COMUNIDAD":"La Noria)","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47989,"COMUNIDAD":"La Concepcion","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47990,"COMUNIDAD":"San Antonio ","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":47993,"COMUNIDAD":"La Ribera","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":47994,"COMUNIDAD":"Guamuchil Grande","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":47995,"COMUNIDAD":"Colonia Emiliano Zapata","ZONA":"Pueblo","municipio":"TIMILPAN"},{"cp":47996,"COMUNIDAD":"Monteleon","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47997,"COMUNIDAD":"La Joya","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47998,"COMUNIDAD":"La Barranca","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47934,"COMUNIDAD":"Cieneguitas","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":47970,"COMUNIDAD":"Tanhuato","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":59400,"COMUNIDAD":"Sicuicho de Villanueva","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":59414,"COMUNIDAD":"El Caudillo","ZONA":"Rancheria","municipio":"TIMILPAN"},{"cp":59415,"COMUNIDAD":"Cuenqueño","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":36937,"COMUNIDAD":"Cuenqueño","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":36917,"COMUNIDAD":"Cuenqueño","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":36935,"COMUNIDAD":"Cuenqueño","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":36947,"COMUNIDAD":"Cuenqueño","ZONA":"Barrio","municipio":"TIMILPAN"},{"cp":36936,"COMUNIDAD":"Cuenqueño","ZONA":"Barrio","municipio":"TIMILPAN"}];

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




