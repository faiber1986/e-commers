// Retrieve the form element and attach a submit event listener
const form = document.getElementById('loginForm');
form.addEventListener('submit', handleFormSubmit);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Retrieve the entered email and password values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send the email and password to your backend for verification
  fetch('https://64b5dc4bf3dbab5a95c7b48d.mockapi.io/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from your backend
      if (data.success) {
        // Login successful, redirect the user to the add_product.html
        window.location.href = '../add_product.html';
      } else {
        // Login failed, display an error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = data.message;
        errorMessage.style.display = 'block';
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
