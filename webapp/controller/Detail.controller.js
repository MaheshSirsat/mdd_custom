sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("mdd09.controller.Detail", {
        onInit: function() {
            console.log("View Detail Controller loaded");
        }
      });
    }
  );
  