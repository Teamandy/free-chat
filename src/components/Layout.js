import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import FriendsList from './FriendsList'
import PersonalChat from './PersonalChat'
import Home from './Home'

class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: ["Nick", "Caroline"]
        }
    }

    render() {
        return (
            <Router>
                <div className='main__page'>

                    <div className="chat__friends">
                        <h2 className="page__title">All friends</h2>
                        <FriendsList friends={this.state.friends} />
                    </div>

                    <Route exact path='/chat' component={Home} />
                    <Route path='/chat/:name' render={
                        ({ match }) => <PersonalChat payload={
                            {
                                name: match.params.name
                            }
                        } />
                    } />

                </div>
            </Router>
        )
    }
}

export default Layout