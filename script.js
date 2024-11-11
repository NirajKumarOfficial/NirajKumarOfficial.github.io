// Show response message when "Yes" is clicked
function showResponse(answer) {
    const popup = document.getElementById('popup');
    const responseText = document.getElementById('responseText');
    const messageText = document.getElementById('messageText');

    if (answer === 'Yes') {
        responseText.textContent = "Yay! 💍";
        messageText.textContent = "I'm so happy you said yes, Anjali! Our journey together starts now!";
    }

    popup.style.display = 'block';
}

// Move "No" button when hovered or clicked
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate random new position within container
    const newX = Math.random() * (containerRect.width - noBtnRect.width);
    const newY = Math.random() * (containerRect.height - noBtnRect.height);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// Close popup and reset state
function reset() {
    document.getElementById('popup').style.display = 'none';
}
