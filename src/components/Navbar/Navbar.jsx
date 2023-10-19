import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header>
            <nav className="Nav">
                <ul>
                <li>LUCILA KERSTIN <span>WERNER</span></li>
                    <button onClick={() => scrollToSection('section1')} className="Option-Nav">Home</button>
                    <button onClick={() => scrollToSection('section2')} className="Option-Nav">About</button>
                    <button onClick={() => scrollToSection('section3')} className="Option-Nav">Portafolio</button>
                    <button onClick={() => scrollToSection('section4')} className="Option-Nav">Contact</button>
                    <label htmlFor="check" className="close-menu"><i className="fas fa-times"></i></label>             
                    <label htmlFor="check" className="open-menu"><i className="fas fa-bars"></i></label>
                </ul>

            </nav>
        </header>
    );
};

export default Navbar;

                        





