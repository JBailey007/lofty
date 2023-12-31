const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response.body);
  
      if (response.ok) {
        document.location.replace('/lofty');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  