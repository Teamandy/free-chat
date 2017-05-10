import React from 'react'
import { Link } from 'react-router-dom'

class Friend extends React.Component {
    render() {
        const { name, activeName } = this.props
        return (
            <Link to={`/chat/${name.toLowerCase()}`}>
                <li ref={(li)=>{this.li = li}} className={activeName===true ? "friend__item active" : "friend__item"}>
                    <img src={`/${name.toLowerCase()}.png`} alt="icon" />
                    <span className="friend__name">{name}</span>
                </li>
            </Link>
        )
    }
}

export default Friend