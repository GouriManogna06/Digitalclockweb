function updateClock() {
    const now = new Date();
  
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    hours = String(hours).padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
  
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, dateOptions);
    document.getElementById('date').textContent = dateString;
  }
  
  // Theme toggle
  document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
  
  setInterval(updateClock, 1000);
  updateClock(); // Initial call
  