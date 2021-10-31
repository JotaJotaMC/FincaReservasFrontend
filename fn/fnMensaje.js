function traerInformacionMensaje() {
    $.ajax({
        url: url + "/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta);
        }
    });
}

function pintarRespuestaMensaje(respuesta) {

    let myTable = `<table class="table table-striped table-hover">
    <thead class="thead-light">
        <tr>
            <th>ID:</th>
            <th>MENSAJE:</th>
        </tr>
</thead>`;
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensaje() {
    let var5 = {
        messageText: $("#CLmessageText").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        url: url + "/api/Message/save",


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

function actualizarInformacionMensaje(idElemento){
    let myData={
        id:idElemento,
        messageText: $("#CLmessageText").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: url + "/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#CLmessageText").val("");
            traerInformacionMensaje();
            alert("Se ha actualizado correctamente la menaje")
        }
    });

}

function borrarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: url + "/api/Message/delete"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensaje();
            alert("Se ha Eliminado.")
        }
    });

}