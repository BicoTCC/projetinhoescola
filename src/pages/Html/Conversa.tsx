export default function conversa() {
    return (
    <div>
        <header>
        <a href="/html/chat.html">
            <button className="back-button"
                <i className="fas fa-arrow-left"></i>
            </button>
        </a>
        <div className="contact-info">
            <img src="/img/beatriz_foto.enc" alt="Profile Picture" className="profile-picture">
            <h2 className="contact-name">Beatriz</h2>
        </div>
        <button id="options-button" className="options-button"><i className="fas fa-ellipsis-v"></i></button>
        <div id="optionsMenu" className="options-menu">
            <ul>
                <li><a href="#">Avaliar</a></li>
                <li><a href="#">Bloquear</a></li>
            </ul>
        </div>
    </header>
 
 
    <div id="chat-container" className="chat-container">
        <div id="chat-box" className="chat-box"></div>
        <div className="message-input-container">
            <input type="text" id="message-input" className="message-input" placeholder="Digite sua mensagem...">
            <button onclick="sendMessage()" className="send-button"><i className="fas fa-paper-plane"></i></button>
            <label for="image-input" className="image-upload-button"><i className="fas fa-image"></i></label>
            <input type="file" id="image-input" className="image-input" accept="image/*">
        </div>
    </div>

    </div>
    )
}
