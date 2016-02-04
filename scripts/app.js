/**
 * Created by longbob on 16-2-2.
 */

define(['angular' , 'angular-route'] , function(ng){
    return ng.module('webApp' , ['ngRoute']).config(['$routeProvider' , function($routeProvider){
        $routeProvider
            .when('/' , {
            templateUrl : 'tpl/test.html',
            controller : 'testControl'
        })
            .when('/test' , {
                templateUrl : 'tpl/test1.html'
            })
    }])
})