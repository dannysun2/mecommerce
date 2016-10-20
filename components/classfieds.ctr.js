(function(){
  "use strict";

  angular
    .module("meCommerce")
    .controller('mainController', [ '$scope', function($scope){
      $scope.products = [
        {title: 'Tesla Model X', price: 100000, imgsrc: "http://st.motortrend.com/uploads/sites/10/2016/05/2016-Tesla-Model-X-P90D-front-three-quarter-in-motion.jpg", content: 'Lorem ipsum dolor sit amet, causae vivendum sed in, populo essent periculis his cu. Nec an labores omnesque imperdiet, et fabulas laoreet per, senserit percipitur te eum. Te vix facilis pertinax, tota ferri accusata vix at. Oratio pericula conceptam usu an, agam facilis usu ut. Eum choro antiopam delicata ea, sea vidit praesent ex, eam nostrum consequat ut.'},
        {title: 'Tesla Model S', price: 90000, imgsrc: "http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2015/10/Tesla-Model-S-software-update-self-driving.jpg", content: 'Lorem ipsum dolor sit amet, causae vivendum sed in, populo essent periculis his cu. Nec an labores omnesque imperdiet, et fabulas laoreet per, senserit percipitur te eum. Te vix facilis pertinax, tota ferri accusata vix at. Oratio pericula conceptam usu an, agam facilis usu ut. Eum choro antiopam delicata ea, sea vidit praesent ex, eam nostrum consequat ut.'},
        {title: 'Tesla Model 3', price: 50000, imgsrc: "http://st.motortrend.com/uploads/sites/10/2016/05/2017-Tesla-Model-3-top-view.jpg", content: 'Lorem ipsum dolor sit amet, causae vivendum sed in, populo essent periculis his cu. Nec an labores omnesque imperdiet, et fabulas laoreet per, senserit percipitur te eum. Te vix facilis pertinax, tota ferri accusata vix at. Oratio pericula conceptam usu an, agam facilis usu ut. Eum choro antiopam delicata ea, sea vidit praesent ex, eam nostrum consequat ut.'}
      ]
    }]);
})();
