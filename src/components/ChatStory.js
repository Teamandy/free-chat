import React from 'react'
import Message from './Message'

class ChatStory extends React.Component {
    render() {
        const { story, typing } = this.props
        return (
            <div className="chat__table">
                {story.map((msg, index) => {
                    return <Message message={msg} key={index} />
                })}
                {typing.istyping === true ?
                    <div className="message">
                        <h4>
                            {typing.whoIsTyping}
                        </h4>
                        <p className='text'>
                            {typing.text}
                        </p>
                    </div> :
                    null
                }
            </div>
        )
    }
}

export default ChatStory