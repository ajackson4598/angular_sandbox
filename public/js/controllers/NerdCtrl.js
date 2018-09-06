angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$scope.showEdit = false; 


	$scope.items = [
		{"name" : 'Ada Marie Smithsonian'},
    	{"name" : 'Poindexter Nichelle'},
    	{"name" : 'Veronica Sublime'}
	];
	
	$scope.add = function() {
		$scope.items.push($scope.input);
		$scope.input = ''; 
	};

	$scope.remove = function(index) {
    	$scope.items.splice(index, 1);
	};

	$scope.update = function(index) {
		$scope.editMode = true;
        previousValue = scope.items;
        
	}

	$scope.cancel = function(value) {
		$scope.editMode = false; 
		console.log('Canceled editing', value);
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


	