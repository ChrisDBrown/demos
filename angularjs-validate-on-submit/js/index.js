angular
    .module('demo', [])
        .controller('IndexController', [function() {
            var self = this;

            self.submitted = false;
            self.submit = function(form) {
                self.submitted = true;
                if (form.$valid) {
                    console.log(self.user);
                }
            };
}]);
