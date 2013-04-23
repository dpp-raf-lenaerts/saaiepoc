function MonitorCtrl($scope, $http) {
	$http.get('./resources/backorder-monitor.json').then(function(response) {
		var responses = response.data.responses.response;
		
		for (i = 0; i < responses.length; i++) { 
			responses[i].application = "BackOrder";
		}

		$scope.items = responses;
	});

	$http.get('./resources/ipaper-editor-monitor.json').then(function(response) {
		var responses = response.data.responses.response;
		
		for (i = 0; i < responses.length; i++) { 
			responses[i].application = "iPaper-Editor";
		}

		$scope.items = $scope.items.concat(responses);
	});

	$http.get('./resources/ipaper-service-monitor.json').then(function(response) {
		var responses = response.data.responses.response;
		
		for (i = 0; i < responses.length; i++) { 
			responses[i].application = "iPaper-Service";
		}

		$scope.items = $scope.items.concat(responses);
	});

	$http.get('./resources/diocontent-importer-monitor.json').then(function(response) {
		var responses = response.data.responses.response;
		
		for (i = 0; i < responses.length; i++) { 
			responses[i].application = "Dio:Content Importer";
		}

		$scope.items = $scope.items.concat(responses);
	});

	$scope.mySortFunction = function (item) {
        if (isNaN(item[$scope.sortExpression])) {
			return item[$scope.sortExpression];
		}
		
        return parseInt(item[$scope.sortExpression]);
    }

	/*
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
	*/
}