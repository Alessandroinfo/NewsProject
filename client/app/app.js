'use strict';

// Modulo principale di Angular
angular.module('newsApp', [   //Nome modulo principale applicazione

    //Dipendenze applicazione (Moduli)
    'ngRoute',
    'ui.bootstrap',
    'directives.module',
    'newsApp.home',
    'newsApp.admin',
    'newsApp.global.service'

]).config(config);  //Funzione di configurazione


config.$inject = ['$routeProvider'];  //Inietto i servizi (Provider) di configurazione all'interno della funzione config
function config($routeProvider) {  //Funzione di configurazione dell'applicazione

    //routeProvider mi permette di configurare le rotte di Angular
    $routeProvider
        .when("/admin", {
            templateUrl: 'app/admin/admin.html', //Template html per la rotta associata
            controller: 'adminCtrl',  //Nome controller
            controllerAs: 'admin'  //Utilizzato per non utilizzare lo $scope e gestire i controller in modo mnemonico
        })
        .when("/", {
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
        .otherwise({redirectTo: '/'});

};
