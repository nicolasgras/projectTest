angular.module('transcoManagementApp')
.directive('transcoAdmin', function() {
  
	var controller = ['$scope', function ($scope) {

        $scope.transcoAdminInnerScope = {
		    name: 'transco - admin'
		};
	}]


  	return {
	    restrict: 'E',
	    scope: false,
	    templateUrl: 'transcoAdmin/transcoAdmin.template.html',
	    controller: controller
  	};
});