function evenFibonacci(num) {
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  sum = 0;
  for (var i = 2; i <=num; i++) {
    fib[i] = fib[i-2]+fib[i-1];
    if (fib[i]%2 === 0) {
      sum += fib[i];
    }
  }
  console.log(sum);
}
