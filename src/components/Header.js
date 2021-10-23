import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="toolbar">
            <nav className="toolbar-nav">
                <div className="app-name">
                    <Link className="logo" to="/"><span className="logo-r">reFinde</span></Link>
                </div>
                <div className="spacer"></div>
                <div className="navbar">
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Back</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/lang">by Language</Link>
                        </li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header;