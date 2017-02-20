function Car(name, make, model, topSpeed, color) {
  this.name = name;
  this.make = make;
  this.model = model;
  this.topSpeed = topSpeed;
  this.color = color;

  this.carInfo = function() {
    return this.make + ' ' + this.model + " is named " + this.name;
  };
}




function makePrimaryCar() {
    // do we have an existing instance?
    if (typeof User.instance === 'object') {
        return User.instance;
    }

    // proceed as normal
    this.name = 'Standard';
    this.make = 'Make';
    this.model = "Model";
    this.topSpeed = 60;
    this.color = "not available"

    // cache
    User.instance = this;

    // implicit return
    // return this;
}


var setPrimaryCar = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {

    // Singleton

    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";

    return {

      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
      name: 'Standard';
      make: 'Make';
      model: "Model";
      topSpeed: 60;
      color: "not available"
      publicProperty: "I am also public"
    };

  };

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();
