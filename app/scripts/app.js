// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(['$ionicPlatform',function($ionicPlatform) {
  
}])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
  })
  .state('setting', {
    url: '/setting',
    templateUrl: 'templates/setting.html',
  })
  // Each tab has its own nav history stack:

  .state('tab.recommend', {
    url: '/recommend',
    views: {
      'tab-recommend': {
        templateUrl: 'templates/tab-recommend.html',
        controller: 'RecommendCtrl'
      }
    }
  })

  .state('tab.discover', {
      url: '/discover',
      views: {
        'tab-discover': {
          templateUrl: 'templates/tab-discover.html',
          controller: 'DiscoverCtrl'
        }
      }
    })
    
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/recommend');

}]);
