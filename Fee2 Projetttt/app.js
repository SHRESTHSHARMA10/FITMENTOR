const events = {
    7: { title: "Event on 7th September", description: "Address: XYZ, Mode: Online, Topic: Web Development." },
    15: { title: "Event on 15th September", description: "Address: ABC, Mode: Offline, Topic: Fitness & Health." },
    28: { title: "Event on 28th September", description: "Address: LMN, Mode: Online, Topic: Digital Marketing." }
};

const highlightedDates = [7, 15, 28];

const calendar = document.getElementById('calendar');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Add days of the week to the calendar
days.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.classList.add('day');
    calendar.appendChild(dayElement);
});

// Generate September dates
for (let i = 1; i <= 30; i++) {
    const dateElement = document.createElement('div');
    dateElement.textContent = i;

    // Highlight specific dates with events
    if (highlightedDates.includes(i)) {
        dateElement.classList.add('highlight');
    }

    // Add click event to show event details
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
