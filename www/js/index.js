var traducir = function() {
  var s = document.getElementById("intext").value;
  var archivo = "";

<<<<<<< HEAD
  s = s.toUpperCase();

  document.getElementById('board').innerHTML = "\
    	<div id='carrusel' class='carousel slide' data-ride='carousel'>\
=======
    document.getElementById('board').innerHTML = "\
    	<div id='carrusel' class='carousel slide' data-ride='carousel' data-interval='false'>\
>>>>>>> master
	    <ol id='lista' class='carousel-indicators'>\
	    </ol>\
	    <div id='items' class='carousel-inner' role='listbox'>\
	    </div>\
	    <a class='carousel-control-prev' href='#carrusel' role='button' data-slide='prev'>\
		<span class='carousel-control-prev-icon' aria-hidden='true'></span>\
		<span class='sr-only'>Previous</span>\
	    </a>\
	    <a class='carousel-control-next' href='#carrusel' role='button' data-slide='next'>\
		<span class='carousel-control-next-icon' aria-hidden='true'></span>\
		<span class='sr-only'>Next</span>\
	    </a>\
	</div> ";

<<<<<<< HEAD
  var contador = 0;

  for (var i = 0; i < s.length; i++) {
    archivo = s[i] + ".png";
=======
    var contador = 0;
        
    for (var i = 0; i < s.length; i++) {
	archivo = s[i] + ".png";

	var div = document.createElement('div');
	if (contador == 0){
	    div.className = "carousel-item active";
	} else {
	    div.className = 'carousel-item';
	}
	
	div.innerHTML = "<img class='d-block img-fluid' src='../img/" + archivo + "' />";
>>>>>>> master


    var div = document.createElement('div');
    if (contador == 0) {
      div.className = "carousel-item active";
    } else {
      div.className = 'carousel-item';
    }

    div.innerHTML = "<img class='d-block img-fluid' src='../img/" + archivo + "' />";

    console.log("ok " + archivo);

    document.getElementById('items').appendChild(div);
    contador++;
  }
  document.getElementById('intext').value = '';


  var board = document.getElementById('board').innerHTML;
  document.getElementById('board').innerHTML = board;
  
}
