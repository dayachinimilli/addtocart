var x = 0;
var y = 0;
document.getElementById("pdt-n").innerText = x;
document.getElementById("amt").innerText = "$" + y.toFixed(2);

function addtocart() {
    x = x + 1;
    document.getElementById("pdt-n").innerText = x;
    y = y + 10;
    document.getElementById("amt").innerText = "$" + y.toFixed(2);
}

function removetocart() {
    if (x > 0) {
        x = x - 1;
        document.getElementById("pdt-n").innerText = x;
        y = y - 10;
        document.getElementById("amt").innerText = "$" + y.toFixed(2);
    }
    else{
        alert("cart is empty")
    }
}