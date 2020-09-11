import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats () {
    return (
        <div className="chats">
            <Chat
                name="Ellen"
                message="What happened to you yesterday?"
                timestamp="55 minutes ago"
                profilePic="https://www.spletnik.ru/img/2019/01/polly/20190123-ellen-post.jpg"
            />
            {/*<Chat
                name="Sarah"
                message="Hello, how are you?"
                timestamp="35 minutes ago"
                profilePic="https://www4.pictures.zimbio.com/gi/Sarah+Bolger+Summer+2018+TCA+Press+Tour+Day+zX-ngMejdxjl.jpg"
            />
            <Chat
                name="Sandra"
                message="Hi!"
                timestamp="3 days ago"
                profilePic="https://i.pinimg.com/originals/c3/9b/4d/c39b4d2d8cb2c2c5e2eef7be6f80f48f.jpg"
            />
            <Chat
                name="Natasha"
                message="Do you want it or not?"
                timestamp="1 week ago"
                profilePic="https://www.kino-teatr.ru/acter/album/2155/728625.jpg"
            />*/}
        </div>
    );
}

export default Chats;