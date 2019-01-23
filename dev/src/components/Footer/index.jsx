import React from 'react';

export default function Footer() {
    const a = '#';
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__head">
                    <a href={a} className="footer__logo icon-logo"> </a>
                    <nav className="footer__nav">
                        <a href="#aboutMe" className="footer__link">About me</a>
                        <a href="#relationships" className="footer__link">Relationships</a>
                        <a href="#requirements" className="footer__link">Requirements</a>
                        <a href="#users" className="footer__link">Users</a>
                        <a href="#form" className="footer__link">Sign Up</a>
                    </nav>
                </div>
                <div className="footer__body">

                    <div className="footer__contacts">
                        <div className="footer__item">
                            <i className="footer__icon icon-mail"></i>
                            <a className="footer__contact" href="mailto:work.of.future@gmail.com">work.of.future@gmail.com</a>
                        </div>

                        <div className="footer__item">
                            <i className="footer__icon icon-cellphone"></i>
                            <a className="footer__contact" href="tel:+38 (050) 789 24 98">+38 (095) 556 08 45</a>
                        </div>

                        <div className="footer__item">
                            <i className="footer__icon icon-phone"></i>
                            <a className="footer__contact" href="tel:+38 (095) 556 08 45">+38 (050) 789 24 98</a>
                        </div>
                    </div>

                    <div className="footer__other">
                        <a href={a} className="footer__link">News</a>
                        <a href={a} className="footer__link">Overview</a>
                        <a href={a} className="footer__link">Tutorials</a>
                        <a href={a} className="footer__link">FAQ</a>
                        <a href={a} className="footer__link">Blog</a>
                        <a href={a} className="footer__link">Design</a>
                        <a href={a} className="footer__link">Resources</a>
                        <a href={a} className="footer__link">Terms</a>
                        <a href={a} className="footer__link">Partners</a>
                        <a href={a} className="footer__link">Code</a>
                        <a href={a} className="footer__link">Guides</a>
                        <a href={a} className="footer__link">Conditions</a>
                        <a href={a} className="footer__link">Shop</a>
                        <a href={a} className="footer__link">Collaborate</a>
                        <a href={a} className="footer__link">Examples</a>
                        <a href={a} className="footer__link">Help</a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span className="footer__description">© abz.agency specially for the test task</span>
                    <div className="footer__social">
                        <a href={a} className="footer__scon icon-facebook"> </a>
                        <a href={a} className="footer__scon icon-linkedin"> </a>
                        <a href={a} className="footer__scon icon-instagram"> </a>
                        <a href={a} className="footer__scon icon-twitter"> </a>
                        <a href={a} className="footer__scon icon-pinterest"> </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}