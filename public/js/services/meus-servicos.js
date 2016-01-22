//Cria proprio módulo para ser injetado posteriormente nos outros módulos
angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){


		 return recursoFoto = $resource('/v1/fotos/:fotoId', null, {
            'update' : { 
                method: 'PUT'
            }
        });	

})
.factory('cadastroDeFotos', function(recursoFoto, $q){//Um serviço depende de outro ja criado

													//$q = permite criar promessas
													//Serviço de cadastro
		var servico = {};

		servico.cadastrar = function(foto){

				return $q(function(resolve, reject){

						if(foto._id){

								recursoFoto.update({fotoId : foto._id}, foto, function(){

										resolve({

											mensagem : 'Foto ' + foto.titulo + ' atualizada com sucesso!',
											inclusao : false
										});

								}, function(erro){
										console.log(erro);
										reject({

											mensagem : 'Não foi possivel alterar a foto ' + foto.titulo

										});

								});

						}else{ 

								recursoFoto.save(foto, function(){

										resolve({ 
											mensagem : 'Foto '+ foto.titulo + ' foi incluida com sucesso!',
                           				    inclusao: true
										});//Pssar a mensagem e se foi inclu ou alteração, resolve não aceita receber um ou mais parametros

								}, function(erro){

											console.log(erro);
											
											reject({

											mensagem : 'Não foi possivel incluir a foto ' + foto.titulo

											});
								});

						}
				});
		};

		return servico;

});