
(function (angular) {
    angular.module("app").config(["$stateProvider",'$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home',{
            url:"/",
            views:{
                home:{
                    templateUrl:"../views/home_tpl.html",
                    controller:"homeController",
                },
                author:{
                    templateUrl:"../views/author_tpl.html",
                    controller:"authorController",
                },
                content:{
                    templateUrl:"../views/content_tpl.html",
                    controller:"contentController",
                },
                my:{
                    templateUrl:"../views/my_tpl.html",
                    controller:"myController",
                },
            }
        })
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home.list',{
            template:"<home-list></home-list>"
        })
    }])
})(angular);