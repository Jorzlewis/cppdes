'use strict'

app.factory("Usuario", function(FBURL, $firebaseArray, $firebaseObject, Aut) {

	var ref = new Firebase(FBURL); //Referencia a la App de Firebase
	var usuarios = $firebaseArray(ref.child("usuarios")); //Nodo hijo 'trabajos'
	var usuario = Aut.usuario;//Información del usuario que inició sesión

	var Usuario = {
		all: usuarios, //Muestra todas las ofertas de trabajo

		//Función para obtener la oferta de Trabajo basado en su Id
		obtenerUsuario: function(usuarioId){
			return $firebaseObject(ref.child("usuarios").child(usuarioId));
		},

		editar: function(usuarioElegido){
			return usuarioElegido.$save();
		},

		bloquear: function(usuarioElegido){
			return usuarioElegido.$save();
	}
}

	return Usuario;
});