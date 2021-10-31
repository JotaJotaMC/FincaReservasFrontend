function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url: url + "/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReporte(respuesta);
        }
    });
}
function pintarRespuestaReporte(respuesta){

    let myTable=
    `<table class="table table-striped table-hover">
    <thead class="thead-light">
        <tr>
            <th>COMPLETADAS:</th>
            <th>CANCELADAS:</th>
        </tr>
    </thead>`;


    myTable+="<tr>";

        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}
function traerReporteDate(){

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
        $.ajax({
            url: url + "/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    }
    function pintarRespuestaDate(respuesta){

        let myTable=    `<table class="table table-striped table-hover">
        <thead class="thead-light">
            <tr>
                <th>FECHA INICIO:</th>
                <th>FECHA FINAL:</th>
                <th>ESTADO:</th>
            </tr>
        </thead>`;
        myTable+="<tr>";
          
        for(i=0;i<respuesta.length;i++){
            myTable += "<tr>";
            myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
            myTable+="<td>"+respuesta[i].startDate+"</td>";
            myTable+="<td>"+respuesta[i].status+"</td>";
          
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoDate").html(myTable);
    }

    function traerReporteClientes(){
        $.ajax({
            url: url + "/api/Reservation/report-clients",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaClientesReporte(respuesta);
            }
        });
    }
    function pintarRespuestaClientesReporte(respuesta){

        let myTable= 
        
        `<table class="table table-striped table-hover">
        <thead class="thead-light">
            <tr>
                <th>TOTAL:</th>
                <th>NOMBRE:</th>
                <th>EMAIL:</th>
                <th>EDAD:</th>
            </tr>
        </thead>`;
        
        myTable+="<tr>";
          
        for(i=0;i<respuesta.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+respuesta[i].total+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td>"+respuesta[i].client.email+"</td>";
            myTable+="<td>"+respuesta[i].client.age+"</td>";
          
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoClientes").html(myTable);
    }
