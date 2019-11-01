function max(a) {
  var b = a[0];
  for (var i = 1; i < a.length; i++) {
    if (b < a[i]) {
      b = a[i];
    }
  }
  console.log(b);
}
max([2,3,5]);
