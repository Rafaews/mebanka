'use strict';

angular.module('meBanka')
	.controller('ProjecstCtrl', ['$scope','projectsService', function($scope, projectsSvc){
		$scope.projects = projectsSvc.query();
	}]);