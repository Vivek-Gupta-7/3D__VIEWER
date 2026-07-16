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

document.getElementById('midbrain').addEventListener('click', () => {
    const text = "The midbrain is a small but important part of the brain that's located at the top of the brainstem and between the forebrain and hindbrain.   It is responsible for many functions, including Motor movement,Visual and auditory processing,Eye movement,Body coordination and temperature control.   The mid brain is made up of three main parts - The colliculi, The tegmentum, and The cerebral penduncles .  It also contains the cerebral aqueduct, which allows cerebrospinal fluid to pass from the third ventricle to the fourth ventricle.          Colliculi: These are a pair of anatomical prominences in the midbrain that are part of the corpora quadrigemina. There are two types of colliculi - Inferior colliculus and superior colliculus     Tegmentum : It is the the central core of the midbrain that contains several important cell populations, nuclei, and    fiber tracts.      Cerebral penduncles: It is also known as Crus cerebri, are a pair of large bundles of fibers in the midbrain that connect the forebrain to the brainstem, cerebellum, and spinal cord. They play a key role in motor function.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
