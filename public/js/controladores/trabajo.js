'use strict'

app.controller("HistoriaCtrl", function ($scope, $routeParams, $location, $firebaseObject, Historia_clinica) {
	
	
	$scope.historias_clinicas = Historia_clinica.all; // Variable que lista TODAS las ofertas de Trabajo
	var historia_clinicaId = $routeParams.historia_clinicaId; // Variable para tomar el Id como parametro

	if (historia_clinicaId) {
		// Variable para almacenar la info de la oferta de trabajo seleccionada
		$scope.historiaElegida = Historia_clinica.obtenerHistoria(historia_clinicaId);
	};


	$scope.crearHc = function (historia_clinica) {
		Historia_clinica.publicar(historia_clinica).then(function(){
			console.log("Historia clinica creada exitosamente!");
			$location.path("/buscar");
		});
		
	}

	$scope.editarHc = function () {
		Historia_clinica.editar($scope.historiaElegida).then(function(){
			console.log("Historia clinica editada exitosamente!");
			$location.path("/buscar");
		});
	}

	$scope.crearCaso = function () {
		Historia_clinica.caso($scope.historiaElegida).then(function(){
			console.log("Caso creado exitosamente!");
			$location.path("buscar");
		})
	}

});