import React from 'react';
import './Footer.css';
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <main>
            <section className="contentf">
                <div className="descriptionf">
                    <p>@2023 Lucila Kerstin Werner</p>
                </div>
                <div className="rounded-social-buttons">
                <a className="social-button-Github" href="https://github.com/lulikwerner" target="_blank"><TbBrandGithubFilled /></a>
                    <a className="social-button-linkedin" href="https://www.linkedin.com/in/lucila-kerstin-werner-278b3026/" target="_blank"><TfiLinkedin /></a>
                </div>
            </section>
        </main>
    );
};

export default Footer;
