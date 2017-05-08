import React from 'react'

class Home extends React.Component {
    render() {
        return (            
            <div className="page__chat page__chat--start">
                <h2 className="page__title">Start chatting now!</h2>
                <div className="chat">Click on your friend to start</div>
            </div>
        )
    }
}

export default Home