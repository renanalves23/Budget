var budgetController = (function() {

    var x = 23;

    var add = function(a) {
      return x + a;
    }

    return {
      publicTest: function(b) {
        return add(b);
       }
    }
})();


//USER INTERFACE CONTROLLER
var UIController = (function() {
    
  //Some code

})();

// Terceiro module criado para que possa passar as informações
//*****passando os outros 2 módulos como parâmetros para que saiba da existencia dos outros 2 e possam se conectar
var controller = (function(budgetCtrl, UICtrl) { 

   var z = budgetCtrl.publicTest(5);

   return {
     anotherPublic: function() {
       console.log(z);
     }
   }

})(budgetController, UIController);//******/













