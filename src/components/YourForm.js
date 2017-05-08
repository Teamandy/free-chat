import React from 'react'
import axios from 'axios'

class YourForm extends React.Component {
    messageHandler(e){
        e.preventDefault()
        const {name, refresh, typing} = this.props
        axios.post(`/api/post/${name}`, {
            text: this.text.value,
            image: `/you.jpg`,
            name: 'You',
            time: new Date().toLocaleTimeString()
        }).then(() => {
            //rerendering of PersonalChat.js
            refresh(name)
            //clean up your textarea box
            this.text.value = ''
            //clean up your typing
            typing('', '', false)
        })
    }
    typingHandler(){
        const {typing} = this.props
        typing('You', this.text.value, true)
    }
    render() {
        const { name } = this.props
        return (
            <div className="page__chat">
                <img src="/you.jpg" alt="yourface"/>
                <h2 className="page__title">YOU</h2>
                <form id='send-message' onSubmit={this.messageHandler.bind(this)}>
                    <p>
                        <textarea onChange={this.typingHandler.bind(this)} ref={(textarea)=>{this.text = textarea}} name="text" id="you"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Send" />
                    </p>
                </form>
            </div>
        )
    }
}

export default YourForm

