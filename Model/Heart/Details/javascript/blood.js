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

document.getElementById('blood').addEventListener('click', () => {
    const text = "Blood circulates around the body via two distinct pathways :  the pulmonary circulation and the systemic circulation. Together they create a closed pathways that keep the doxygenated and oxygenated blood separated.       Pulmonary circulation:   The flow of blood between the heart and lungs through pulmonary artery and pulmonary vein.  it starts when the right side of the heart pumps deoxygenated blood into the lungs through pulmonary artery to exchange carbon dioxide to oxygen.   The oxygenated blood travels back to the heart and the left atrium via pulmonary vein.     Systemic circulation:The flow of oxygenated blood from the left side of the heart to the rest of the body (with the exception of lungs).     oxygen is delivered to the body tissue and exchange to carbon dioxide.      The deoxygenated blood is carried back to the heart and the atrium via veins.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
