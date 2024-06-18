import React, {Component} from "react";
import Header from "./components/Header/Header.jsx";
import ChatHistory from "./components/ChatHistory/ChatHistory.jsx";
import ChatInput from './components/ChatInput/ChatInput.jsx'
import './App.css';
import {connect, sendMsg} from './api/index.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      ChatHistory: []
    }
  }

  componentDidMount(){
    connect((msg) => {
      console.log("Yeni Mesaj")
      this.setState(prevState => ({
        chatHistory : [...prevState.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }
  render(){
    return(
      <div>
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory}/>
        <ChatInput send={this.send}/>
      </div>
    );
  }
}

export default App;