'use strict';

angular.module('meBanka')
	.controller('ProjecstCtrl', ['$scope','projectsService', function($scope, projectsSvc){
		$scope.projects = projectsSvc.query();
		$scope.toggle_sort = function(ordem){
          if($scope.ordem != ordem){
            $scope.ordem = ordem;
          } else {
            $scope.aocontrario = !$scope.aocontrario;
          }
        }
	}]);