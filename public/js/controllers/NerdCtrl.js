angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$scope.showEdit = false; 


	$scope.items = [
    	'Ada Marie Smithsonian',
    	'Poindexter Nichelle',
    	'Veronica Sublime'
	];
	
	$scope.add = function() {
		$scope.items.push($scope.input);
		$scope.input = ''; 
	};

	$scope.remove = function(index) {
    	$scope.items.splice(index, 1);
	};

	/*
	$scope.showEdit = function(item) {
		alert("showing edit"); 

	}
*/


	$scope.sendQuery = function() {
		console.log("sending post"); 
		/* Uncomment out when you are ready to save to the mongodb: 
		var Indata = {'name': $scope.name, 'address': $scope.address, 'occupation': $scope.occupation };	

		$http.post("http://localhost:8080/nerds", Indata, {
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		 });

		 */
	};

});


	