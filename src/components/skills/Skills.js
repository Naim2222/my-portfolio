import React from 'react'

function Skills() {
    return (

        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My skills & experiences.</div>
                        <p>I am working with HTML and CSS with about 1year+ experience.
                            By the way, I believe that sometimes creativity provides more value than experiences.
                        </p>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>80%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Bootstrap</span>
                                <span>95%</span>
                            </div>
                            <div className="line bootstrap"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>70%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React</span>
                                <span>90%</span>
                            </div>
                            <div className="line react"></div>
                        </div>

                        <div className="bars">
                            <div className="info">
                                <span>MongoDB</span>
                                <span>75%</span>
                            </div>
                            <div className="line mongodb"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Node</span>
                                <span>70%</span>
                            </div>
                            <div className="line node"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
