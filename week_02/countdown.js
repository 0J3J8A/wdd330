document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const startButton = document.getElementById('startButton');
    
    // Var of the STARTING TIME
    let timeLeft = 10;
    
    // var for the interval
    let countdownInterval;
    
    // Bonus challenge variables
    let isPaused = false;
    let originalTime = 10;
    
    // Update the countdown
    function updateCountdown() {
        countdownElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Time's up!";
            startButton.disabled = false;
            pauseButton.disabled = true;
        } else {
            timeLeft--;
        }
    }
    
    // Event Listener
    startButton.addEventListener('click', function() {
        // Restart Time
        timeLeft = originalTime;
        
        countdownElement.textContent = timeLeft;
        
        // Enable pause button
        pauseButton.disabled = false;
        pauseButton.textContent = "Pause";
        isPaused = false;
        
        // Starting the countdown
        clearInterval(countdownInterval);
        countdownInterval = setInterval(updateCountdown, 1000);
    });
    
    // Create Pause/Resume button
    const pauseButton = document.createElement('button');
    pauseButton.textContent = "Pause";
    pauseButton.id = "pauseButton";
    pauseButton.disabled = true;
    
    // Create custom time input
    const timeInput = document.createElement('input');
    timeInput.type = "number";
    timeInput.id = "timeInput";
    timeInput.placeholder = "Enter seconds (1-999)";
    timeInput.min = "1";
    timeInput.max = "999";
    timeInput.value = "10";
    
    const setTimeButton = document.createElement('button');
    setTimeButton.textContent = "Set Time";
    setTimeButton.id = "setTimeButton";
    
    // Insert new elements after Start button
    startButton.parentNode.insertBefore(timeInput, startButton.nextSibling);
    startButton.parentNode.insertBefore(setTimeButton, timeInput.nextSibling);
    startButton.parentNode.insertBefore(pauseButton, setTimeButton.nextSibling);
    
    // Pause/Resume button event listener
    pauseButton.addEventListener('click', function() {
        if (!isPaused) {
            // Pause
            clearInterval(countdownInterval);
            pauseButton.textContent = "Resume";
            isPaused = true;
        } else {
            // Resume
            countdownInterval = setInterval(updateCountdown, 1000);
            pauseButton.textContent = "Pause";
            isPaused = false;
        }
    });
    
    // Custom time input event listener
    setTimeButton.addEventListener('click', function() {
        const newTime = parseInt(timeInput.value);
        if (newTime > 0 && newTime <= 999) {
            originalTime = newTime;
            timeLeft = newTime;
            countdownElement.textContent = `Time set to ${newTime}s`;
        } else {
            countdownElement.textContent = "Enter 1-999 seconds";
        }
    });
    
    // MSG of starting
    countdownElement.textContent = "Click Start to begin";
});