import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sectionRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false);
        }
    };

    const handleDownloadResume = () => {
        // Replace 'your_resume.pdf' with the actual path to your resume file
        const resumePath = '../assets/docs/Resume CV4.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Your_Resume.pdf';
        link.click();
        setIsMenuOpen(false);

        toast.success('Resumen Downloaded', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            icon: '👍',
            style: { color: '#997066' },
        });
    };

    return (
        <header>
            <nav className={`Nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={handleDownloadResume}>LUCILA KERSTIN <span>WERNER</span></li>
                    <button onClick={() => scrollToSection('section2')} className="Option-Nav">About</button>
                    <button onClick={() => scrollToSection('section1')} className="Option-Nav">Home</button>
                    <button onClick={() => scrollToSection('section3')} className="Option-Nav">Portfolio</button>
                    <button onClick={() => scrollToSection('section4')} className="Option-Nav">Contact</button>
                </ul>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
            <div ref={sectionRef}></div>
            <ToastContainer />
        </header>
    );
};

export default Navbar;


                        





