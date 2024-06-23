document.addEventListener('DOMContentLoaded', function() {
    fetch('past-events.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('past-events-container');
            data.forEach(event => {
                const card = document.createElement('div');
                card.className = 'past-event-card';
                
                const img = document.createElement('img');
                img.src = event.image;
                img.alt = `${event.title} Image`;
                img.className = 'small-image';

                const details = document.createElement('div');
                details.className = 'event-details';
                
                const title = document.createElement('h3');
                title.textContent = event.title;

                const date = document.createElement('p');
                date.textContent = `Date: ${event.date}`;

                const location = document.createElement('p');
                location.textContent = `Location: ${event.location}`;

                const link = document.createElement('a');
                link.href = event.link;
                link.className = 'details-button';
                link.textContent = 'View Details';

                details.appendChild(title);
                details.appendChild(date);
                details.appendChild(location);
                details.appendChild(link);

                card.appendChild(img);
                card.appendChild(details);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching past events:', error));
});
