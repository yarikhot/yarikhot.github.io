import React from 'react';
import bg1 from '../../imgs/bg-1.jpg';

export default function Test() {
    return (
        <section className="test">

            <img src={bg1} alt="bg" className="test__bg" />
            <div className="container">
                <div className="test__content">
                    <span className="test__title">Test assignment for Frontend Developer position</span>
                    <p className="test__description">We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>
                    <a className="test__button" href="#form">Sign Up</a>
                </div>
            </div>

        </section>
    )
}