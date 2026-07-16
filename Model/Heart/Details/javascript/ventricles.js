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
    const text = "Left Ventricle:   Function: Pumps oxygenated blood from the lungs into the aorta, and from there to the rest of the body.         Structure: The walls of the left ventricle are thicker than those of the right ventricle because it needs to generate higher pressure to circulate blood through the entire body.           Blood Flow: Blood enters the left ventricle from the left atrium through the mitral valve and exits through the aortic valve into the aorta.            Right Ventricle:        Function: Pumps deoxygenated blood to the lungs for oxygenation.        Structure: Its walls are thinner compared to the left ventricle because it only pumps blood to the lungs, a much shorter distance.      Blood Flow: Blood enters the right ventricle from the right atrium through the tricuspid valve and exits through the pulmonary valve into the pulmonary artery.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
