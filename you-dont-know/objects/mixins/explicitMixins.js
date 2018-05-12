function mixin( sourceObj, targetObj ) {
  for (var key in sourceObj) {
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }

  return targetObj;
}

var Vehicle = {
  engines: 1,

  ignition: function() {
    console.log( "start engine" );
  },

  drive: function() {
    this.ignition();
  }
};

var Car = mixin( Vehicle, {
  wheels: 4,

  drive: function() {
    // Vehicle.drive() could call Car::drive
    Vehicle.drive.call( this );
  }
} );
