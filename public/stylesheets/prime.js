function prime(number) {
 factors = [];
  for (var i = 0; i < number; i++) {
    if (number%i === 0) {
      factors.push(i)
      for (var j = 0; j < factors.length; j++) {
        for (var k = 2; k < (number/2); k++) {
          if (factors[j]%k === 0 && factors[j]!==k ){
            factors.splice(j, 1);
          }
        }
      }
    }
  }
  var lng = factors.length - 1
  var num = factors[lng]
  console.log(num)
}

prime(600851475143)
