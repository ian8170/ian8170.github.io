var personalWebControllers = angular.module('personalWebControllers', []);

personalWebControllers.controller("HomeCtrl", ["$scope", function ($scope) {
	$scope.currentTab="me";
	$scope.isActive=function(tab){
		return $scope.currentTab==tab;
	};
	$scope.toggle=function(tab){
		$scope.currentTab=tab;
	};
}]);

personalWebControllers.controller("MeCtrl", ["$scope",  function ($scope) {

}]);

personalWebControllers.controller("ProjectCtrl", ["$scope", function ($scope) {

}]);

personalWebControllers.controller("ContactCtrl", ["$scope", function ($scope) {

}]);
