const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input;

  if (input === '') {
    alert('Please input a value');
    return;
  }
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});


if (inputText === 'a') {
  document.getElementById('result').innerText = inputText + ' is a palindrome.';
} else {
  document.getElementById('result').innerText = inputText + ' is not the letter A.';
}