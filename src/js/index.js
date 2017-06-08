
(function (angular) {
    angular.module("app",['ui.router']).controller("AppController",["$scope",function ($scope) {
        /*app名称*/
        $scope.title = "webAppa";

        $scope.type = "home";
        $scope.changeTab = function (type) {
            console.log(type);
            $scope.type = type;
            var title = ""
            switch (type){
                case "home":
                    title = "首页";
                    break;
                case "author":
                    title = "作者";
                    break;
                case "content":
                    title = "栏目";
                    break;
                case "my":
                    title = "我的";
                    break
            }
            $scope.$broadcast("changeNav",{type:title})
        }
    }]);
})(angular);