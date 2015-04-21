'use strict';
angular.module('meBanka')
	.factory('adminService', function($resource){
		return $resource('assets/json/admins.json');
	});