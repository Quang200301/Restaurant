import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About helo you</h1>
            <img src='https://get.ringameal.com/App_Themes/Template04/img/bgHeaderPage.jpg' /><br></br><br></br><br></br><br></br>
            <div className='aboutus__'>
                <div>
                    <iframe className='map__' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.126814229364!2d108.23872177505322!3d16.058907784619088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177efafe1ddd%3A0x285ec76f7199fffe!2zMTAxIEzDqiBI4buvdSBUcsOhYywgQW4gSOG6o2kgxJDDtG5nLCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1689315958487!5m2!1svi!2s" ></iframe>
                </div>
                <div>
                    <p>Thanks for your interest. Please contact us<br /> with below info.</p>
                    <h3>Rolls Vietnamese Grill</h3>
                   
                    <p> <img className='iconphone' src='https://cdn-icons-png.flaticon.com/128/5948/5948151.png'/> <span>(703) 910-3888</span></p>
                    <p><img className='iconphone' src='https://cdn-icons-png.flaticon.com/128/10903/10903041.png'/><span>Shops at Fairfax, 10780 Fairfax Blvd, Fairfax,<br/> VA 22030, USA</span> </p>
                </div>
            </div>
        </div>
    );
};

export default About;