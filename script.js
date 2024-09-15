const noBtn = document.getElementById('noBtn');

// move the 'No' button when the mouse is close
document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const noBtnRect = noBtn.getBoundingClientRect();
    const noBtnX = noBtnRect.left + noBtnRect.width / 2;
    const noBtnY = noBtnRect.top + noBtnRect.height / 2;

    // calculate the distance between the mouse ptr and the 'No' button
    const distance = Math.sqrt(Math.pow(mouseX - noBtnX, 2) + Math.pow(mouseY - noBtnY, 2));

    // if the mouse is within 100px of the button, move it to a random pos.
    if (distance < 100) {
        const newX = Math.random() * (window.innerWidth - noBtnRect.width);
        const newY = Math.random() * (window.innerHeight - noBtnRect.height);
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    }
});
