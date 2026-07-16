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
    const text = " A motherboard is the main circuit board in a computer or other electronic devices. Also serve as the backbone that connects all essential components, allowing them to communicate and work together. Key components such as the CPU (central processing unit), RAM (random access memory), storage devices, and external devices (like USBs and graphics cards) are either connected directly to the motherboard or interact with it through expansion slots and ports.It connect all the components of a computer together, allowing them to communicate and perform tasks. It's the main printed circuit board (PCB) in a computer, and is usually made of a firm, non-conductive material like plastic with thin layers of copper or aluminum foil . These layers, called traces, form circuits that connect the various components. Also contains sockets and slots for connecting other components, such as RAM, USB ports, and external devices like Wi-Fi, Ethernet, and graphics cards. ";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});



// Handling the button click event
document.getElementById('button1').addEventListener('click', () => {
    const text = "A CPU socket on a motherboard is a physical connector that holds and links the processor (CPU) to the motherboard. It enables communication between the CPU and the rest of the computer’s hardware components. The type of CPU socket determines which processors are compatible with the motherboard, as different CPUs require specific socket types.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button2').addEventListener('click', () => {
    const text = " The chipset plays a crucial role in dictating what hardware and features are supported by the motherboard.The chipset  is a collection of circuits that manage communication between the CPU, memory, storage devices, and other components. It determines the features and capabilities of the motherboard, such as support for overclocking, the number of PCIe lanes, the type of RAM that can be used, and the connectivity options (like USB ports and SATA connections). ";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button3').addEventListener('click', () => {
    const text = " RAM slots on a motherboard are multiple sockets designed to hold memory modules (RAM). These slots allow the system to expand its memory capacity by installing additional or higher-capacity RAM sticks, enabling better performance and multitasking.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button4').addEventListener('click', () => {
    const text = " Expansion slots on a motherboard are connectors that allow you to add additional hardware components, such as graphics cards, sound cards, network cards, or storage controllers. These slots, like PCIe (Peripheral Component Interconnect Express) or older PCI, enable you to expand the functionality of the computer by integrating more features beyond the motherboard’s built-in components.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button5').addEventListener('click', () => {
    const text = " The power connector on a motherboard is the interface that connects the motherboard to the power supply unit (PSU). It distributes electrical power to the motherboard and its components, such as the CPU, RAM, and expansion cards. The most common power connectors are the 24-pin main connector for overall power and an additional 4-pin or 8-pin connector for the CPU.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button6').addEventListener('click', () => {
    const text = " The BIOS/UEFI chip on a motherboard stores the firmware that initializes hardware during the boot process and provides an interface between the operating system and the hardware. BIOS (Basic Input/Output System) is the traditional firmware, while UEFI (Unified Extensible Firmware Interface) is a more modern version with enhanced features like faster boot times, support for larger hard drives, and a provide user-friendly interface.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button7').addEventListener('click', () => {
    const text = "The CMOS battery on a motherboard is a small battery that provides power to the CMOS (Complementary Metal-Oxide-Semiconductor) chip, which stores system settings like the date, time, and hardware configurations, even when the computer is turned off. This ensures that your system retains its basic configuration settings when powered down or unplugged. When the CMOS battery dies, settings may reset, and the date and time may need to be reconfigured.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button8').addEventListener('click', () => {
    const text = "I/O (Input/Output) ports on a motherboard are the physical connectors that allow external devices to communicate with the computer. These ports are typically located on the back of the motherboard and include a variety of connection types, such as USB ports for external devices, HDMI or DisplayPort for video output, Ethernet for network connections, and audio jacks for sound. They enable input from external devices and output to displays, printers, and other hardware.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button9').addEventListener('click', () => {
    const text = "USB headers on a motherboard are internal connectors that allow  to connect additional USB ports to the front or top of a computer case. These headers typically come in 9-pin or 19-pin configurations and enable the connection of USB 2.0 or USB 3.0 ports. By using USB headers, you can easily expand the number of USB ports available for connecting devices like keyboards, mice, flash drives, and other peripherals.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button10').addEventListener('click', () => {
    const text = "Southbridge and Northbridge refer to components on a motherboard that manage communication between the CPU and other parts of the system. The Northbridge handles high-speed connections, including the CPU, RAM, and graphics card, while the Southbridge manages lower-speed peripherals such as storage devices, USB ports, and audio. Together, they work to facilitate data flow within the computer.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button11').addEventListener('click', () => {
    const text = "Heatsinks and cooling systems in computers are designed to dissipate heat generated by components like the CPU and GPU. Heatsinks, typically made of metal, absorb and distribute heat away from these parts, while cooling systems, which may include fans or liquid cooling solutions, enhance airflow or fluid circulation to maintain optimal temperatures. Together, they help prevent overheating and ensure stable performance.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button12').addEventListener('click', () => {
    const text = "The 20-pin ATX power connector is a cable interface that provides power from the power supply unit (PSU) to the motherboard. This connector supplies essential electrical power to the motherboard and its components, including the CPU and memory. It is a standard connector used in many older ATX motherboards to facilitate proper power distribution within the system.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button13').addEventListener('click', () => {
    const text = "DRAM (Dynamic Random Access Memory) is a type of volatile memory used in computers and other devices to store data temporarily while the system is powered on. It allows for quick read and write access to data, enabling efficient operation of applications and processes. Unlike non-volatile memory, DRAM loses its data when the power is turned off.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button14').addEventListener('click', () => {
    const text = " An IDE (Integrated Drive Electronics) connector is a type of interface used to connect storage devices, such as hard drives and CD/DVD drives, to a motherboard. This connector facilitates the transfer of data between the motherboard and the drives, enabling the system to access and manage stored information. IDE connectors were commonly used in older computer systems before the introduction of newer interfaces like SATA.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button15').addEventListener('click', () => {
    const text = "An AGP (Accelerated Graphics Port) slot is a specialized interface on a motherboard designed specifically for connecting graphics cards. It provides a direct connection between the graphics card and the CPU, allowing for faster data transfer rates compared to standard PCI slots. AGP slots were widely used in earlier computer systems to enhance graphics performance before being largely replaced by PCI Express (PCIe) slots.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button16').addEventListener('click', () => {
    const text = "A PCI (Peripheral Component Interconnect) slot is a standard interface on a motherboard that allows various expansion cards to be connected, such as sound cards, network cards, and storage controllers. It provides a pathway for data transfer between these cards and the motherboard, enabling the addition of new features and functionalities to the computer. While once common, PCI slots have largely been succeeded by PCI Express (PCIe) slots in modern systems.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button17').addEventListener('click', () => {
    const text = " Mouse and keyboard ports are connectors on a computer that allow the connection of input devices like mice and keyboards. These ports enable the transmission of data from the input devices to the computer, facilitating user interaction. Traditionally, these ports were often PS/2 connectors, but they are now commonly replaced by USB ports in modern systems.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button18').addEventListener('click', () => {
    const text = "The power supply connector is an interface that links the power supply unit (PSU) to the motherboard, providing essential electrical power for the system's operation. It distributes power to various components, including the CPU, RAM, and peripheral devices, ensuring that the entire system functions properly.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button19').addEventListener('click', () => {
    const text = "A parallel port is a type of interface on a computer that allows for the connection of peripherals, such as printers and scanners, using multiple data lines simultaneously. It enables the transfer of multiple bits of data at once, allowing for faster communication with connected devices. Parallel ports were commonly used in older systems but have largely been replaced by USB and other modern interfaces.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button20').addEventListener('click', () => {
    const text = "FDC (Floppy Disk Controller) is a component on a motherboard responsible for managing the operation of floppy disk drives. It facilitates the reading from and writing to floppy disks, allowing data to be accessed and stored. While floppy disks were widely used in the past, FDCs have become largely obsolete with the decline of floppy disk technology in favor of more modern storage solutions.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});

// Handling the button click event
document.getElementById('button21').addEventListener('click', () => {
    const text = "A DIP switch (Dual In-line Package switch) is a small electronic component consisting of a series of individual switches mounted on a single housing. It is used to configure hardware settings on a circuit board or device by allowing users to toggle specific switches on or off. DIP switches are commonly found in computers and various electronic devices for setting options such as device addresses or operational modes.";
    
    // Trigger the voice assistant without showing any text
    speakText(text);
    
});


    