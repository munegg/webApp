/**
 * Created by g on 2017/6/8.
 */


(function (angular) {
    angular.module("app").directive("homeList",function () {
        return{
            redirect:"EA",
            templateUrl:"../views/homeList_tpl.html",
            // controller:"homeListController"
        }

    })
})(angular);