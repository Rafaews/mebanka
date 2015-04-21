'use strict';

angular.module('meBanka')
.controller('loginAdminCtrl', ['$scope', 'adminService', function($scope, adminSvc){
	$scope.admins = adminSvc.query();

	$scope.match = function(){
		for (var i = 0; i < $scope.admins.length; i++) {
			if ($scope.admins[i].name     == $scope.admin.name && 
				$scope.admins[i].password == $scope.admin.password ){
				return true;
		}
	};
};
}]);