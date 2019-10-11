//BUDGET CONTROLLER
var budgetController = (function() {

  //Some code  

})();


//UI - USER INTERFACE CONTROLLER
var UIController = (function() {
    
  //Some code

})();

// GLOBAL APP CONTROLLER
// Terceiro module criado para que possa passar as informações
//*****passando os outros 2 módulos como parâmetros para que saiba da existencia dos outros 2 e possam se conectar
var controller = (function(budgetCtrl, UICtrl) { 

  document.querySelector('.add__btn').addEventListener('click', function() {
    // 1. get the field input data

    //2. add the item to the budget controller

    //3. add the item to the UI

    //4. Calculate the budget

    //5.Display the budget on the UI

  })

})(budgetController, UIController);//******/













