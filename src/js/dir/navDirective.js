/**
 * Created by g on 2017/6/8.
 */

(function (angular) {
    angular.module("app").directive("navBar",function () {
        return{
            redirect:"EA",
            templateUrl:"../views/navBar_tpl.html",
            controller:"navBarController",
            scope:true,
            link:function ($scope,ele,attr) {
                $scope.$on("changeNav",function (e,obj) {
                    ele.find("span").html(obj.type);
                })
            }
        }
    })
})(angular);