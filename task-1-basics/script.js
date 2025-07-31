const buttons = document.querySelectorAll('.btn');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    switch (index) {
      case 0:
        alert("👋 Hello there! You're doing awesome on Task 1!");
        break;
      case 1:
        alert("🎉 Surprise! Keep coding and keep growing.");
        break;
      case 2:
        alert("🚀 You just clicked a JavaScript-powered button!");
        break;
      default:
        alert("✨ Button clicked!");
    }
  });
});