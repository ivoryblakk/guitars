var myGuitars =  {
    guitars:[],
  addGuitars: function(guitarText) {
    this.guitars.push({
        guitarText: guitarText,
        owned: false
    });
  },
  changeGuitars: function (position,guitarText) {
    this.guitars[position].guitarText = guitarText;
  },
  deleteGuitars: function(position) {
    this.guitars.splice(position,1);
  },
  toggleGuitars: function(position) {
    var guitar = this.guitars[position];
    guitar.owned = !guitar.owned;
  },
  toggleAll: function (){
    var totalGuitars = this.guitars.length;
    var ownedGuitars = 0;
    
    // Get the number of Guitars
  for (var i = 0; i < totalGuitars; i++) {
    if (this.guitars[i].owned === true) {
      ownedGuitars++;
    }
  }
    if (ownedGuitars === totalGuitars) {
    for ( var i = 0; i < totalGuitars; i++)  {
      this.guitars[i].owned = false;
    }
  }
  else {
    for ( var i = 0; i < totalGuitars; i++)  {
      this.guitars[i].owned = true;
    }
  }
}
};
var handlers = {
  addGuitars: function(){
    var addGuitarsTextInput = document.getElementById('addGuitarsTextInput');
    myGuitars.addGuitars(addGuitarsTextInput.value);
    addGuitarsTextInput.value = "";
    view.displayGuitars();
  },
  changeGuitars: function () {
    var changeGuitarsPositionInput = document.getElementById('changeGuitarsPositionInput');
    var changeGuitarsTextInput = document.getElementById('changeGuitarsTextInput');
    myGuitars.changeGuitars(changeGuitarsPositionInput.valueAsNumber, changeGuitarsTextInput.value);
    changeGuitarsPositionInput.value = "";
    changeGuitarsTextInput.value = "";
    view.displayGuitars();
  },
  deleteGuitars: function() {
    var deleteGuitarsPositionInput= document.getElementById('deleteGuitarsPositionInput');
     myGuitars.deleteGuitars(deleteGuitarsPositionInput.valueAsNumber);
     deleteGuitarsPositionInput.value = "";
    view.displayGuitars();
  },
  toggleGuitars: function () {
    var toggleGuitarsPositionInput = document.getElementById('toggleGuitarsPositionInput');
    myGuitars.toggleGuitars(toggleGuitarsPositionInput.valueAsNumber);
     toggleGuitarsPositionInput.value = "";
    view.displayGuitars();
  },
  toggleAll: function(){
    myGuitars.toggleAll();
    view.displayGuitars();
  }
};

var view = {
  displayGuitars: function () {
  var guitarsUl = document.querySelector('ul');
      guitarsUl.innerHTML = "";
  for (var i = 0; i < myGuitars.guitars.length; i++){
    var guitarsLi = document.createElement('li');
    var guitar = myGuitars.guitars[i];
    var guitarTextOwned ="";
    
    if (guitar.owned === true) {
      guitarTextOwned = '(x)' + guitar.guitarText;
    } else {
      guitarTextOwned = '( )' + guitar.guitarText;
    }
    guitarsLi.textContent = guitarTextOwned;
    guitarsUl.appendChild(guitarsLi);
  }
 },
 createDeleteButton: function() {
  var deleteButton = document.createElement("button");
   deleteButton.textContent = 'Delete';
   deleteButton.className = 'deleteButton';
   return deleteButton;
}
};

