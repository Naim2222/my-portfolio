import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import upwork from '../../images/iconfinder_1929180_upwork_icon_64px.png'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close'


function Contact() {
    const [name, setName] = useState('')
    const [open, setOpen] = React.useState(false);
    const [errorOpen, setErrorOpen] = useState(false)

    console.log(name)
    function sendEmail(e) {
        e.preventDefault();
        setName(e.target.name.value)
        setOpen(true)

        emailjs.sendForm('service_r12gspn', 'template_jzlyi6q', e.target, 'user_ZlpDD3ZJLdpkRy7MgEdOv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setErrorOpen(true)
            });
        e.target.reset()
    }
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>I am available in linkedin.You can message me there</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Md Naim Hossen</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-comment-dots"></i>
                                <div className="info">
                                    <div className="head">Social Address</div>
                                    <div className="sub-title">
                                        <a href="https://www.linkedin.com/in/md-naim-hossen-567679201/" target="blank"><i className="fab fa-linkedin-in"></i></a>


                                        <a href="https://www.upwork.com/freelancers/~013746b3a4d02b8ae1" target="blank"><img className="upwork" src={upwork} alt="upwork-icon" /></a>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">md.naimhossen.1111@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">

                        <Box sx={{ width: '100%' }}>
                            <Collapse in={open}>
                                <Alert
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                >
                                    {name}, your message was sent successfully
                                </Alert>
                            </Collapse>

                        </Box>


                        <div className="text">Message me</div>
                        <form action="#" onSubmit={sendEmail}>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" name="name" placeholder="Name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" name="message" placeholder="Message.." required></textarea>
                            </div>
                            <div className="button">
                                <button type="submit">Send message</button>
                            </div>
                        </form>


                        <Box sx={{ width: '100%' }}>
                            <Collapse in={errorOpen}>
                                <Alert
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setErrorOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                    severity="error"
                                >
                                    Something went wrong, please try later for message me
                                </Alert>
                            </Collapse>

                        </Box>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
