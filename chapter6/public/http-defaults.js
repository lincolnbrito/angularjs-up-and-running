angular.module("notesApp",[]);
angular.module("notesApp").controller("LoginCtrl",['$http', function($http){
    var self = this;

    self.user = {};
    self.message = "Please Login";

    self.login = function () {
        $http.post("/api/login", self.user).then(
            function(resp){
                self.message = resp.data.msg;
            }
        );
    }

}]);

angular.module("notesApp").config(["$httpProvider", function($httpProvider){
    // Every POST data becomes jQuery style
    $httpProvider.defaults.transformRequest.push(
        function(data){
            var requestStr;
            if(data){
                data = JSON.parse(data);
                for(var key in data) {
                    if(requestStr) {
                        requestStr += "&" + key + "=" + data[key];
                    }else{
                        requestStr = key + "=" + data[key];
                    }
                }
            }

            return requestStr;
        }
    );

    // Set the content type to be FORM type for all post requests
    // This does not add it to GET requests
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
}]);