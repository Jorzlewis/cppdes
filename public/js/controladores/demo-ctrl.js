app.controller("DemoCtrl", function ($scope, $timeout, $http){

	$scope.navigatorConfig = {
            selectMode: "day",
            showMonths: 3,
            skipMonths: 3,
            onTimeRangeSelected: function(args) {
                $scope.weekConfig.startDate = args.day;
                $scope.dayConfig.startDate = args.day;                            
                loadEvents();
            }
        };
	
	$scope.events = [];

    $scope.dayConfig = {
      viewType: "Day"
    };

    $scope.weekConfig = {
      visible: false,
      viewType: "Week"
    };

    $scope.showDay = function() {
        $scope.dayConfig.visible = true;
        $scope.weekConfig.visible = false;  
    };

    $scope.showWeek = function() {
        $scope.dayConfig.visible = false;
        $scope.weekConfig.visible = true;                    
    };

});