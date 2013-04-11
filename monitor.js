function MonitorCtrl($scope, $http) {
	$http({
		url: 'monitor.json',
		method: "GET"
	})
	.success(function(data) {
		$scope.items = data;
	})
	.error(function(data) {
		alert("An error occurred while getting the data.");
	});

    $scope.addItem = function() {
		$scope.items.push({shortDescription:$scope.itemText, done:false});
		$scope.itemText = '';
    };
     
    $scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.items, function(item) {
			count += item.done ? 0 : 1;
		});
		return count;
    };
     
    $scope.archive = function() {
		var oldItems = $scope.items;
		$scope.items = [];
		angular.forEach(oldItems, function(item) {
			if (!item.done) $scope.items.push(item);
		});
    };
}