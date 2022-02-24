 function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  if (m > n){
      return m % n;
  } else {
      return n % m;
  }
}

console.log(remainder(17,5)); // 2
console.log(remainder(13,72)); // 7
console.log(remainder(72,13)); // 7
console.log(remainder(1,0)); // NAN
console.log(remainder(0,0)); // NAN