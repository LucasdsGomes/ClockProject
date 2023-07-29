function updateTime() {
    let timeElement = document.getElementById('time');
    let weekElement = document.getElementById('week');
    let container = document.getElementById('cont');
    let imageElement = document.getElementById('image');
    let currentDate = new Date();

    let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

    let formattedLocalDate = currentDate.toLocaleDateString('en', options);
    let formattedDate = currentDate.toLocaleTimeString();

    weekElement.innerHTML = formattedLocalDate;
    timeElement.innerHTML = formattedDate;

    let currentHour = currentDate.getHours();
    let backgroundColor;
    let containerColor;
    let imageSrc;

    if (currentHour >= 6 && currentHour < 12) {
        backgroundColor = '#FFE4B5';
        containerColor = '#FAEBD7';
        imageSrc = 'imgs/sol.png'; // Morning, use the sun image
    } else if (currentHour >= 12 && currentHour < 18) {
        backgroundColor = '#FFE4C4';
        containerColor = '#FFE4B5';
        imageSrc = 'imgs/sol.png'; // Afternoon, use the sun image
    } else {
        backgroundColor = '#8A2BE2';
        containerColor = '#B0E0E6';
        imageSrc = 'imgs/lua.png'; // Evening and night, use the moon image
    }

    document.body.style.backgroundColor = backgroundColor;
    container.style.backgroundColor = containerColor;
    imageElement.src = imageSrc; // Set the image source based on the time of day
}

function updateName() {
    let nameElement = document.getElementById('name');
    let userNameInput = document.getElementById('userNameInput');

    let userName = userNameInput.value.trim();

    if (userName !== '') {
        nameElement.textContent = 'Hey, ' + userName;
        userNameInput.value = ''; // Clear the input field after updating the name
    }
}


setInterval(updateTime, 1000);
