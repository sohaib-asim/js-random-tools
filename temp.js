
function CelciusToFarenheit() {

    a = document.getElementById("Celciusin").value;
    b = document.getElementById("Farenheit");
    f = (a * (9/5) + 32);
    b.innerHTML = round(f,2);

}

function FarenheitToCelcius() {

    a = document.getElementById("Farenheitin").value;
    b = document.getElementById("Celcius");
    f = ((a - 32) * (5/9));
    b.innerHTML = round(f,2);

}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}




