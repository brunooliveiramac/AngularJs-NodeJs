angular.module('minhasDiretivas', []) //Diretivas criadas (Componentes que podem ser utilizados em vários outros lugares do projeto

.directive('meuPainel', function(){

		var ddo = {}; //Escopo privado

		ddo.restrict = "AE"; //Atribute Element, como atributo ou elemento
		ddo.scope = {                                                                    //Diretiva meuPainel
			titulo: '@titulo'
		};

		ddo.transclude = true;
		ddo.templateUrl = 'js/directives/meu-painel.html'; //local do html da diretiva
		return ddo;
})
.directive('minhaFoto', function(){

		var ddo = {};

		ddo.restrict = "AE";

		ddo.scope = {
			titulo: '@',
			url: '@'

		};

		ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

		return ddo;
		
})
.directive('meuBotaoPerigo', function(){

		var ddo = {};

		ddo.restrict = "E";
 
		ddo.scope = {
 
			nome: '@', //Interface de comunicação, Nome e Ação..  @ = String
			acao: '&'  //& = Expressão, avaliada no escopo do controller

		}; 

		//Como marcação é pequena, usar um template inline
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

		return ddo;

});
