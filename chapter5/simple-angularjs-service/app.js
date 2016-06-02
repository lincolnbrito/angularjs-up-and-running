angular.module("notesApp", []);
angular.module("notesApp").controller("MainCtrl",["$log", function($log){
    var self = this;
    self.logStuff = function(){
        $log.log("The button was pressed");
    }
}]);