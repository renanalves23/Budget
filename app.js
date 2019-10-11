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

    //custom function
    var ctrlAddItem = function() {

        // 1. get the field input data

        //2. add the item to the budget controller

        //3. add the item to the UI

        //4. Calculate the budget

        //5.Display the budget on the UI
      window.alert('CHESSUS')
    }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  //KEYPRESS EVENT
  document.addEventListener('keypress', function(event) {
      //caso seja pressionado a Tecla ENTER
    if (event.keyCode === 13 || event.wich === 13) { //.keyCode para browsers modernos && .wich para browsers antigos
        ctrlAddItem();
    }

  });


})(budgetController, UIController);//******/













