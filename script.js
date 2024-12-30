async function updateRankings() {
    const response = await fetch('https://www.balldontlie.io/api/v1/stats?per_page=5'); // Example API
    const data = await response.json();

    const teams = document.querySelectorAll('.team');
    teams.forEach((team, index) => {
        // Example of dynamically updating content
        const randomStat = data.data[index % data.data.length];
        if (randomStat) {
            team.querySelector('.category strong').textContent =
                `Updated Stat: ${randomStat.pts || 'No data available'}`;
        }
    });
}

// Call the function when the page loads
updateRankings();
