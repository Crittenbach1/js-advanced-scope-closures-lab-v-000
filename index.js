const produceDrivingRange = function (blockRange) {
    return function (block1, block2) {
       const one = block1.substring(0,2);
       const two = block2.substring(0,2);
       const difference = parseInt(two) - parseInt(one);
       if (blockRange < difference) {
         return `${difference - blockRange} blocks out of range`;
       } else {
         return `within range by ${blockRange - difference}`;
       }
   }
}

const produceTipCalculator = function (percentage) {
  return function(tip) {
    return tip * percentage;
  }
}
