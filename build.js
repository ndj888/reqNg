/**
 * Created by longbob on 16-2-2.
 */
({
    baseUrl : './scripts',
    out : './build-main.js',
    name : 'main',
    optimize: "uglify2",
    uglify2: {
        mangle: false //false 不混淆变量名
    },
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
            exports : "route"
        }
    }
})