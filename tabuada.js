
function tabuada() {
    let num = parseInt (document.getElementById('inum').value);
    let min = parseInt (document.getElementById('imin').value);
    let max = parseInt (document.getElementById('imax').value);
    let resultado = "";
    let flag = document.getElementById('iflag').checked;

for (i = min; i <= (flag ? num : max);i++) {
            resultado += num + " x " + i + " = " + (num * i);
            resultado += "<br>";
            console.log(num);
        }
        document.getElementById('dresultado').innerHTML = resultado;
    }


function ValidaFlag() {
    if (document.getElementById('iflag').checked) {
        document.getElementById('imax').disabled = true;
    }
    else {
        document.getElementById('imax').disabled = false;
    }
}