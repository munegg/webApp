(function (angular) {
    angular.module("app").directive("tabBar",function () {
        return{
            redirect:"EA",
            scope:true,
            controller:"tabBarController",
            templateUrl:"../views/tabBar_tpl.html"
        }
    })
})(angular);