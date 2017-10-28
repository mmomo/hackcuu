var traducir = function () {
    var s = document.getElementById('intext').value;
    var archivo = "";
    
    s = s.toUpperCase();

    for (var i = 0; i < s.length; i++) {
	archivo = s[i] + ".png";
	
	alert(archivo);
    }

    document.getElementById('intext').value = '';
}
