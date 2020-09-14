import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';

function ChatScreen () {
    const [input, setInput] = useState( '' );
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: 'https://www.spletnik.ru/img/2019/01/polly/20190123-ellen-post.jpg',
            message: 'Hi'
        },
        {
            name: 'Ellen',
            image: 'https://www.spletnik.ru/img/2019/01/polly/20190123-ellen-post.jpg',
            message: 'What happened to you yesterday?'
        },
        {
            message: 'hi, I got sick',
        },
    ]);


    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }



    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Ellen on 10/08/2020</p>
            {messages.map((message) =>
                message.name==='Ellen' ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )}

            <form onSubmit={handleSend} className="chatScreen__input">
                <input 
                    value={input}  
                    onChange={handleInputChange}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text" 
                    />
                <button type="submit" className="chatScreen__inputButton"> SEND </button>
            </form>

        </div>       
    );
}

export default ChatScreen;