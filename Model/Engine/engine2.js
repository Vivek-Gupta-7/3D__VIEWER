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
    const text = "Internal combustion is the basis for how a bike engine works; it typically uses a four-stroke cycle. The four separate phases of this cycle are the intake,compression, power, and exhaust. A mixture of fuel and air can enter the combustion chamber during the intake stroke when the piston descends and the  intake valve opens. This air-fuel mixture is compressed to raise its temperature and pressure as the piston rises during the compression stroke. In order   to avoid leaks, the intake and exhaust valves stay closed during compression.   A spark plug ignites the compressed air-fuel mixture when the piston reaches the top of the cylinder. The power stroke, which is started by this ignition,is when the combustion gasses rapidly expand, forcing the piston downward and producing the energy needed to move the crankshaft. This linear velocity    is subsequently transformed into rotational motion via the crankshaft, propelling the motorcycle's wheels. Following this, the exhaust stroke happens,  during which the exhaust valve opens and the piston rises once more, releasing the burned gasses into the exhaust system.   The piston, crankshaft, valves, spark plug, and fuel delivery system—which may consist of a fuel injector or a carburetor—are important parts of    this process. The timing system of the engine makes sure that the valves open and close in perfect synchronization with the piston's movement.  Engines are either liquid-cooled or air-cooled, depending on the design, and proper cooling and lubricating systems are necessary to keep them from overheating.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});



// Handling the button click event
document.getElementById('button1').addEventListener('click', () => {
    const text = "The camshaft controls the timing of the inlet and exhaust valves, making sure they open and close at the right moments. This ensures that air and fuel enter the engine when needed and that exhaust gases leave at the right time. It’s driven by gears or a chain connected to the crankshaft, meaning it works in perfect sync with the engine.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button2').addEventListener('click', () => {
    const text = "The carburetor mixes fuel with air before sending it into the cylinder. It ensures the right amount of air and fuel are combined for efficient combustion. The carburetor controls the engine’s power and speed by adjusting the fuel-air ratio depending on how much you twist the throttle.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button3').addEventListener('click', () => {
    const text = "The coil is part of the ignition system and works with the spark plug to ignite the fuel-air mixture. It’s essentially a transformer that increases the battery’s low voltage to a high voltage needed to create a spark. The high-voltage current from the coil is sent to the spark plug, which then produces a spark to ignite the fuel inside the cylinder. Without the coil, the engine wouldn’t be able to generate the spark needed for combustion.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button4').addEventListener('click', () => {
    const text = "The connecting rod links the piston to the crankshaft. It converts the up-and-down movement of the piston into the rotating motion that turns the crankshaft. This motion is vital for driving the bike’s wheels. The connecting rod has to be strong enough to handle the rapid movement and high pressure inside the engine.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button5').addEventListener('click', () => {
    const text = "The crankshaft is a long, rotating shaft that transfers the power from the piston’s movement to the bike's wheels. As the piston moves up and down, the crankshaft spins. This spinning motion is what ultimately powers the bike. The crankshaft works together with other parts, like the flywheel, to keep the engine running smoothly";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button6').addEventListener('click', () => {
    const text = " The cylinder is like a chamber where the fuel and air mixture is burned to create power. It houses the piston, which moves up and down to help produce energy. The size and shape of the cylinder affect how much power the engine can generate. Motorbikes can have one or more cylinders depending on the engine design.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button7').addEventListener('click', () => {
    const text = "The dynamo is a small generator that produces electricity to power the bike’s lights and charge the battery while the engine is running. It converts the mechanical energy of the engine into electrical energy, ensuring that the electrical systems work properly";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button8').addEventListener('click', () => {
    const text = "The exhaust pipe carries the burnt gases out of the engine and away from the bike. It helps keep the engine clean and ensures that harmful gases don’t stay inside. The exhaust pipe also reduces the noise produced by the engine and helps release the gases safely into the air.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button9').addEventListener('click', () => {
    const text = "The exhaust valve opens at the right time to release the gases created after the fuel burns in the cylinder. This keeps the engine clean and ready for the next round of combustion. The valve’s timing is controlled by the camshaft, which ensures it opens and closes exactly when needed.<";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button10').addEventListener('click', () => {
    const text = "The float chamber in the carburetor keeps the fuel level steady. It ensures that the right amount of fuel is available for mixing with air and burning in the engine. The chamber has a small float that rises and falls with the fuel level, automatically controlling the fuel supply.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button11').addEventListener('click', () => {
    const text = "The flywheel is a heavy rotating wheel that helps the engine run smoothly. It stores energy when the engine is producing power and releases it when needed, especially between power strokes of the piston. This keeps the crankshaft spinning evenly, ensuring the bike doesn't jerk or lose power between cycles.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button12').addEventListener('click', () => {
    const text = "Gears help transfer the engine’s power to the wheels and control the bike’s speed. Different gears allow the engine to run efficiently at various speeds. When you shift gears, you’re changing how much power the engine sends to the wheels, helping the bike accelerate or go at a steady pace.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button13').addEventListener('click', () => {
    const text = "These gears connect the crankshaft to the camshaft, ensuring the camshaft turns at the right speed relative to the crankshaft. The camshaft controls the opening and closing of the engine’s valves, so it’s crucial that the gears keep the camshaft in sync with the piston’s movement. These gears help time the valves’ operation perfectly, making sure air-fuel intake and exhaust release happen at the right moments for optimal engine performance.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button14').addEventListener('click', () => {
    const text = "The inlet valve allows a mixture of fuel and air to enter the cylinder, where it will burn to produce power. It works in sync with the exhaust valve, opening at the right time to let fresh air in after the burnt gases are released. The air-fuel mixture’s quality greatly affects how efficiently the engine runs.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button15').addEventListener('click', () => {
    const text = "The jet is a small part inside the carburetor that controls the flow of fuel into the air stream. It ensures that the right amount of fuel mixes with the air before entering the cylinder for combustion. Jets are designed with tiny holes to regulate the fuel flow, and different jet sizes are used to adjust the fuel mixture based on the bike’s performance needs. The correct air-fuel ratio is important for efficient engine operation.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button16').addEventListener('click', () => {
    const text = "The oil pump circulates oil through the engine to lubricate the moving parts, reducing friction and preventing wear. Without proper lubrication, the engine would overheat, and the parts would wear out quickly. The oil pump is usually driven by the crankshaft and ensures that oil reaches all parts of the engine.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button17').addEventListener('click', () => {
    const text = " The piston is a cylindrical part that moves up and down inside the cylinder. Its motion is driven by the explosion of the fuel-air mixture. As it moves down, it generates power, and when it moves up, it prepares the engine for the next combustion cycle. The piston is connected to the crankshaft through the connecting rod, converting straight motion into rotational motion.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button18').addEventListener('click', () => {
    const text = "These rings are fitted around the piston and play a crucial role in sealing the gap between the piston and the cylinder wall. They prevent air and oil from leaking, ensuring the engine runs efficiently. The rings also help transfer heat from the piston to the cylinder, keeping everything cool.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button19').addEventListener('click', () => {
    const text = "The spark plug is a small but crucial part of the engine. It produces a tiny spark that ignites the air-fuel mixture in the cylinder, causing an explosion that pushes the piston down. Without the spark plug, the engine wouldn’t be able to start or run. The timing of the spark is very precise, happening just at the right moment for maximum power.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button20').addEventListener('click', () => {
    const text = "The starter motor is an electric motor that gets the engine turning when you start the bike. It spins the crankshaft just enough to get the engine’s combustion process going. Once the engine starts running, the starter motor disengages and stops working until the next time you start the bike.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button21').addEventListener('click', () => {
    const text = "The throttle valve controls how much air enters the carburetor. When you twist the bike’s throttle, the throttle valve opens more, allowing more air to enter and making the engine go faster. It’s directly connected to how much power the engine produces.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button22').addEventListener('click', () => {
    const text = "The toothed ring works with the flywheel to help the starter motor turn the engine over. When you start the bike, the starter motor engages with the toothed ring to spin the crankshaft and get the engine running. It ensures the bike starts smoothly and quickly.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button23').addEventListener('click', () => {
    const text = "The valve spring helps control the opening and closing of the valves (inlet and exhaust). It is positioned around the valve stem and pushes the valve closed after the camshaft pushes it open. This ensures that the valves stay closed when they should, sealing the combustion chamber. Valve springs need to be strong enough to close the valve quickly but flexible enough to allow the camshaft to push the valve open smoothly.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});


// Handling the button click event
document.getElementById('button24').addEventListener('click', () => {
    const text = "The water jacket is a hollow space around the cylinder where coolant (a special liquid) flows to absorb heat from the engine. This helps prevent the engine from overheating. The coolant circulates through the water jacket, taking heat away from the engine and keeping it at the right temperature.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});



// Handling the button click event
document.getElementById('button25').addEventListener('click', () => {
    const text = "he water pump is responsible for circulating coolant through the engine and the water jacket. It ensures that the engine stays cool by moving the coolant through the engine and radiator, where the heat is released. The pump is essential for preventing the engine from getting too hot, especially during long rides.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

