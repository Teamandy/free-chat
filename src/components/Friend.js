import React from 'react'
import { Link } from 'react-router-dom'

class Friend extends React.Component {
    render() {
        const { name } = this.props
        return (
            <Link to={`/chat/${name.toLowerCase()}`}>
                <li className="friend__item">
                    {name}
                </li>
            </Link>
        )
    }
}

export default Friend