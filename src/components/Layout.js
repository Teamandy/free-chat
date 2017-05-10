import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import FriendsList from './FriendsList'
import PersonalChat from './PersonalChat'
import Home from './Home'

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: ['Nick', 'Caroline']
        }
    }

    render() {
        return (
            <Router>
                <div className='main__page'>
                    <Route exact path='/chat' render={
                        () =>
                            <Home payload={
                                {
                                    friends: this.state.friends,
                                    quantity: this.state.friends.length
                                }
                            } />
                    } />
                    <Route path='/chat/:name' render={
                        ({ match }) =>
                            <PersonalChat payload={
                                {
                                    name: match.params.name,
                                    friends: this.state.friends,
                                    quantity: this.state.friends.length
                                }
                            } />
                    } />
                </div>
            </Router>
        )
    }
}

export default Layout