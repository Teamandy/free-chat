import React from 'react'
import axios from 'axios'
import ChatStory from './ChatStory'
import YourForm from './YourForm'
import OpponentsForm from './OpponentsForm'

class PersonalChat extends React.Component {
    constructor() {
        super()
        this.state = {
            chatStory: [],
            name:'',
            typing: {
                whoIsTyping: '',
                text: '',
                istyping: false
            }
        }
        this.switchChat = this.switchChat.bind(this)
        this.typingMsg = this.typingMsg.bind(this)
    }
    switchChat(name) {
        axios.get(`/api/get/${name}`).then((response) => {
            this.setState({ chatStory: response.data, name })
        })
    }
    //handling temporary typing messages by checking istyping=true/false
    typingMsg(name, text, istyping){
        this.setState({typing: {
            whoIsTyping: name.charAt(0).toUpperCase() + name.substring(1, name.length),
            text,
            istyping
        }})
    }

    render() {
        const { payload } = this.props
        if(this.state.name !== payload.name){
            this.switchChat(payload.name)
        }
        return (
            <div>
                <ChatStory story={this.state.chatStory} typing={this.state.typing} />
                <div className="chat__container">
                    <YourForm name={payload.name} refresh={this.switchChat} typing={this.typingMsg}/>
                    <OpponentsForm name={payload.name} refresh={this.switchChat} typing={this.typingMsg}/>
                </div>
            </div>
        )
    }
}

export default PersonalChat