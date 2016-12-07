'use strict'

var app = angular.module("CppWeb", [
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'firebase',
	'daypilot'
])

.constant('FBURL', 'https://cppdes.firebaseio.com/')
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'vistas/main.html'
		})
		.when('/publicar', {
			templateUrl: 'vistas/publicar.html',
			controller: 'HistoriaCtrl'
		})
		.when('/editar-historia/:historia_clinicaId', {
			templateUrl: 'vistas/editar-historia.html',
			controller: 'HistoriaCtrl'
		})
		.when('/editar-caso/:historia_clinicaId', {
			templateUrl: 'vistas/editar-caso.html',
			controller: 'HistoriaCtrl'
		})
		.when('/editar-usuario/:usuarioId', {
			templateUrl: 'vistas/editar-usuario.html',
			controller: 'UsuaCtrl'
		})
		.when('/buscar', {
			templateUrl: 'vistas/buscar.html',
			controller: 'HistoriaCtrl'
		})
		.when('/detalle-historia/:historia_clinicaId', {
			templateUrl: 'vistas/detalle-historia.html',
			controller: 'HistoriaCtrl'
		})
		.when('/detalle-caso/:historia_clinicaId', {
			templateUrl: 'vistas/detalle-caso.html',
			controller: 'HistoriaCtrl'
		})
		.when('/valoracion-inicial/:historia_clinicaId', {
			templateUrl: 'vistas/valoracion-inicial.html',
			controller: 'HistoriaCtrl'
		})
		.when('/estado-caso/:historia_clinicaId', {
			templateUrl: 'vistas/estado-caso.html',
			controller: 'HistoriaCtrl'
		})
		.when('/detalle-usuario/:usuarioId', {
			templateUrl: 'vistas/detalle-usuario.html',
			controller: 'UsuaCtrl'
		})
		.when('/registro', {
			templateUrl: 'vistas/registro.html',
			controller: "AutenCtrl"
		})
		.when('/citas', {
			templateUrl: 'vistas/citas.html',
			controller: "CitaCtrl"
		})
		.when('/sesion', {
			templateUrl: 'vistas/sesion.html',
			controller: "AutenCtrl"
		})
		.when('/usuarios', {
			templateUrl: 'vistas/usuarios.html',
			controller: "UsuaCtrl"
		})
		.when('/nuevo-caso/:historia_clinicaId', {
			templateUrl: 'vistas/nuevo-caso.html',
			controller: "HistoriaCtrl"
		})
		.when('/mis-casos/', {
			templateUrl: 'vistas/mis-casos.html',
			controller: "HistoriaCtrl"
		})
		.otherwise({
			redirectTo: '/'
		});
});