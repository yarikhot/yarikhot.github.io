import React from 'react';
import html from '../../imgs/html.svg';
import css from '../../imgs/css.svg';
import js from '../../imgs/javascript.svg';

export default function Languages() {
    return (
        <section className="languages" id="relationships">
					<div className="container">

						<h1 className="languages__title">About my relationships with web-development</h1>

						<div className="languages__box">
							<div className="languages__item">
								<img src={html} alt="html" className="languages__img" />

								<div className="languages__info">
									<h2 className="languages__caption">I'm in love with HTML</h2>
									<p className="languages__description">Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
								</div>

							</div>
							<div className="languages__item">
								<img src={css} alt="css" className="languages__img" />

								<div className="languages__info">
									<h2 className="languages__caption">CSS is my best friend</h2>
									<p className="languages__description">Cascading Style Sheets (CSS)
	is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
								</div>

							</div>
							<div className="languages__item">
								<img src={js} alt="java script" className="languages__img" />

								<div className="languages__info">
									<h2 className="languages__caption">JavaScript is my passion</h2>
									<p className="languages__description">JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
								</div>

							</div>
						</div>
					</div>
				</section>
    )
}