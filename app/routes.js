angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/local",{
        templateUrl: "app/templates/local.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .when("/teablend",{
        templateUrl: "app/templates/teablend.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});