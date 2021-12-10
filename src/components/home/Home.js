import React from 'react'
import myPic from '../../images/mySmallPic.png'
import wave from '../../images/wave.svg'

function Home() {

    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };



    return (
        <section className="home" id="home"
            style={{ display: 'display', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Welcome, my name is</div>
                        <div className="text-2">Naim Hossen</div>
                        {/* <div className="text-3">And I'm a MERN Stack developer...</div> */}

                        <div><h1>
                            <a href="" class="typewrite" data-period="2000" data-type='[ "I am a MERN Stack Developer.", "I am a Next.js Developer", "I am a web developer" ]'>
                                <span class="wrap"></span>
                            </a>
                        </h1></div>

                        <a className="hireMe-btn" href="https://www.linkedin.com/in/md-naim-hossen-567679201/" target="blank">Hire me</a>
                    </div>
                </div>
                <div className="home-right-div" style={{ width: '400px', height: '400px', border: '1px solid #0c9e3c', borderRadius: '18rem' }}>
                    <img src={myPic} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
            <div className="wave">
                <img src={wave} alt="" />
            </div>
        </section>
    )
}

export default Home
