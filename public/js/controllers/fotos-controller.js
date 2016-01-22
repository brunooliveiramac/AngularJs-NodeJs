angular.module('alurapic').controller('FotosController', function($scope, $http, recursoFoto){ //$resource: de mais alto nível..Faz o mesmo q $http
																				//resource: especializado no consumo de end points rest
	 $scope.fotos = [];
	 $scope.filtro = ''; //two-way-databinding (ler e alterar)
	 					 //angukar expression (Somente le)
     $scope.mensagem = '';

  //var recursoFoto = $resource('v1/fotos/:fotoId') //resource ignora o ID, e traz todas as fotos
     
     recursoFoto.query(function(fotos){
     	$scope.fotos = fotos;
     }, function(erro){
     	console.log(erro);
     });


     /*
	 $http.get('v1/fotos')
	 .success(function(fotos){
		$scope.fotos = fotos;
	 })
	 .error(function(error){
		console.log(erro);
	 });
	
	*/

	$scope.remover = function(foto){

		recursoFoto.delete({fotoId : foto._id}, function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1); //Remove Foto da lista sem precisar fazer outra requ para atualizar a pag e trazer as fotos
			$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso!';
		}, function(erro){
			$scope.mensagem = 'Erro ao remover a Foto!';

		});
	};




	/*
	$scope.remover = function(foto){
		$http.delete('v1/fotos/'+ foto._id) 
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1); //Remove Foto da lista sem precisar fazer outra requ para atualizar a pag e trazer as fotos
			$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso!';
		})
		.error(function(erro){
			$scope.mensagem = 'Erro ao remover a Foto!';
		});
	};
	*/





	//Requisição assincrona
	//Necessidade Task

	/*
	var promise = $http.get('v1/fotos'); //devolve uma "promessa"
	promise.then(function(retorno){ //se promessa cumprida

		$scope.fotos = retorno.data;

	}).catch(function(error){

		console.log(error);

	}); //exeção

	*/




}); //Controlador dos elementos da view