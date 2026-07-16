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

document.getElementById('function').addEventListener('click', () => {
    const text = "Eyes are the sensory organs that allow you to see. Human eyes capture visible light from the world around and turn it into a form your brain uses     to create your sense of vision. The eye is a complex organ that is made up of many different parts, each with its own. Eyes constantly adjust the amount of     light thry get in. Eyes help us to see colour separating light into its different wave lenghts and detecting the relative intensity of each wavelength.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});



// Handling the button click event
document.getElementById('button1').addEventListener('click', () => {
    const text = "It is a Vascular layer of the eye, containing connective tissue, and lying between the retina and the sclera.Vascular layer of the eye, containing connective tissue, and lying between the retina and the sclera.The choroid provides oxygen and nourishment to the outer layers of the retina.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button2').addEventListener('click', () => {
    const text = "The conjunctiva is a thin, transparent membrane that covers the white part of the eye (the sclera) and lines the inside of the eyelids It lines the sclera and is made up of stratified squamous epithelium. It keeps our eyes moist and clear and provides lubrication by secreting mucus and tears.The conjunctiva also plays a role in protecting the eye from foreign particles and pathogens.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button3').addEventListener('click', () => {
    const text = "It is the transparent, anterior or front part of our eye, which covers the pupil and the iris. The main function is to refract the light along with the lens.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button4').addEventListener('click', () => {
    const text = "The lens is a curved structure in the eye that sits behind the iris. The lens function is to bend and focus light to help you see images clearly. Because it's flexible and changes shape, it can help you see objects at varying distances.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button5').addEventListener('click', () => {
    const text = "It is the pigmented, coloured portion of the eye, visible externally. The main function of the iris is to control the diameter of the pupil according to the light source.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button6').addEventListener('click', () => {
    const text = "It  the black, central opening of the eye, located in the center of the iris. Its primary function is to regulate the amount of light that enters the eye by adjusting its size.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button7').addEventListener('click', () => {
    const text = "The retina is the eye sensitive layer of tissue at the back of the eyeball.Images that come through the eye lens are focused on the retina.<br>The retina converts the Images to electric signals and send them along the optic nerve to the brain.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button8').addEventListener('click', () => {
    const text = " Optic nerves are of two types. These include cones and rods. Cones     Cones are the nerve cells that are more sensitive to bright light. They help in detailed central and colour vision.   Rods  Rods are the optic nerve cells that are more sensitive to dim lights. They help in peripheral vision.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button9').addEventListener('click', () => {
    const text = "The sclera is the white visible portion of the eye. It provides structural support and protection to the eye, and it helps maintain its shape. The sclera is composed of dense, fibrous connective tissue. It extends from the cornea at the front of the eye to the optic nerve at the back.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});
