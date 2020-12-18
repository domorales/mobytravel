function initMap(){
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom:16,
		center:{lat:-1.5520324,lng:-80.8113478}
	});
	var marker = new google.maps.Marker({
		position:{lat:-1.5520324,lng:-80.8113478},
		map:map
		
	});
	

}
google.maps.event.addDomListener(window, "load", initMap);




console.log("hola");