import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="toolbar">
            <nav className="toolbar-nav">
                <div className="app-name">
                    <Link to="/"><span className="logo">reFinde</span></Link>
                </div>
                <div className="spacer"></div>
                <div className="navbar">
                    <span><Link to="/">Home</Link></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;