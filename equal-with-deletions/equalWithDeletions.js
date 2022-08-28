equalWithDeletions("pine####apple", "%%%%pineapple");

function equalWithDeletions(n, m) {
  const regex = /%[^%]|[^#]#/;
  
  for (let char of n) n = n.replace(regex, '');
  for (let char of m) m = m.replace(regex, '');
  
  return n === m;
}