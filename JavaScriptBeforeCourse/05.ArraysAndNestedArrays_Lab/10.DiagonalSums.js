function diagonalSum(matrix) {
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < i + 1; j++) {
      mainDiagonalSum += matrix[i][j];
    }
  }

  let j = 0;

  for (let i = matrix.length - 1; i >= 0; i--) {
    secondaryDiagonalSum += matrix[i][j];
    j++;
  }

  console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

diagonalSum([
  [20, 40],
  [10, 60],
]);
diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
