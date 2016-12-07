app.factory("Cita", function(FBURL, $firebaseAuth, $firebaseObject) {
	var ref = new Firebase(FBURL); //Referencia a la App de Firebase
	events = ref.childs("events");
	scheduler.firebase(events);  //Servicio de Firebase para autenticación