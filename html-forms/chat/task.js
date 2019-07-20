const chat_widget = document.getElementsByClassName('chat-widget');
chat_widget[0].addEventListener('click', function(event) {
    chat_widget[0].classList.toggle("chat-widget_active");
})

let chat_widget_input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let hours = (new Date()).getHours();
let minutes = (new Date()).getMinutes();

messages.innerHTML += `
            <div class="message">
                <div class="message__time">`+ hours + ":" + minutes + `</div>
                <div class="message__text"> Здравствуйте, чем могу помочь? </div>
            </div>
        `;
chat_widget_input.addEventListener('change', event => {
    event.preventDefault();

    if (chat_widget_input.value !== '') {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">`+ hours + ":" + minutes + `</div>
                <div class="message__text">` + chat_widget_input.value + `</div>
            </div>
        `;
    }

    chat_widget_input.value = '';

    messages.innerHTML += `
            <div class="message">
                <div class="message__time">`+ hours + ":" + minutes + `</div>
                <div class="message__text"> Я завис, помогите! </div>
            </div>
        `;
    
})
