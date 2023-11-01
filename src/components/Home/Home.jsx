import React from 'react';
import './Home.css';

const Profile = () => {
    return (

       
                <main>
                    <section className="content">

                      <div className="img-about">
                        <img></img>
                      </div>
                        <div className="about-abt">
                          <div className="about">
                            <h1 className="title2">ABOUT ME</h1>
                            <h2 className="motus">Designing is my passion</h2>
                            <p className="description">
                                I am a current Fullstack student at Coder House. I enjoy taking
                                complex problems and turning them into beautiful user-friendly interfaces.
                                I like working in a team, As they say: <em>"None of us is as smart as all
                                    of us"</em> When I'm not coding or pushing pixels you'll find me in
                                the gym or at the beach.
                            </p>
                            <a href="./contact_form.html" className="about-btn">Hire Me</a>
                            </div>
                        </div>
                    </section>
                </main>
 

    );
};

export default Profile;
