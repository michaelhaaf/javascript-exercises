const palindromes = function (input) {
  const nonAlphanumericRE = /[^A-Za-z0-9]/g;
  let palindrome = input.toLowerCase().replace(nonAlphanumericRE, '');

  let n = palindrome.length; 
  let max_index = Math.floor(n/2);

  for (let i=0; i<max_index; i++) {
    if (palindrome[i] != palindrome[n-1-i]) {return false;}
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
