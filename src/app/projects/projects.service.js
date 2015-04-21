'use strict';

angular.module('meBanka')
	.factory('projectsService', ['$resource', function($resource){
		return $resource('/assets/json/projects.json');
}]);