require('chai').should();
var toggle = require('../index');

describe('toggle', () => {
  it('should be a callable', () => {
    var cb = toggle(()=>1, ()=>2);
    cb().should.equal(1);
  });

  it('should have a function called toggle', () => {
    var cb = toggle(()=>1, ()=>2);
    cb().should.equal(1);
    cb.toggle();
    cb().should.equal(2);
  });

  it('callbacks receive arguments', () => {
    var cb = toggle((x) => x, (x, y) => y);
    cb(1).should.equal(1);
    cb.toggle();
    cb(1, 2).should.equal(2);
  });
});

