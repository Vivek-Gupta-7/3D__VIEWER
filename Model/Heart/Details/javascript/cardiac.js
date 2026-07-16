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

document.getElementById('cardiac').addEventListener('click', () => {
    const text = "The cardiac cycle refers to sequence of events that occur during one complete heartbeat,involving the contraction and relaxation of heart muscles to pump blood.  Atrial Diastole (Relaxation of the Atria):  Atria are relaxed and filling with blood from the body (right atrium via the superior and inferior vena cava) and the lungs (left atrium via the pulmonary veins).      The atrioventricular (AV) valves (tricuspid and mitral valves) are closed.  Ventricular Diastole (Relaxation of the Ventricles):    The ventricles are also relaxed and expand to allow the entry of blood. Once atrial pressure exceeds ventricular pressure, the AV valves open, and blood flows passively from the atria into the ventricles.    Atrial Systole (Contraction of the Atria):      The atria contract, pushing the remaining blood (30% of the total ventricular volume) into the ventricles.      This ensures the ventricles are fully filled with blood.        Ventricular Systole (Contraction of the Ventricles):    1.Isovolumetric Contraction Phase:      Ventricular contraction begins, but no blood is ejected yet because both the AV and semilunar valves (aortic and pulmonary) are closed. Pressure rises within the ventricles.       2.Ejection Phase:   Once ventricular pressure exceeds the pressure in the aorta and pulmonary arteries, the semilunar valves open.      Blood is ejected from the right ventricle into the pulmonary artery (toward the lungs) and from the left ventricle into the aorta (toward the body).            Isovolumetric Relaxation Phase:     After the ventricles eject blood, they begin to relax.  The pressure in the ventricles falls, and the semilunar valves (aortic and pulmonary) close to prevent backflow of blood.       Both the AV valves and semilunar valves are closed briefly as the ventricles relax, causing the pressure to drop further.       Return to Ventricular Diastole:     As ventricular pressure falls below atrial pressure, the AV valves open, and the cycle repeats.     Blood from the atria passively fills the ventricles in preparation for the next heartbeat.      Valve Activity During the Cycle:    AV Valves (Tricuspid and Mitral) - Open during ventricular diastole (filling phase), close during ventricular systole (to prevent backflow into the atria).     Semilunar Valves (Pulmonary and Aortic) - Open during ventricular systole (ejection phase), close during ventricular diastole (to prevent backflow from arteries).      Duration:       The entire cardiac cycle lasts about 0.8 seconds at a normal heart rate of 75 beats per minute.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
