import React from 'react'
import Friend from './Friend'

class FriendsList extends React.Component {
    render() {
        const { friends } = this.props
        return (
            <ul className="friends__list">
                {friends.map((friend, index) => {
                    return <Friend name={friend} key={index}/>
                })}
            </ul>
        )
    }
}

export default FriendsList