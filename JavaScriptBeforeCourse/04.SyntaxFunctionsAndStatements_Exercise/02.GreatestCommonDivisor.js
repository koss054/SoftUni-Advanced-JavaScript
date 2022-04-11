function getGreatestCommonDivisor(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;

    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }

    console.log(x);
  }

  getGreatestCommonDivisor(15, 5);
  getGreatestCommonDivisor(2154, 458);