document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current time in UTC
    const updateTime = () => {
        const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString().split(' ')[4]; // Extract the time part
    };

    // Function to update the current day of the week
    const updateDay = () => {
        const currentDay = document.querySelector('[data-testid="currentDay"]');
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        currentDay.textContent = days[now.getUTCDay()]; // Get the day of the week
    };

    // Initial update for both time and day
    updateTime();
    updateDay();

    // Update the time every second
    setInterval(updateTime, 1000);
});