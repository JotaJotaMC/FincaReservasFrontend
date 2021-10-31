function traerInformacionFarm() {
    $.ajax({
        url: url + "/api/Farm/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaFarm(respuesta);
        }
    });
}

function pintarRespuestaFarm(respuesta) {

    let myTable =     
    `<table class="table table-striped table-hover">
    <thead class="thead-light">
        <tr>
            <th>ID:</th>
            <th>DIRECCIÓN:</th>
            <th>EXTENSIÓN:</th>
            <th>ID CATEGORÍA:</th>
            <th>NOMBRE FINCA:</th>
        </tr>
</thead>`;

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].id + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].address + "</td>";
        myTable += "<td>" + respuesta[i].extension + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionFarm() {
    let var3 = {
        name: $("#Bname").val(),
        address: $("#Baddress").val(),
        extension: $("#Bextension").val(),
        description: $("#Bdescription").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),

        url: url + "/api/Farm/save",


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

function actualizarInformacionFarms(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        address:$("#Caddress").val(""),
        extension:$("#Cextension").val(""),
        description:$("#Cdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: url + "/api/Farm/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Caddress").val("");
            $("#Cextension").val("");
            $("#Cdescription").val("");
            traerInformacionFarm();
            alert("Se ha actualizado correctamente la finca.")
        }
    });

}

function borrarFarm(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: url + "/api/Farm/delete"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionFarm();
            alert("Se ha Eliminado.")
        }
    });

}