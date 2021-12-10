import React from 'react'
import pappu from '../../images/pappu-gang2.png'
import airbnb from '../../images/airbnb.png'
import google from '../../images/google.png'
import ProjectCard from './ProjectCard'
function Projects() {

    const projectData = [
        {
            img: google,
            projectName: "Google clone",
            boldText: "React.js, Google Api's",
            bodyText: "*Dynamic ",
            link: 'https://react-google01.herokuapp.com/'
        },
        {
            img: airbnb,
            projectName: "Airbnb clone",
            boldText: "Next.js, Tailwind.css",
            bodyText: "*Dynamic *Responsive",
            link: 'https://airbnb-ui-h4wmd53e7-abnaim33.vercel.app/'
        },
        {
            img: pappu,
            projectName: "Instagram clone",
            boldText: "React.js, Node.js, Express.js and MongoDb",
            bodyText: "*Dynamic *Responsive *Full-stack",
            link: 'https://pappu-gang.herokuapp.com/'
        },
    ]

    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <h2 className="title">My Works</h2>


                <div className="projects-content">


                    {projectData.map((data) => (
                        <ProjectCard data={data} />
                    ))}

                </div>




            </div>
        </section>
    )
}

export default Projects
