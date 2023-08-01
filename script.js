function generateShortURL() {
    const longURLInput = document.getElementById('longURL');
    const longURL = longURLInput.value;

    // Generate a random short code for the long URL
    const shortCode = generateRandomShortCode();

    // Create the short URL using the short code
    const shortURL = `https://example.com/${shortCode}`;

    const shortURLOutput = document.getElementById('shortURLOutput');
    shortURLOutput.innerText = `Short URL: ${shortURL}`;
    
    const copyShortURLBtn = document.getElementById('copyShortURL');
    copyShortURLBtn.style.display = 'inline';
    copyShortURLBtn.dataset.clipboardText = shortURL;
    copyShortURLBtn.innerText = 'Copy Short URL';
}

function generateRandomShortCode() {
    // Function to generate a random alphanumeric string of length 6 for the short code
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortCode = '';
    for (let i = 0; i < 6; i++) {
        shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortCode;
}

function copyToClipboard() {
    const copyShortURLBtn = document.getElementById('copyShortURL');
    const shortURL = copyShortURLBtn.dataset.clipboardText;

    const textArea = document.createElement('textarea');
    textArea.value = shortURL;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    copyShortURLBtn.innerText = 'Copied!';
}
