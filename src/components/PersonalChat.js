import React from 'react'
import axios from 'axios'
import ChatStory from './ChatStory'
import YourForm from './YourForm'
import OpponentsForm from './OpponentsForm'
import FriendsList from './FriendsList'

class PersonalChat extends React.Component {
    constructor() {
        super()
        this.state = {
            chatStory: [],
            name: '',
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
    typingMsg(name, text, istyping) {
        this.setState({
            typing: {
                whoIsTyping: name.charAt(0).toUpperCase() + name.substring(1, name.length),
                text,
                istyping
            }
        })
    }

    render() {
        const { name, friends, quantity } = this.props.payload
        if (this.state.name !== name) {
            this.switchChat(name)
        }
        return (
            <div>
                <div className='clearfix'>
                    <div className="chat__friends">
                        <h2 className="page__title">Chat list ({quantity})</h2>
                        <FriendsList friends={friends} activeName={name.charAt(0).toUpperCase() + name.substring(1, name.length)} />
                    </div>
                    <div className="page__chat">
                        <h2 className="page__title">Chatting with {name.charAt(0).toUpperCase() + name.substring(1, name.length)}</h2>
                        <ChatStory story={this.state.chatStory} typing={this.state.typing} />
                        <YourForm name={name} refresh={this.switchChat} typingAction={this.typingMsg} typing={this.state.typing} />
                    </div>
                </div>
                <OpponentsForm name={name} refresh={this.switchChat} typingAction={this.typingMsg} typing={this.state.typing} />
            </div>
        )
    }
}

export default PersonalChat