import React from 'react'

class Message extends React.Component {
    render() {
        const { name, text, time, image } = this.props.message
        return (
            <div className="message">
                {name==='You' ? <img src='/you.jpg' alt="icon"/> : <img src={image} alt="icon"/>}
                <h4 className='who'>
                    {name}
                </h4>
                <p className='time'>
                    {time}
                </p>
                <p className='text'>
                    {text}
                </p>
            </div>
        )
    }
}

export default Message 