'use strict';

angular.module('meBanka')
  .controller('MainCtrl',  ['$scope', '$location', '$anchorScroll',
    function ($scope,$location,$anchorScroll){
    	$scope.gotoProjects = function(){
    		 $location.hash('projects');
    		 $anchorScroll();
    	}
    	}
  ]);