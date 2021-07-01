var assert = require('assert'); 
var Gato = require("../scripts/main.js")
let testGato = new Gato(

)

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

function testTest(){
  num = 2
  assert.equal(num, 2)
}
it("test-test", testTest)

function colorCell(){
  
  gato.colorCell(cell)
  cell_color = cell.classList

  assert.equal(cell_color, "red")
}
it("color-cell-test", colorCell)
