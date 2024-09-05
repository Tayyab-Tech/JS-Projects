function sendMessage(side) {
    const messageInput = side === 'left' ? document.getElementById('MessageLeft') : document.getElementById('MessageRight');
    const message = messageInput.value.trim();
    
    if (message !== '') {
        const messageContainer = document.createElement('div');
        const profileImg = document.createElement('div');
        const profileImgSrc = document.createElement('img');
        const messageElement = document.createElement('div');
        const timeElement = document.createElement('span');

        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const formattedTime = `${hours}:${minutes}`;

        profileImg.className = 'Profile-img';
        profileImgSrc.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wd-b5DSItpmDOSqEE4HOKWUbP9TxuVTTkA&s";
        profileImg.appendChild(profileImgSrc);

        messageElement.textContent = message;
        timeElement.textContent = formattedTime;
        timeElement.className = 'message-time';

        if (side === 'left') {
            messageContainer.className = 'message-container message-container-left';
            messageElement.className = 'message message-right';
        } else {
            messageContainer.className = 'message-container';
            messageElement.className = 'message message-left';
        }

        messageElement.appendChild(timeElement);
        messageContainer.appendChild(profileImg);
        messageContainer.appendChild(messageElement);

        if (side === 'left') {
            document.getElementById('LeftChatScreen').appendChild(messageContainer);
            document.getElementById('RightChatScreen').appendChild(messageContainer.cloneNode(true));
        } else {
            document.getElementById('RightChatScreen').appendChild(messageContainer);
            document.getElementById('LeftChatScreen').appendChild(messageContainer.cloneNode(true));
        }
        
        messageInput.value = '';
    }
    return false;
}