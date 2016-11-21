// Module creation
angular.module('transcoManagementApp', ['ngRoute']);

// Get module and define 'config' on it
angular.module('transcoManagementApp')
.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
		when('/transcoDisplay', {
			template: '<transco-display></transco-display>'
		}).		
		when('/transcoAdmin', {
		   template: '<transco-admin></transco-admin>'
		}).
		when('/transcoAdminUser', {
		   template: '<transco-admin-user></transco-admin-user>'
		}).
		otherwise({
		   redirectTo: '/transcoDisplay'
		});
}]);

// Get module and dfine 'controller' on it
angular.module('transcoManagementApp')
.controller('transcoMainCtrl', ['$scope', function($scope) {

	$scope.userLogin = 'nicolas.gras';

	$scope.isAdmin = true;

	// Element that can be updated by child controller (in directive) must be set in an object
	$scope.myParentScope = {};
	$scope.myParentScope.selectedtranscoTableName = "";
}]);