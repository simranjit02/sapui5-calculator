sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },
        onAdd: function(){
            var numOne= +this.getView().byId("firstNum").getValue();
            var numTwo= +this.getView().byId("secondNum").getValue();
            this.getView().byId("final-result").setValue(numOne + numTwo);
        },
        onMinus: function(){
            var numOne= +this.getView().byId("firstNum").getValue();
            var numTwo= +this.getView().byId("secondNum").getValue();
            this.getView().byId("final-result").setValue(numOne - numTwo);
        },
        onMultiply: function(){
            var numOne= +this.getView().byId("firstNum").getValue();
            var numTwo= +this.getView().byId("secondNum").getValue();
            this.getView().byId("final-result").setValue(numOne * numTwo);
        },
        onDivide: function(){
            var numOne= +this.getView().byId("firstNum").getValue();
            var numTwo= +this.getView().byId("secondNum").getValue();
            this.getView().byId("final-result").setValue(numOne / numTwo);
        }
    });
});