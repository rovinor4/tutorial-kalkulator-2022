
function aksi(operator){
    var angka1 = $("#angka1").val();
    var angka2 = $("#angka2").val();
    var total,bahasa;
    
    if(angka1 == ""){
        $("#angka1").addClass("is-invalid");
    }else{
        $("#angka1").removeClass("is-invalid");
    }

    if(angka2 == ""){
        $("#angka2").addClass("is-invalid");
    }else{
        $("#angka2").removeClass("is-invalid");
    }

    if(angka1 == "" || angka2 == ""){return false;}

    angka1 = parseInt(angka1);
    angka2 = parseInt(angka2);


    if(operator == "+"){
        bahasa = "penjumlahan";
        total = angka1 + angka2;
    }else if(operator == "-"){
        bahasa = "pengurangan";
        total = angka1 - angka2;
    }else if(operator == ":"){
        bahasa = "pembagian";
        total = angka1 / angka2;
    }else if(operator == "x"){
        bahasa = "perkalian";
        total = angka1 * angka2;
    }
    else if(operator == "%"){
        bahasa = "mod";
        total = angka1 % angka2;
    }else{
        window.alert("Operator Tidak Di Temukan");
   }

   $("#bahasa").html(bahasa);
   $("#total").val(total);
   $("#tombol_operasi").addClass("d-none");
   $("#hasil").removeClass("d-none");
   $("#angka1").attr("readonly", "true");
   $("#angka2").attr("readonly", "true");
}

$(".tombol").click(function (e) { 
    aksi($(this).html());
    e.preventDefault();
});

$("#hapus").click(function (e) { 
    $("#angka1").val("");
    $("#angka2").val("");
    $("#total").val("");
    $("#bahasa").html("");
    $("#tombol_operasi").removeClass("d-none");
    $("#hasil").addClass("d-none");
    $("#angka1").removeAttr("readonly");
    $("#angka2").removeAttr("readonly");
    e.preventDefault();
});