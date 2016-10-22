function temp() {
    var x, y;
    x = document.getElementById("C").value;
    y = document.getElementById("F").value;
    if (y) {

        document.getElementById("C").value = (y - 32) * 5 / 9;
        alert(y + " Farenheit equals: " + document.getElementById("C").value + " Celsuis");
        document.getElementById("F").value = "";

    }
    else if (x) {
        document.getElementById("F").value = x * (9 / 5) + 32;
        alert(x + " Celsuis equals: " + document.getElementById("F").value + " Farenheit");
        document.getElementById("C").value = "";
    }
    else {
        alert("Enter details");
    }


}
$(document).ready(function(){
    $("#desc").mouseenter(function(){
        $(this).css("background-color", "yellow");
    });
    $("#desc").mouseleave(function(){
        $(this).css("background-color", "");
    });
    });


