import React from 'react';
import bg2 from '../../imgs/bg-2.jpg';
import manlaptopv1 from '../../imgs/man-laptop-v1.svg';


export default function General() {
    return (
        <section className="general" id="requirements">
            <img src={bg2} alt="bg" className="general__bg" />
            <div className="container">
                <h2 className="general__title">General requirements for the test task</h2>
                <div className="general__box">

                    <div className="general__content">
                        <p className="general__description">Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
                        <p className="general__description">If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
                        <p className="general__description">Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
                    </div>

                    <img className="general__img" src={manlaptopv1} alt="bg" />

                </div>
            </div>
        </section>
    )
}