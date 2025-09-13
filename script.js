let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

    // Handle 12/24 hour format conversion
    if (!is24HourFormat) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
    }

    // Add leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Update clock display
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}${ampm}`;

    // Update date display
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    const button = document.getElementById('formatToggle');
    
    // Update button text
    button.textContent = is24HourFormat ? '12H Format' : '24H Format';
    
    // Immediately update the clock display
    updateClock();
}

// Initialize clock when page loads
updateClock();

// Update clock every second
setInterval(updateClock, 1000);