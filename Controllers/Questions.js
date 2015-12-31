mainApp.controller('Questions', ['$scope', '$http', function ($scope, $http) {
    $scope.username = "Harsha Kashyap";
    $scope.title = "My App Name";
    $scope.showloading = false;
    $scope.empid;
    $scope.dob;
    $scope.reqURL;
    $scope.foo = [];
    $scope.add = function () {
        console.log($scope.empid);
        console.log($scope.dob);
    }

    $scope.submitRequest = function () {
        $scope.showloading = true;
        $scope.reqURL = 'http://requestlink/' + $scope.empid;
        $http({
            method: 'GET',
            url: $scope.reqURL
        }).then(function successCallback(response) {
            $scope.foo = JSON.parse(angular.toJson(response.data));
            $scope.showloading = false;
            swal("Save Successful!");

        }, function errorCallback(response) {
            $scope.showloading = false;
            swal("Error sending request!");
        });
    }
}]);
