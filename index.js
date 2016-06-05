module.exports = function(cb1, cb2) {
  var state = true;
  var retval = function() {
    if (state) {
      return cb1.apply(this, arguments);
    } else {
      return cb2.apply(this, arguments);
    }
  };
  retval.toggle = function() {
    state = !state;
  };

  return retval;
};