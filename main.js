var compareNums = function(num1, num2) {
  if(num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  };
};

compareNums(13, 22);
  
// Create an array for ordered numbers
resultArr = [];

var sortNums = function(numArr) {
  
  // Create an array for ordered numbers
  resultArr = [];
  
  // Create a variable for smallest number and its index
  smallestNum = 0;
  indexOfSmallest = 0;
  
  // Loop through given array
  // This loop will keep you on the first index
  for (x = 0; x < numArr.length; x ++) {
  // Loop through given array again
    for (var i = 0; i < numArr.length; i++) {
      // Resets smallestNum each pass
      smallestNum = numArr[i];
      // smallestNum=4
      
      // Loop through starting at second index for comparison
      for (var j = 1; j < numArr.length; j++) {
        // j=9,-4, 1
        // smallestNum=-4
      
        // Check if current value is smaller than smallestNum
        if (numArr[j] <= smallestNum) {
          //false,true,false
          // If it is, save it as the new smallestNum
          smallestNum = numArr[j];
          // -4
          // and the index where it occurs
          indexOfSmallest = j;
          // 2
        };
      };
      // Push it into the new array
      resultArr.push(smallestNum);
      // -4
      // Cut the number out of the array
      numArr.splice(indexOfSmallest, 1);
    };
  };
  // Display ordered array
  console.log(resultArr);
}

var numArr = [4, 9, -4, 1]
sortNums(numArr);

var numArr = [4, 9, -4, 1]
console.log(numArr.sort());