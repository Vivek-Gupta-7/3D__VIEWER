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

document.getElementById('conduction').addEventListener('click', () => {
    const text = "Conduction system is also be called as the electrical activity of the heart.  The electrical activity in the heart is displayed as a P wave,  QRS interval and T wave.    AN electrocardiograph is a medical device used to measure and record of electrical activity of heart during cardiac cycle.      P wave represent the auricular systol and depolarisation.   It reflects the electrical activity that causes the atria to contract and push blood into the ventrical.      The QRS complex represents the depolarisation of ventrical.   It reflects the electrical activity that causes the ventricles to contract and bump blood to the lungs and rest of the body.     T wave represent the ventricular repolarisation(diastole).     It shows the electrical recovery phase as the ventricles reset their electrical state in preparation for the next heartbeat.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
