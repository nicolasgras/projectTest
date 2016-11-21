angular.module('transcoManagementApp')
.directive('transcoAdminUser', function() {
  
	var controller = ['$scope', function ($scope) {

        $scope.transcoAdminUserInnerScope = {
		    name: 'transco - admin - user'
		};
	}]


  	return {
	    restrict: 'E',
	    scope: false,
	    templateUrl: 'transcoAdminUser/transcoAdminUser.template.html',
	    controller: controller
  	};
});