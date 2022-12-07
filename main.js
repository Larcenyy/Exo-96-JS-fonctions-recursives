

function myFunc(a) {
    let oui = document.getElementById("mydiv").innerHTML = "Ma fonction est égal a : " + a;
    console.log("Ma fonction est égal a : " + a);
    (a++ <= 19) ? myFunc(a) : null;
}
myFunc(1)

