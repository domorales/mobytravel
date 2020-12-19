function desplegar() {
	window.sr = ScrollReveal();
  var x = document.getElementById("enlaces");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
  	
    x.style.display = "flex";
  }

}

