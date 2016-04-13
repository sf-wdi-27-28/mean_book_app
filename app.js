angular
  .module('bookApp', ['ngRoute', 'ngResource'])
  .config( BookConfig );

  function BookConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
    function config ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/',
          controllerAs: 'booksCtrl',
          controller: 'BooksController'
        })
        .when('/books', {
          templateUrl: 'templates/books-index',
          controllerAs: 'booksCtrl',
          controller: 'BooksController'
        })

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });
}

      // return to book-index if bad route request
      $urlRouterProvider.otherwise("/");
      $stateProvider
      .state('home', {
          url: '/',
          template: "Home!"
      })
      .state('books-index', {
          url: '/books',
          template: "Books!"
      });
      console.log("Config loaded.");
  };
