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

document.getElementById('thalamus').addEventListener('click', () => {
    const text = "The thalamus is a small structure, located right above the brain stem responsible for relaying sensory information from the sense organs. It is also responsible for transmitting motor information for movement and coordination. Thalamus is found in the limbic system within the cerebrum. This limbic system is mainly responsible for the formation of new memories and storing past experiences.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});


document.getElementById('hypothalamus').addEventListener('click', () => {
    const text = "Hypothalamus  The hypothalamus is a small and essential part of the brain, located precisely below the thalamus. It is considered the primary region of the brain, as it is involved in the following functions:      Receives impulses       Regulates body temperature      Controls the mood and emotions      Controls the sense of taste and smell       Synthesises the body's essential hormones       Coordinates the messages from the autonomous nervous system         Controls appetite, peristalsis, the rate of heartbeat, and blood pressure   Forms an axis with the pituitary gland which is the main link between the nervous and the endocrine systems";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});

document.getElementById('cerebrum').addEventListener('click', () => {
    const text = "Cerebrum          The largest part of the brain, located in the front of the head. The cerebrum controls many functions, including motor and sensory information, memory, emotions, and language. It's divided into left and right hemispheres, and each hemisphere has four lobes: frontal, parietal, occipital, and temporal.   Frontal Lobe : Involved in decision-making, problem-solving, and control of voluntary movements.    Parietal Lobe: Processes sensory information like touch, temperature, and pain. Temporal Lobe: Associated with processing auditory information and memory.  Occipital Lobe: Primarily responsible for visual processing.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});