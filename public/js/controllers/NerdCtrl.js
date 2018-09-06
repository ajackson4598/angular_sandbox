angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$scope.editMode = false; 

	$scope.items = [
		{"name" : 'Ada Marie Smithsonian'},
    	{"name" : 'Poindexter Nichelle'},
    	{"name" : 'Veronica Sublime'}
	];
	
	$scope.addItem = function() {
		$scope.items.push({ "name" : $scope.input });
		alert("pushed " + $scope.input); 
		$scope.input = ''; 
		return $scope.input; 
	};

	$scope.remove = function(index) {
    	$scope.items.splice(index, 1);
	};

	$scope.editItem = function(item) {
		item.oldName = item.name;	
	}; 

	$scope.cancel = function(item) {
		$scope.editMode = false; 
		item.name = item.oldName;	
	}; 

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


	