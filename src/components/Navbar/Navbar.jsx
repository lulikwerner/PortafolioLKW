import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false); 
        }
    };

    return (
        <header>
            <nav className={`Nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>LUCILA KERSTIN <span>WERNER</span></li>
                    <button onClick={() => scrollToSection('section1')} className="Option-Nav">Home</button>
                    <button onClick={() => scrollToSection('section2')} className="Option-Nav">About</button>
                    <button onClick={() => scrollToSection('section3')} className="Option-Nav">Portfolio</button>
                    <button onClick={() => scrollToSection('section4')} className="Option-Nav">Contact</button>
                </ul>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

                        





