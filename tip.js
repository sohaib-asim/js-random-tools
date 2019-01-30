function TipCalc() {
    var a = document.getElementById("amount").value;
    var percentage = (document.getElementById("percentage").value)/100;
    var amount = a * percentage;
    document.getElementById("tipAmount").innerHTML = amount;

    var prsn = document.getElementById("numberofp").value;
    var final = ((a+amount)/prsn);
    document.getElementById("totalPp").innerHTML = final;
}