import React from 'react'
import axios from 'axios'

class OpponentsForm extends React.Component {
    messageHandler(e) {
        e.preventDefault()
        const { name, refresh, typing } = this.props
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
            typing('', '', false)
        })
    }
    typingHandler() {
        const { typing, name } = this.props
        typing(name, this.text.value, true)
    }
    render() {
        const { name } = this.props
        return (
            <div className="page__chat">
                <img src={`/${name}.jpg`} alt="yourface" />
                <h2 className="page__title">{name}</h2>
                <form id='send-message' onSubmit={this.messageHandler.bind(this)}>
                    <p>
                        <textarea onChange={this.typingHandler.bind(this)} ref={(textarea) => { this.text = textarea }} name="text" id={`${name}`}></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Send" />
                    </p>
                </form>
            </div>
        )
    }
}

export default OpponentsForm