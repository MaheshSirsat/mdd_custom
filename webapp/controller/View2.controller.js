sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("mdd09.controller.View2", {
        onInit: function() {
            console.log("View 2 Controller loaded");
        }, navto:function(){
          alert("")
            console.log('I am pressed');
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this)
            oRouter.navTo("RouteFlex2")
        }
      });
    }
  );
  