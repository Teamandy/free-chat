import React from 'react'
import FriendsList from './FriendsList'

class Home extends React.Component {
    render() {
        const {quantity, friends} = this.props.payload
        return (
            <div>
                <div className="chat__friends">
                    <h2 className="page__title">Chat list ({quantity})</h2>
                    <FriendsList friends={friends} />
                </div>
                <div className="page__chat page__chat--start">
                    <h2 className="page__title">Your chat</h2>
                    <div className="chat">Choose a person to talk to</div>
                </div>
            </div>
        )
    }
}

export default Home