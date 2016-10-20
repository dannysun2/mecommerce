angular.module('meCommerce', ['ngMaterial', 'ngAnimate'])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange')
})

.directive('product', function(){
  return {
    templateUrl: 'directives/product.html',
    replace: true,
    scope: {
      productObject: '='
    }
  }
})
