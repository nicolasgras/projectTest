angular.module('transcoManagementApp')
.directive('transcoDisplay', function() {
  
	var controller = ['$scope', function ($scope) {

        $scope.transcoDisplayInnerScope = {
		    name: 'transco - display'
		};
	}]


  	return {
	    restrict: 'EA',
	    transclude: true,
	    templateUrl: 'transcoDisplay/transcoDisplay.template.html',
	    controller: controller
  	};
});