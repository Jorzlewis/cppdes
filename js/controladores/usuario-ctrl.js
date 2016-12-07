
app.controller("UsuaCtrl", function ($scope, $firebaseObject, $routeParams, $firebaseObject, Usuario, $location) {
	
	
	$scope.usuarios = Usuario.all; // Variable que lista TODAS las ofertas de Trabajo
	var usuarioId = $routeParams.usuarioId; // Variable para tomar el Id como parametro

	if (usuarioId) {
		// Variable para almacenar la info de la oferta de trabajo seleccionada
		$scope.usuarioElegido = Usuario.obtenerUsuario(usuarioId);
	};


	$scope.editarUsuario = function () {
		Usuario.editar($scope.usuarioElegido).then(function(){
			console.log("Usuario editado exitosamente!");
			$location.path("/usuarios");
		});
	}

	$scope.bloquearUsuario = function () {
		Usuario.bloquear($scope.usuarioElegido).then(function(){
			console.log("Usuario Bloqueado");
			$location.path("/usuarios/");
		});
	}
});