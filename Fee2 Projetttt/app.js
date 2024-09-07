const events = {
    7: { title: "Event on 7th September", description: "Address: XYZ, Mode: Online, Topic: Under 70Kg Bench Press Competition." },
    15: { title: "Event on 15th September", description: "Address: ABC, Mode: Offline, Topic: Fitness & Health." },
    28: { title: "Event on 28th September", description: "Address: LMN, Mode: Online, Topic: Zumba ." }
};

const highlightedDates = [7, 15, 28];

const calendar = document.getElementById('calendar');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


days.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.classList.add('day');
    calendar.appendChild(dayElement);
});

for (let i = 1; i <= 30; i++) {
    const dateElement = document.createElement('div');
    dateElement.textContent = i;

    
    if (highlightedDates.includes(i)) {
        dateElement.classList.add('highlight');
    }

   
    dateElement.addEventListener('click', () => {
        highlightDate(i);
        showEventDetails(i);
    });

    calendar.appendChild(dateElement);
}

function highlightDate(selectedDate) {
    const dates = calendar.children;
    for (let date of dates) {
        date.classList.remove('selected');
    }
    dates[selectedDate + 6].classList.add('selected');  // +6 to account for the days of the week
}

function showEventDetails(date) {
    const eventDetails = document.getElementById('event-details');
    const eventTitle = document.getElementById('event-title');
    const eventDescription = document.getElementById('event-description');

    if (events[date]) {
        eventTitle.textContent = events[date].title;
        eventDescription.textContent = events[date].description;
    } else {
        eventTitle.textContent = "No Event";
        eventDescription.textContent = "There is no event scheduled for this date.";
    }

    eventDetails.style.display = 'block';
}
