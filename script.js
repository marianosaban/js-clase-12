function imprimirResultado(){
    var t = document.getElementById("transmision");
    var i = t.selectedIndex;
    var d = document.getElementById("RuedaDel")
    var rd = d.selectedIndex;
    var tr = document.getElementById("RuedaTras")
    var rt =tr.selectedIndex
    document.getElementById("resultado").innerHTML =t.options[i].text+" con una rueda delantera "+d.options[rd].text+" y una rueda trasera "+tr.options[rt].text;
}