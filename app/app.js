angular
    .module("app", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("user", {
                url: "/",
                templateUrl: "views/user/index.html",
                controller: "userController"
            })
            .state("create", {
                url: "/create",
                templateUrl: "views/user/create.html",
                controller: "userController"
            })
            .state("edit", {
                url: "/edit/:id",
                templateUrl: "views/user/create.html",
                controller: "userController"
            });
    }).constant("globalConfig", {
        apiAddress: "https://node-10am.herokuapp.com/api"
    });