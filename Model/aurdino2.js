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
    const text = "What is aurdino      Arduino operates on the fundamental principle of controlling hardware through software, utilizing a microcontroller to execute programmed instructions. Working principal of aurdino.The working principle of an Arduino is based on its microcontroller, which can read inputs (such as signals from sensors) and generate outputs (such as controlling motors or LEDs) according to the code uploaded to it.Coding Create a program using the Arduino programming language within the Arduino Integrated Development Environment (IDE).Compilationm The IDE translates the written code into machine code that the microcontroller can understand.Upload Transfer the compiled code to the Arduino board via USB or serial connection.Execution The microcontroller runs the uploaded program, performing the specified tasks.Interaction The program interacts with external devices through input/output operations, reading data from sensors and controlling actuators using digital and analog pins.How Arduino Works   The microcontroller executes the program, reading from sensors and writing to actuators.    The program uses loops (e.g., setup() and loop()) to repeatedly execute tasks.  Conditional statements and functions control the program flow.  Complex tasks are streamlined with libraries and built-in functions, such as serial communication.";

    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});



// Handling the button click event
document.getElementById('button1').addEventListener('click', () => {
    const text = " USB connector is Used to connect the Arduino to a computer for programming and power. It typically provides a standard connection for data transfer.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button2').addEventListener('click', () => {
    const text = "An external power jack for supplying voltage to the Arduino, allowing it to be powered independently from a USB connection .";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button3').addEventListener('click', () => {
    const text = "The main chip on the Arduino board (e.g., ATmega328 on the Uno) that processes instructions and controls other components.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button4').addEventListener('click', () => {
    const text = "Pins that can read varying voltage levels (typically 0-5V) from analog sensors, allowing the microcontroller to interpret signals like temperature or light intensity.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button5').addEventListener('click', () => {
    const text = " Pins that can be set to either HIGH (on) or LOW (off). They are used for reading digital sensors and controlling devices like LEDs or relays.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button6').addEventListener('click', () => {
    const text = " A button that restarts the microcontroller. It is useful for restarting the program without needing to unplug and replug the power.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button7').addEventListener('click', () => {
    const text = " A component that provides a stable clock signal to the microcontroller, ensuring accurate timing for operations.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button8').addEventListener('click', () => {
    const text = " A chip (like the ATmega16U2) that facilitates communication between the Arduino and a computer through the USB connection.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button9').addEventListener('click', () => {
    const text = "Indicates when data is being transmitted from the Arduino to the computer (transmit).ndicates when data is being received by the Arduino from the computer (receive).";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
});




