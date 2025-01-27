function handleCommand(command) {
    const output = document.getElementById('output');
    let response = '';

    if (command === 'chatbot') {
        response = 'Chatbot activated. How can I help you?';
    } else if (command.startsWith('chatbot ')) {
        const message = command.replace('chatbot ', '');
        fetch('http://localhost:3001/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        })
        .then(res => res.json())
        .then(data => {
            const responseOutput = document.createElement('p');
            responseOutput.textContent = data.response;
            output.appendChild(responseOutput);
        });
        return;
    } else {
        switch (command) {
            case 'help':
                response = 'Available commands: help, ls, cd, mkdir, chatbot';
                break;
            case 'ls':
                response = 'Documents  Downloads  Music  Pictures  Videos';
                break;
            default:
                response = `Command not found: ${command}`;
        }
    }

    const commandOutput = document.createElement('p');
    commandOutput.textContent = `$ ${command}`;
    output.appendChild(commandOutput);

    const responseOutput = document.createElement('p');
    responseOutput.textContent = response;
    output.appendChild(responseOutput);
}
