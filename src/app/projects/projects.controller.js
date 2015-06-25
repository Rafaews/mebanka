'use strict';

angular.module('meBanka')
	.controller('ProjecstCtrl', ['$scope','projectsService','$modal', 
    function($scope, projectsSvc, $modal){
		
    $scope.projects = projectsSvc.query();


    $scope.openModal = function(url){
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/modal/' + url +'.html',
        size: 'lg'
      })
    };
    
    $scope.toggle_sort = function(ordem){
          if($scope.ordem != ordem){
            $scope.ordem = ordem;
          } else {
            $scope.aocontrario = !$scope.aocontrario;
          }
        }

    $scope.tags = [
      { 
        "name" : "Tecnologia"
      },
      { 
        "name" : "Redes Sociais"
      },
      { 
        "name" : "Eventos"
      },
      { 
        "name" : "TI Verde"
      },
      { 
        "name" : "Meio Ambiente"
      },
      { 
        "name" : "Cultura"
      },
      { 
        "name" : "Finanças"
      },
      { 
        "name" : "Negócios"
      },
      { 
        "name" : "Universidade"
      },
      { 
        "name" : "Alimentação"
      },
      { 
        "name" : "Orçamento"
      },
      { 
        "name" : "Turismo"
      },
      { 
        "name" : "Música"
      },
      { 
        "name" : "Arte"
      },
      { 
        "name" : "Informação"
      },
      { 
        "name" : "Saúde"
      },
      { 
        "name" : "Transporte"
      },
      { 
        "name" : "Outras"
      }
    ];

}]);