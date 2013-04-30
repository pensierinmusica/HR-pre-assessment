// example of deeplyNestedArray
// [1,2,33,[99,22,[88,[100],22,334],9000],3,9001,[315,68,88,[290],11],57]

var recursiveNumPrinter = function(deeplyNestedArray) {
  var rtnArray = '';

  var printArray = function(parseArray){
    for(var i=0; i <parseArray.length;i++){
      if (typeof parseArray[i] === "number"){
        rtnArray +=(parseArray[i]+ '-');
      } else {
        printArray(parseArray[i]);
      }
    }
  }

  printArray(deeplyNestedArray);
  rtnArray = rtnArray.substring(0,rtnArray.length-1);
  return rtnArray;
};
