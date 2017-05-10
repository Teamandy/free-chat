import React from 'react'
import axios from 'axios'

class YourForm extends React.Component {
    messageHandler(e) {
        e.preventDefault()
        const { name, refresh, typingAction } = this.props
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
            //clean up your typing from chatlist
            typingAction('', '', false)
        })
    }
    typingHandler() {
        const { typingAction } = this.props
        typingAction('You', this.text.value, true)
    }
    onBlurHandler() {
        const { typingAction } = this.props
        //clean up your typing from chatlist
        typingAction('', '', false)
    }
    render() {
        const { name, typing } = this.props
        return (
            <div className="chat__form">
                <form id='send-message' onSubmit={this.messageHandler.bind(this)}>
                    <textarea onBlur={this.onBlurHandler.bind(this)} onChange={this.typingHandler.bind(this)} ref={(textarea) => { this.text = textarea }} name="text" id="you"></textarea>
                    <input className={typing.istyping === true && typing.whoIsTyping === 'You' ? "active" : "inactive"} type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default YourForm

