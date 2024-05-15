// Function to speak the text entered in the input field
function speakText() {
    // Get the text from the input field
    var text = document.getElementById('textInput').value.trim();

    // Check if there is text to speak
    if (text !== '') {
        // Create a new instance of SpeechSynthesisUtterance
        var utterance = new SpeechSynthesisUtterance();

        // Set the text to be spoken
        utterance.text = text;

        // Optionally, you can configure other properties of the utterance
        utterance.lang = 'en-US'; // Specify the language

        // Call the speech synthesis API to speak the text
        window.speechSynthesis.speak(utterance);
    } else {
        // Inform the user to enter text
        alert('Please enter text to speak.');
    }
}

// Function to clear the input field
function clearText() {
    document.getElementById('textInput').value = '';
}

// Add event listeners to the buttons
document.getElementById('speakButton').addEventListener('click', speakText);
document.getElementById('clearButton').addEventListener('click', clearText);
