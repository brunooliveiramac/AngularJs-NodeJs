//Controlador do cadastro //Todos os modulos registrados no modulo principal da aplicação = alurapic ....não coloco
//a dependencia "[]" pois quero a dependecia e não criar um novo módulo
angular.module('alurapic').controller('FotoController', function($scope, $http, cadastroDeFotos, $routeParams){ //Função q da acesso
																					//route... Pega Id para Editar
	$scope.foto = {}; 																
	$scope.mensagem = '';															//não precisa mais de $resource pela injeção de  recursoFoto



      /*  // novidade aqui! Alteramos a criação de recursoFoto!
        var recursoFoto = $resource('/v1/fotos/:fotoId', null, {
            'update' : { 
                method: 'PUT'
            }
        });		
	*/
	

	if($routeParams.fotoId){
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;  //Pega foto q veio do servidor
		})
		.error(function(){
			$scope.mensagem = 'Não foi possivel obter a foto!'
		});
	}


	$scope.submeter = function() { //Função executada ao clicar no botão salvar //Enviado Via Ajax para o Servidor
									//Esta função não sabe se o formulario esta invalido ou não
		if($scope.formulario.$valid){
				//Encapsular lógica de cadastro
				cadastroDeFotos.cadastrar($scope.foto)
				.then(function(dados){
					$scope.mensagem = dados.mensagem; //mensagem de alto nível
					if(dados.inclusao)
					 $scope.foto = {};
				})
				.catch(function(erro){
					$scope.mensagem = dados.mensagem;
				});
									
			}
			
		};




		/*

		$scope.submeter = function() { //Função executada ao clicar no botão salvar //Enviado Via Ajax para o Servidor
									//Esta função não sabe se o formulario esta invalido ou não
		if($scope.formulario.$valid){
				if($scope.foto._id){ //Se já tem Id..Edita



										$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
										.success(function(){

												$scope.foto = {};
												$scope.mensagem = 'Foto alterada com sucesso!';	

										})
										.error(function(){

										});

				}else{

										console.log($scope.foto);	

										$http.post('v1/fotos', $scope.foto)
										.success(function(){
												$scope.foto = {};
												$scope.mensagem = 'Foto incluida com sucesso!';	
										})
										.error(function(erro){
												console.log(erro);
												$scope.mensagem = 'Ocorreu um erro! Contate o Administrador do Sistema!';
										});
					}

									
			}
			
		};



	*/








}); 