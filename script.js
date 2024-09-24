const noBtn = document.getElementById('noBtn');

// Function to move the 'No' button when the mouse is close
document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const noBtnRect = noBtn.getBoundingClientRect();
    const noBtnX = noBtnRect.left + noBtnRect.width / 2;
    const noBtnY = noBtnRect.top + noBtnRect.height / 2;

    const distance = Math.sqrt(Math.pow(mouseX - noBtnX, 2) + Math.pow(mouseY - noBtnY, 2));

    if (distance < 100) {
        const newX = Math.random() * (window.innerWidth - noBtnRect.width);
        const newY = Math.random() * (window.innerHeight - noBtnRect.height);

        // Ensure new position is within the viewport
        noBtn.style.left = `${Math.max(0, Math.min(newX, window.innerWidth - noBtnRect.width))}px`;
        noBtn.style.top = `${Math.max(0, Math.min(newY, window.innerHeight - noBtnRect.height))}px`;
    }
});
