angular.module("notesApp", []);
angular.module("notesApp")
    .controller("MainCtrl",[function(){
        var self = this;
        self.tab = "first";

        self.open = function(tab){
            self.tab = tab;
        }
    }])
    .controller("SubCtrl",[function(){
        var self = this;
        self.tab = "first";

        self.open = function(tab){
            self.tab = tab;
        }
    }]);