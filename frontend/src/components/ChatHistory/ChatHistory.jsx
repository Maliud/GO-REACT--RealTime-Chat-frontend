import React, {Component} from "react";
import './ChatHistory.scss'
import Message from '../Message/Message'

class ChatHistory extends Component{
    render(){
        console.log(this.props.ChatHistory);
        this.props.chatHistory.map(msg=><Message key={msg.timeStamp} message={msg.data}/>);

        return(
            <div className="ChatHistory">
                <h2>MESAJ GEÇMİŞİ</h2>
                
            </div>
        )
    }
}

export default ChatHistory;