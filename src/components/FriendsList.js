import React from 'react'
import Friend from './Friend'

class FriendsList extends React.Component {
    render() {
        const { friends, activeName } = this.props
        return (
            <ul className="friends__list">
                {friends.map((friend, index) => {
                    return activeName == friend ?
                    <Friend name={friend} activeName={true} key={index}/> : 
                    <Friend name={friend} activeName={false} key={index}/>
                })}
            </ul>
        )
    }
}

export default FriendsList