//BUDGET CONTROLLER
var budgetController = (function() {

  //Some code  
  var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
  };
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
};

      var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
      };
      return {
        addItem: function(type, des, val) {
          var newItem, ID;

            //create new ID
          ID = data.allItems[type][data.allItems[type].length -1].id +1;

          //create new Item based on inc or exp
          if (type === 'exp'){
            newItem = new Expense(ID, des, val);
          }else if (type === 'inc'){
            newItem = new Income(ID, des, val);
          }

            // push it into data structure
            data.allItems[type].push(newItem)

            //return new element
          return newItem;
        }

      };
     
})();


//UI - USER INTERFACE CONTROLLER
var UIController = (function() {
    
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
      //public function
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //será inc ou exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
   },
    //exposing DOMstrings to the public
   getDOMstrings: function() {
     return DOMstrings
   }

};

})();


// GLOBAL APP CONTROLLER
// Terceiro module criado para que possa passar as informações
//*****passando os outros 2 módulos como parâmetros para que saiba da existencia dos outros 2 e possam se conectar
var controller = (function(budgetCtrl, UICtrl) { 

      var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings() //calling the public module exposed before
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

      //KEYPRESS EVENT
      document.addEventListener('keypress', function(event) {
          //caso seja pressionado a Tecla ENTER
        if (event.keyCode === 13 || event.wich === 13) { //.keyCode para browsers modernos && .wich para browsers antigos
            ctrlAddItem();
    }

  });
      };

    //custom function
    var ctrlAddItem = function() {

        // 1. get the field input data
          var input = UICtrl.getInput(); //chamado do UI
          //console.log(input)
        //2. add the item to the budget controller
          budgetController.addItem()
        //3. add the item to the UI

        //4. Calculate the budget

        //5.Display the budget on the UI
      //window.alert('CHESSUS')
    };

    return {
      init: function() {
        console.log('startou');
        setupEventListeners();
      }
    };

  
})(budgetController, UIController);//******/

controller.init();











