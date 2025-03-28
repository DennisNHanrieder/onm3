Assignment 4 
Dennis Hanrieder s2210238022
AIPrompt: 
nice! Now in App.css add a picture of a cat in the background 

ChatGBT:

Yes! Let's give it a fresh, aesthetic glow—with a chill cat 🐱 in the background for good vibes 😌.

✅ Updated CSS for Pretty Look + Cat Background
Drop this into your App.css:

css
Kopieren
Bearbeiten
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: url('https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(3px);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
}

✅ Optional: Add a Title to Your App
In App.jsx, just above the <table>, add:

jsx
Kopieren
Bearbeiten
<h1>Cat Contact List 😺</h1>
Your site is now has a cozy cat background 🐾

Want to switch from textareas to input fields next? Or maybe change cat breeds on click? 😄
