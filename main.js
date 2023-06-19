// Check if the user is logged in and update the page accordingly
function checkLoggedIn() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
  
    if (loggedInUser) {
      handleSuccessfulLogin(loggedInUser);
    }
  }
  
  // Function to handle successful login
  function handleSuccessfulLogin(username) {
    // Disable register and login links
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    registerLink.style.display = 'none';
    loginLink.style.display = 'none';
  
    // Update greeting message
    const greetingMessage = document.createElement('p');
    greetingMessage.textContent = `Welcome, ${username}!`;
    document.body.appendChild(greetingMessage);
  
    // Add logout button
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.addEventListener('click', handleLogout);
    document.body.appendChild(logoutButton);
  }
  
  // Function to handle logout
  function handleLogout() {
    // Clear the session storage and reload the page
    sessionStorage.removeItem('loggedInUser');
    window.location.reload();
  }
  
  // Call the checkLoggedIn function on page load
  checkLoggedIn();
  