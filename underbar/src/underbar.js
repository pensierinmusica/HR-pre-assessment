var _ = {};

(function() {
  // Call iterator(value, key, collection) for each element of collection
  _.each = function(obj, iterator) {
    if(Array.isArray(obj)){
      for (var i = 0; i < obj.length; i++){
        iterator(obj[i],i,obj);
      }
    } else if (typeof obj === "object"){
      for(var j in obj){
        if (obj.hasOwnProperty(j)){
          iterator(obj[j],j,obj);
        }
      }
    } else {
      throw new Error("Bad data type");
    }
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var breadCrumbs = {};
    var rtnArray = [];
    _.each(array,function(val,ind){
      if (!breadCrumbs.hasOwnProperty(val)) {
        breadCrumbs[val] = true;
        rtnArray.push(val);
      }
      });
    return rtnArray;
  };


}).call(this);
