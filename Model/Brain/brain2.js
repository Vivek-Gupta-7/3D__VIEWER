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




// Handling the button click event
document.getElementById('function').addEventListener('click', () => {
    const text = "The brain controls many functions in the body, including thoughtsand decisions,memories and emotions, movement , sensation, automatic behavior, organ function,speech and language,learning and remembering and digestion. The brain is the most complex organ in the human body and responsible for all the qualities that define our humanity. Together,the brain and spinal cord that extendsfrom it make up the central nervous system.The brain is enclosed within the skull which provides frontal,lateral and dorsal protection. The brain is made up of nervous tissues,blood vessels ,nerves and about 100 billion nervr cell.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});