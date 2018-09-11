// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  // Each tab has its own nav history stack:

  .state('menu.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'templates/main.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('menu.member', {
    url: '/member',
    views: {
      'tab-member': {
        templateUrl: 'templates/member.html',
        controller: 'DashCtrl'}
    }
  })

  .state('menu.howto', {
    url: '/howto',
    views: {
      'tab-howto': {
        templateUrl: 'templates/howto.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('menu.play', {
    url: '/play',
    views: {
      'tab-play': {
        templateUrl: 'templates/play.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('menu.pic', {
    url: '/pic',
    views: {
      'tab-pic': {
        templateUrl: 'templates/pic.html',
        controller: 'DashCtrl'
      }
    }
  })


    .state('menu.about', {
    url: '/about',
    views: {
      'tab-ab': {
        templateUrl: 'templates/about.html',
        controller: 'DashCtrl'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/main');

});