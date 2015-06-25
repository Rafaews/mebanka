'use strict';

angular.module('meBanka')
  .controller('MainCtrl',  ['$scope', '$modal',
    function ($scope,$modal){
    	$scope.usuario = {};

    	$scope.opemModal = function(url){
    		var modalInstance = $modal.open({
    			animation: $scope.animationsEnabled,
    			templateUrl: 'app/modal/' + url +'.html'
    		})
    	};

    	$scope.logar = function(){
    		if($scope.usuario.email === 'rafael@mebanka.com.br' && $scope.usuario.senha === '123'){
    		//if($scope.usuario.email === '123' && $scope.usuario.senha === '123'){
    			$scope.usuario.logado  = true;
    			$scope.usuario.nome = 'Rafael';
    		}
    		else{
    			$scope.modalInstance = $modal.open({
    				animation: $scope.animationsEnabled,
    				templateUrl: 'app/modal/logininvalido.html'
    			})
    		}
    	};

    	$scope.sair = function(){
    		$scope.usuario = {logado:false};
    	};

    }
    	
  ]);