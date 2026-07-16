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

document.getElementById('Arteries').addEventListener('click', () => {
    const text = "An artery is a type of blood vessel that carries blood away from the heart to various parts of the body.Arteries are thick walled and muscular,allowing them to withstand high blood pressure. They branch into smaller arterioles,which lead to capillaries where oxygen and nutrient are exchanged.Types of artery: Aorta:The largest artery in the body,the aorta begins at the left ventricles of the heart.        Pulmonary artery: carry deoxygented blood from the heart to the lungs.                    systematic artery:supply oxygented blood from the heart to the rest of the body.                       Coronary arteries: Supply oxygenated blood to the heart muscle itself.                                Cerebral arteries: Supply oxygenated blood to the brain.                                              Renal arteries: Supply oxygenated blood to the kidneys.                                               Mesenteric arteries: Supply oxygenated blood to the intestines.                                       Femoral arteries: Supply oxygenated blood to the legs.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});


document.getElementById('Veins').addEventListener('click', () => {
    const text = "Blood vessel that carry deoxygenated blood back to the heart. Types of veins:                 Venacava:   The largest vein in the body is venacava.   The superior venacava carries blood from the head and arms and Inferior venacava carries blood from the abdomen and legs                 Coronary Sinus:  Receives blood from the great cardiac vein, middle cardiac vein, and small cardiac veins.         Great Cardiac Vein: Drains blood from the left atrium and left ventricle.                 Middle Cardiac Vein: Drains blood from the left ventricle.        Small Cardiac Vein: Drains blood from the right atrium and right ventricle.       Anterior Cardiac Veins: Drain blood from the front of the heart.          Posterior Cardiac Veins: Drain blood from the back of the heart.                      Oblique Vein of Left Atrium: Drains blood from the left atrium.               Left Marginal Vein: Drains blood from the left ventricle.                         Right Marginal Vein: Drains blood from the right ventricle.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
