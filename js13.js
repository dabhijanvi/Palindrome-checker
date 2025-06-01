function checkPalindrome() {
  const input = document.getElementById("inputText").value;
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = cleaned.split('').reverse().join('');
  const result = document.getElementById("result");

  if (cleaned === "") {
    result.textContent = "Please enter some text!";
    result.style.color = "#ff9900";
  } else if (cleaned === reversed) {
    result.textContent = `"${input}" is a palindrome! 🎉`;
    result.style.color = "#28a745"; // green
  } else {
    result.textContent = `"${input}" is not a palindrome. 😢`;
    result.style.color = "#dc3545"; // red
  }
}
