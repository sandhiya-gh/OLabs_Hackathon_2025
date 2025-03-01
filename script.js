const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeChatbot = document.getElementById('close-chatbot');

chatbotIcon.addEventListener('click', () => {
    chatbotPopup.style.display = 'block';
});

closeChatbot.addEventListener('click', () => {
    chatbotPopup.style.display = 'none';
});

const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const sendMessageButton = document.getElementById('send-message');

sendMessageButton.addEventListener('click', async () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        chatbotInput.value = '';

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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` 
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userMessage }]
            })
        });

        const data = await response.json();
        const botMessage = data.choices[0].message.content;
        addMessage(botMessage, 'bot');
    }
});

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

const phValue = document.getElementById('ph-value');
const tempValue = document.getElementById('temp-value');
const gasValue = document.getElementById('gas-value');

setInterval(() => {
    phValue.textContent = (Math.random() * 14).toFixed(2); 
    tempValue.textContent = `${(Math.random() * 100).toFixed(2)}°C`; 
    gasValue.textContent = Math.random() > 0.5 ? 'Safe' : 'Danger'; 
}, 5000);

const periodicTable = document.getElementById('periodic-table');
elements.forEach(element => {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'element';
    elementDiv.textContent = element.symbol;
    elementDiv.setAttribute('data-number', element.number);
    periodicTable.appendChild(elementDiv);
});

const elementDivs = document.querySelectorAll('.element');
const elementPopup = document.getElementById('element-popup');
const closePopup = document.getElementById('close-popup');

elementDivs.forEach(div => {
    div.addEventListener('click', () => {
        const elementNumber = div.getAttribute('data-number');
        const element = elements.find(el => el.number == elementNumber);
        if (element) {
            document.getElementById('element-name').textContent = element.name;
            document.getElementById('element-number').textContent = element.number;
            document.getElementById('element-symbol').textContent = element.symbol;
            document.getElementById('element-mass').textContent = element.mass;
            document.getElementById('element-category').textContent = element.category;
            document.getElementById('element-config').textContent = element.config;
            document.getElementById('element-oxidation').textContent = element.oxidation;
            document.getElementById('element-electronegativity').textContent = element.electronegativity;
            document.getElementById('element-melting').textContent = element.melting;
            document.getElementById('element-boiling').textContent = element.boiling;
            document.getElementById('element-year').textContent = element.year;
            elementPopup.style.display = 'block';
        }
    });
});

closePopup.addEventListener('click', () => {
    elementPopup.style.display = 'none';
});

fetch('assets/elements.json')
    .then(response => response.json())
    .then(data => {
        const periodicTable = document.getElementById('periodic-table');
        data.forEach(element => {
            const elementDiv = document.createElement('div');
            elementDiv.className = 'element';
            elementDiv.textContent = element.symbol;
            elementDiv.setAttribute('data-number', element.number);
            periodicTable.appendChild(elementDiv);
        });
    });

const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdown-menu');

hamburger.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
function showElement(symbol) {
    alert(`You clicked on: ${symbol}`);
}

