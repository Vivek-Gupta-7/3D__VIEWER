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

document.getElementById('valves').addEventListener('click', () => {
    const text = "Heart valves are flap-like structures that allow blood to flow in one direction. Four types of valves regulate blood flow through your heart: • The tricuspid valve regulates blood flow between the right atrium and right ventricle. • The pulmonary valve controls blood flow from the right ventricle into the pulmonary arteries, which carry blood to your lungs to pick up oxygen. • The mitral valve lets oxygen-rich blood from your lungs pass from the left atrium into the left ventricle. • The aortic valve opens the way for oxygen-rich blood to pass from the left ventricle into the aorta, your body's largest artery, where it is delivered to the rest of your body.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
