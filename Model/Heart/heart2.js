let speech = new SpeechSynthesisUtterance();
let isPaused = false;

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

// Handling the button click event
document.getElementById('speakButton1').addEventListener('click', () => {
    const text = "The left atrium is one of the four chambers of the heart that receives oxygen-rich blood from the lungs and sends it to the left ventricle";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});

document.getElementById('speakButton2').addEventListener('click', () => {
    const text = "The right atrium is one of the four chambers of the heart that receives oxygen-poor blood from the body and pumps it to the right ventricle";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
document.getElementById('speakButton3').addEventListener('click', () => {
    const text = "The left ventricle is the heart's main pumping chamber, located in the bottom left of the heart. It's the most muscular chamber of the heart and is responsible for pumping oxygenated blood throughout the body";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});
document.getElementById('speakButton4').addEventListener('click', () => {
    const text = "The right ventricle (RV) is one of the four chambers of the heart that pumps blood to the lungs";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});

document.getElementById('speakButton5').addEventListener('click', () => {
    const text = "The heart has four valves that control the direction of blood flow and produce the heartbeat sounds:Tricuspid valve: Located between the right atrium and the right ventricle. Pulmonary valve: Located between the right ventricle and the pulmonary artery. Mitral valve: Located between the left atrium and the left ventricle.  Aortic valve: Located between the left ventricle and the aorta";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});


document.getElementById('speakButton6').addEventListener('click', () => {
    const text = "Arteries are tube-like blood vessels that transport oxygen, nutrients, and hormones throughout the body. They are a vital part of the circulatory system and are responsible for carrying blood from the heart to the body's organs and tissues";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});

document.getElementById('speakButton7').addEventListener('click', () => {
    const text = "Veins are blood vessels that carry oxygen-poor blood to your heart. Pulmonary veins are an exception because they carry oxygen-rich blood from your lungs to your heart";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});

document.getElementById('speakButton8').addEventListener('click', () => {
    const text = "The wall of the heart separates into the following layers: epicardium, myocardium, and endocardium. These 3 layers of the heart are embryologically equivalent to the 3 layers of blood vessels: tunica adventitia, tunica media, and tunica intima, respectively";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});



document.getElementById('function').addEventListener('click', () => {
    const text = "Position of Heart in Human Body : The human heart is located between the lungs in the thoracic cavity, slightly towards the left of the sternum (breastbone).It is derived from the embryonic mesodermal germ layer.                                              The Function of Heart : The function of the heart in any organism is to maintain a constant flow of blood throughout the body. This replenishes oxygen and circulates nutrients among the cells and tissues.Following are the main functions of the heart: One of the primary functions of the human heart is to pump blood throughout the body. Blood delivers oxygen, hormones, glucose and other components to various parts of the body, including the human heart. The heart also ensures that adequate blood pressure is maintained in the body.";
    // Trigger the voice assistant without showing any text
    speakText(text);
});

document.getElementById('pauseButton').addEventListener('click', () => {
    if (speechSynthesis.speaking) {
        if (isPaused) {
            speechSynthesis.resume();
            isPaused = false;
        } else {
            speechSynthesis.pause();
            isPaused = true;
        }
    }
});
