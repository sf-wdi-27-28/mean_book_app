angular
  .module('bookApp', ['ngRoute', 'ngResource'])
  .config( BookConfig );

  function BookConfig ($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        controllerAs: 'booksCtrl',
        controller: 'BooksController'
      })
      .when('/books', {
        controllerAs: 'booksCtrl',
        controller: 'BooksController',
        templateUrl: 'templates/books-index.html'
      });
      console.log("Config loaded.");
  };

  // function BookConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
  //     // return to book-index if bad route request
  //     $urlRouterProvider.otherwise("/");
  //     $stateProvider
  //       .state('home', {
  //           url: '/',
  //           template: "Home!"
  //       })
  //       .state('books-index', {
  //           url: '/books',
  //           templateUrl: "templates/books-index.html",
  //           controller: "BooksController as bc"
  //       });
  //
  // };
