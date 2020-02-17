var app = angular.module("AppRoutingModule", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : "<h1><p>Menu</p></h1>"		
    })
	 .when("/login", {
		templateUrl : "login.htm",         
		controller: 'kontroler'
    })
    .when("/logout", {
        template : "<h1><p>Logout</p></h1>",
		controller: 'kontroler'
    })
    .when("/register", {
		templateUrl : "register.htm",                 
		controller: 'kontroler'
    });
	app.controller('kontroler', function($scope) {
            $scope.message = "This page will be used to display add student Form";
     });
});
