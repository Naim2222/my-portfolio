import React from 'react'
import myPic from '../../images/IMG_20201207_174109.jpg'
import resume from '../../md_naim_hossen.docx'
function About() {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src={myPic} alt="" />
                    </div>
                    <div className="column right">
                        <div className="text">I'm Naim and I'm a Web Developer</div>

                        <p>Hi, I am a self tough mern stack developer. I have experience of working with mern stack though I don't have professional working experience. I have done some big projects like Instagram clone, e-commerce website, Airbnb clone, etc
                            Thank You </p>

                        <a href={resume} download="naim_hossen_portfolio.docx">Download CV</a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
