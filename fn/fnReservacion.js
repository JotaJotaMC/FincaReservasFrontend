function traerInformacionReservacion() {
    $.ajax({
        url: url + "/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaReservacion(respuesta);
        }
    });
}

function pintarRespuestaReservacion(respuesta) {

    let myTable = `<table class="table table-striped table-hover">
    <thead class="thead-light">
        <tr>
            <th>ID:</th>
            <th>NOMBRE:</th>
            <th>DESCRIPCION:</th>
        </tr>
</thead>`;
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservacion() {
    let var6 = {
        startDate: $("#CLstartDate").val(),
        devolutionDate: $("#CLdevolutionDate").val(),
        status: $("#CLstatus").val()

    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),

        url: url + "/api/Reservation/save",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionReservacion(idElemento){
    let myData={
        id:idElemento,
        startDate: $("#CLstartDate").val(),
        devolutionDate: $("#CLdevolutionDate").val(),
        status: $("#CLstatus").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: url + "/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#CLstartDate").val("");
            $("#CLdevolutionDate").val("");
            $("#CLstatus").val("");
            traerInformacionReservacion();
            alert("Se ha actualizado correctamente la reservación")
        }
    });

}

function borrarReservacion(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: url + "/api/Reservation/delete"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservacion();
            alert("Se ha Eliminado.")
        }
    });

}