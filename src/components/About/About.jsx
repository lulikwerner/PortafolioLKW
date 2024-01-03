import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false);
        }
    };

    return (
        <main id="section1">
            <section className="contenta">
                <div className="img-about">
                    <img className="img-link-abt" src="../src/assets/img/office.png" />
                </div>
                <div className="about-abt">
                    <div className="about">
                        <h1 className="titlea">Let's Build something together</h1>
                        <p className="descriptiona">
                            I craft user interfaces using modern frontend
                            web technologies with back end development skills based in Python and Javascript.
                        </p>
                        <button onClick={() => scrollToSection('section3')} className="about-btn">My Projects</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
