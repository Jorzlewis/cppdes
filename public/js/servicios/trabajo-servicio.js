'use strict'

app.factory("Historia_clinica", function(FBURL, $firebaseArray, $firebaseObject, Aut) {

	var ref = new Firebase(FBURL); //Referencia a la App de Firebase
	var historias_clinicas = $firebaseArray(ref.child("historias_clinicas"));//Nodo hijo 'trabajos'
	var usuario = Aut.usuario;//Información del usuario que inició sesión

	var Historia_clinica = {
		all: historias_clinicas,
		 //Muestra todas las ofertas de trabajo

		//Función para obtener la oferta de Trabajo basado en su Id
		obtenerHistoria: function(historia_clinicaId){
			return $firebaseObject(ref.child("historias_clinicas").child(historia_clinicaId));
		},

		publicar: function(historia_clinica){
			historia_clinica.fecha_creacion = Firebase.ServerValue.TIMESTAMP;
			historia_clinica.gravatar = usuario.profile.gravatar;
			return historias_clinicas.$add(historia_clinica);
		},

		editar: function(historiaElegida){
			return historiaElegida.$save();
		},

		caso: function(historiaElegida){
			return historiaElegida.$save();
		}

	}

	return Historia_clinica;
});