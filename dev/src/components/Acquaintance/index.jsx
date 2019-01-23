import React from 'react';
import men from '../../imgs/man-mobile.svg';

export default function Acquaintance() {
    return (
        <section className="acquaintance" id="aboutMe">

            <div className="container">
                <span className="acquaintance__title">Let's get acquainted</span>
                <div className="acquaintance__content">
                    <img src={men} alt="men with phone" className="acquaintance__img" />
                    <div className="acquaintance__info">
                        <span className="acquaintance__caption">I am cool frontend developer</span>
                        <p className="acquaintance__description">When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                        <p className="acquaintance__description">Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web. </p>
                        <a className="acquaintance__button" href="#form">Sign Up</a>
                    </div>
                </div>
            </div>

        </section>
    )
}