// Function to speak the text
function speakText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.pitch = 1;
    speech.rate = 1;
    speech.volume = 1;

    // Set the voice to the first available voice (you can change the voice if needed)
    speechSynthesis.speak(speech);
}

document.getElementById('wall').addEventListener('click', () => {
    const text = "The heart wall is composed of connective tissue, endothelium, and cardiac muscle. It is the cardiac muscle that enables the heart to contract and allows for the synchronization of the heartbeat. The three heart wall is divided into three layers: epicardium, myocardium, and endocardium.    Epicardium : the outer protective layer of the heart.   Myocardium: muscular middle layer wall of the heart.    Endocardium: the inner layer of the heart.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
