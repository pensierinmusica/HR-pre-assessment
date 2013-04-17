var returnArguments = function(){ return arguments; };

describe("_.each", function() {
  it("should provide value and iteration count (click to view test)", function() {
    _.each([1, 2, 3], function(num, i) {
      expect(num).to.equal(i + 1);
    });
  });

  it("should iterate over objects, ignoring the object prototype (click to view test)", function() {
    var answers = [];
    var obj = {one : 1, two : 2, three : 3};
    obj.constructor.prototype.four = 4;
    _.each(obj, function(value, key){ answers.push(key); });
    expect(answers.join(", ")).to.equal('one, two, three');
  });


  it("should be able to reference the original collection from inside the iterator (click to view test)", function() {
    var answer = null;
    _.each([1, 2, 3], function(num, index, arr){ if (arr.indexOf(num)>0) answer = true; });
    expect(answer).to.be(true);
  });

  it("should handle a null value gracefully (click to view test)", function() {
    var answers = 0;
    _.each(null, function(){ ++answers; });
    expect(answers).to.equal(0);
  });
});

describe("_.uniq", function() {
  it("should return all unique values contained in an unsorted array (click to view test)", function() {
    var list = [1, 2, 1, 3, 1, 4];
    expect(_.uniq(list).join(', ')).to.equal('1, 2, 3, 4');
  });

  it("should handle iterators that work with a sorted array (click to view test)", function() {
    var iterator = function(value) { return value +1; };
    var list = [1, 2, 2, 3, 4, 4];
    expect(_.uniq(list, true, iterator).join(', ')).to.equal('1, 2, 3, 4');
  });

  it("should work on an arguments object (click to view test)", function() {
    var result = (function(){ return _.uniq(arguments); })(1, 2, 1, 3, 1, 4);
    expect(result.join(', ')).to.equal('1, 2, 3, 4');
  });
});
