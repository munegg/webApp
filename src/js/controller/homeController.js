
(function (angular) {
    angular.module("app").controller("homeController",["$scope","zlHttp","$state",function ($scope,zlHTTP,$state) {

        $state.go("home.list");
        zlHTTP.getData(function (res) {
            $scope.posts = res;
            console.log(res);
        },function (err) {
            console.log(err);
        })
    }])
})(angular);
