angular.module('alurapic').controller('GruposController', function($scope, $http) {
	// body...
	$scope.grupos = []; //Lista vazia q será preenchida

	$http.get('v1/grupos')
	.success(function(grupos){

		$scope.grupos = grupos;

	})
	.error(function(erro){

		console.log(erro);

	});


});