/**
 * Created by g on 2017/6/8.
 */


(function (angular) {
    angular.module('app').config(["$sceDelegateProvider",function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            "self",
            "http://localhost/12%20gxq/ng/day7-gulps/webApp/**"
        ])
    }])
})(angular);
