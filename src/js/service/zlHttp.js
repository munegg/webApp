(function (angular) {
    angular.module("app").service("zlHttp",["$http",function ($http) {
        this.getData = function (success,error) {

            $http({
                url:"http://localhost/12%20gxq/ng/day7-gulps/webApp/home.php",
                method:"jsonp"
            }).then(function (res) {
                success(res.data);
            }).catch(function (err) {
                error(err);
            })
        }
    }])
})(angular);