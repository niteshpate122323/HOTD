document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.team-image');
    const selectedTeam = document.getElementById('selectedTeam');
    const teamNameInput = document.getElementById('teamName');
    let selectedImages = [];

    images.forEach(image => {
        image.addEventListener('click', () => {
            const teamName = teamNameInput.value;
            if (teamName) {
                if (selectedImages.length < 3) {
                    selectedImages.push(image.src);
                    selectedTeam.innerHTML = `Team ${teamName} selected: ${selectedImages.map(src => `<img src="${src}" alt="Team Image" width="300">`).join(' ')}`;
                } else {
                    alert('You can only select up to 3 team members!');
                }
            } else {
                alert('Please enter your team name first!');
            }
        });
    });
});
