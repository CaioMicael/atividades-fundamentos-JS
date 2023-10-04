function tabuada() {
    let num = parseInt (document.getElementById('inum').value);
    let min = parseInt (document.getElementById('imin').value);
    let max = parseInt (document.getElementById('imax').value);
    let resultado = "";
    let flag = Boolean (document.getElementById('iflag'))

    if (flag.checked) {
        
        for (i = min; i <= max;i++) {
            resultado += num + " x " + i + " = " + (num * i);
            resultado += "<br>";
        }
    }

    else {
        for (i = min; i <= max;i++) {
            resultado += num + " x " + i + " = " + (num * i);
            resultado += "<br>";
            }
    }
    document.getElementById('dresultado').innerHTML = resultado;
}

function ValidaFlag() {
    let flag = Boolean (document.getElementById('iflag'))
    if (flag.checked) [
            document.getElementById('imax').disable = true
    ]
}