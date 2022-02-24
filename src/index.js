
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr = [];
  for ( let i = 0; i < matrix.length; i++ ) {
    if ( (i % 2 === 0) ) {
      arr.push(matrix[i]);
    }
    else if ( !(i % 2 === 0)) {
      let sortedArr = matrix[i].reverse();
      arr.push(sortedArr);
    }
  }
  let result = arr.flat();
  console.log(result);
  return result;
}