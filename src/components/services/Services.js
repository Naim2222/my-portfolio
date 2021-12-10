import React from 'react'
// import CodeIcon from '@mui/icons-material/Code';
// import BrushIcon from '@mui/icons-material/Brush';

function Services() {
    const services = [{
        first: 'this is first',
        firstDes: 'this is first description',
        icon: '<i className="fa fa-paint-brush"></i>'
    }, {
        first: 'this is first',
        firstDes: 'this is first description'
        , icon: '<i className="fa fa-paint-brush"></i>'
    }, {
        first: 'this is first',
        firstDes: 'this is first description'
        , icon: '<i className="fa fa-paint-brush"></i>'
    }]
    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My services</h2>



                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Font-end</div>
                            <p>I can make font-end design of website  using html,css,bootstrap,tailwind,javascript.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>

                            <div className="text">Responsive design</div>
                            <p>I will make a website that shows on a mobile, tablet, and desktop very beautiful.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fab fa-react"></i>
                            <div className="text">MERN Stack</div>
                            <p>I can do web development using MongoDB, Express js, React, and node js.
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Services
