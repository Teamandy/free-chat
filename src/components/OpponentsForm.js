import React from 'react'
import axios from 'axios'

class OpponentsForm extends React.Component {
    messageHandler(e) {
        e.preventDefault()
        const { name, refresh, typingAction } = this.props
        axios.post(`/api/post/${name}`, {
            text: this.text.value,
            image: `/${name}.jpg`,
            name: name.charAt(0).toUpperCase() + name.substring(1, name.length),
            time: new Date().toLocaleTimeString()
        }).then(() => {
            //rerendering of PersonalChat.js
            refresh(name)
            //clean up your textarea box
            this.text.value = ''
            //clean up your typing
            typingAction('', '', false)
        })
    }
    typingHandler() {
        const { typingAction, name } = this.props
        typingAction(name, this.text.value, true)
    }
    onBlurHandler() {
        const { typingAction } = this.props
        //clean up your typing from chatlist
        typingAction('', '', false)
    }
    render() {
        const { name, typing } = this.props
        return (
            <div className="chat__form chat__form--opponent">
                <h2 className="page__title">Example of chatting back by your opponent</h2>
                <div className="opponent__info">
                    <img src={`/${name}.jpg`} alt={`${name}'s face`} />
                    <h4>{name.charAt(0).toUpperCase() + name.substring(1, name.length)}</h4>
                </div>
                <form id='send-message' onSubmit={this.messageHandler.bind(this)}>
                    <textarea onBlur={this.onBlurHandler.bind(this)} onChange={this.typingHandler.bind(this)} ref={(textarea) => { this.text = textarea }} name="text" id={`${name}`}></textarea>
                    <input className={typing.istyping === true && typing.whoIsTyping !== 'You' ? "active" : "inactive"} type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default OpponentsForm