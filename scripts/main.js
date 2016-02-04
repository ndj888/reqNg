/**
 * Created by longbob on 16-2-2.
 */
requirejs.config({
   baseUrl : 'scripts',
    paths:{
        "angular" : "../public/components/angular/angular.min",
        "angular-route" : "../public/components/angular-route/angular-route.min",
        "app" : "app",
        "testControl" : "controller/testControl"
    },
    shim:{
        "angular" : {
            exports : "angular"
        },
        "angular-route" : {
          deps : ["angular"],
            exports : "angular-route"
        }
    }
});


require([
    'angular',
    'angular-route',
    'app',
    'testControl'
],function(ng){
    ng.bootstrap(document , ['webApp']);
});