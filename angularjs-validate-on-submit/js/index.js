angular
    .module('demo', [])
        .controller('IndexController', [function() {
            var self = this;

            self.submit = function(form) {
                if (form.$valid) {
                    console.log(self.user);
                }
            };
}]);
