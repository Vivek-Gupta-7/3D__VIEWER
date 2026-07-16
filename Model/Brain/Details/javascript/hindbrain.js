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

document.getElementById('hindbrain').addEventListener('click', () => {
    const text = "The hindbrain is the lower part of the brainstem, connecting the brain to the spinal cord. It is made up of three main parts:     Medulla Oblongata:  Location:At the base of the brainstem, just above the spinal cord.      Functions: Controls autonomic functions like breathing, heart rate, and blood pressure.     Manages reflexes like swallowing, coughing, and vomiting.   Relays nerve signals between the brain and the spinal cord.         Pons:           Location: Above the medulla and below the midbrain, part of the brainstem. Functions: Acts as a bridge between different parts of the brain, including the cerebellum and cerebrum. Plays a key role in regulating breathing patterns.      Involved in sleep cycles, particularly REM(Rapid Eye Movement) sleep.       Helps with sensory roles, including hearing, taste, and balance.    Cerebellum:     Location: Behind the brainstem, under the cerebrum.     Functions: Coordinates voluntary movements such as posture, balance, coordination, and speech.  Helps in fine-tuning motor activities and maintaining balance.  Involved in motor learning and adaptation.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});