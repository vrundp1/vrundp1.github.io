document.addEventListener('DOMContentLoaded', function () {
    const welcomeText = "Welcome to my personal website! ";
    const welcomeElement = document.getElementById('welcome-text');
    let index = 0;
  
    function type() {
      if (index < welcomeText.length) {
        welcomeElement.textContent += welcomeText.charAt(index);
        index++;
        setTimeout(type, 150); 
      }
    }
  
    type();
  });
  