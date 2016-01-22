angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])//importação dos modulos -- Documentação do angular --Rotas -- Animação -- Diretivas
.config(function($routeProvider, $locationProvider){//Rotas que rodam no Client //Injeção de dependencias //módulo HTML5 de rotas
                           

		/* Sistema de Rotas do Angular
		*  Url's
		*/
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
			templateUrl : 'partials/principal.html',
			controller : 'FotosController'//Definimos o controlador da URL
	}); //#fotos, se não back end


	$routeProvider.when('/fotos/new', {
			templateUrl : 'partials/foto.html', 
			controller: 'FotoController' //Definimos o controlador da URL (Controller q gerencia uma parte do DOM)
	}); //#fotos, se não back end



	$routeProvider.when('/fotos/edit/:fotoId', {  //Busca a foto no client
			templateUrl : 'partials/foto.html', 
			controller: 'FotoController' //Definimos o controlador da URL
	}); //#fotos, se não back end


    $routeProvider.otherwise({redirectTo: '/fotos'});//caso rota não exista, direciona para fotos

}); 