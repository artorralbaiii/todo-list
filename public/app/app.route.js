angular.module('TodoList').config(function($routeProvider, $locationProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'app/views/partials/home.html',
		controller: 'HomeController'
	})

	.otherwise( { redirectTo: '/'} );

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

});