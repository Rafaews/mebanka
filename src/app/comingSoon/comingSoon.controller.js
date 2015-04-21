'use strict';

angular.module('meBanka')
	.controller('comingSoonCtrl', ['$scope', 
		function($scope){
			
		$scope.days = 90;

		$scope.firstDate = new Date("02/09/2015");
		$scope.lastDate  = new Date("2015,06,30");
		$scope.today     = new Date();
		$scope.allDays   = Math.round(Math.abs($scope.firstDate.getTime() - $scope.lastDate.getTime())/(24*60*60*1000));
		$scope.daysToGo  = Math.round(Math.abs($scope.today.getTime() - $scope.lastDate.getTime())/(24*60*60*1000));
		$scope.daysPass  = $scope.allDays - $scope.daysToGo;
	}]);