import React, { Component } from 'react';
import * as actions from '../../store/aciton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.changeActive = this.changeActive.bind(this);
    }

    componentDidMount() {
        this.props.actions.getUser();
    }


    changeActive() {
        let currentActive = !this.state.active;
        this.setState({ active: currentActive });
    }

    render() {
        const { user } = this.props;
        const a = "#";

        return (

            <div className="top">
                <header className="header">
                    <div className="container">
                        <div className="header__grid">
                            <a href={a} className="header__logo icon-logo"> </a>
                            <nav className="header__nav">
                                <a href="#aboutMe" className="header__link">About me</a>
                                <a href="#relationships" className="header__link">Relationships</a>
                                <a href="#requirements" className="header__link">Requirements</a>
                                <a href="#users" className="header__link">Users</a>
                                <a href="#form" className="header__link">Sign Up</a>
                            </nav>
                            <div className="header__menu" >
                                <button onClick={this.changeActive} className={this.state.active ? "header__burger on" : "header__burger"}><span></span></button>
                            </div>

                            <div className="header__user">
                                <div className="header__info">
                                    <span className="header__name">{user.name}</span>
                                    <a href={"mailto:" + user.email} className="header__email">{user.email}</a>
                                </div>
                                <img src={user.photo} alt="face" className="header__face" />
                                <button className="header__button icon-sign-out"></button>
                            </div>
                        </div>
                    </div>
                </header>

                <nav className={this.state.active ? "header__mobile header__mobile--active" : "header__mobile"}>
					<a href="#aboutMe" className="header__link">About me</a>
					<a href="#relationships" className="header__link">Relationships</a>
					<a href="#requirements" className="header__link">Requirements</a>
					<a href="#users" className="header__link">Users</a>
					<a href="#form" className="header__link">Sign Up</a>
					<div className="header__user--mobile">
						<div className="header__info">
							<span className="header__name">{user.name}</span>
							<a href={"mailto:" + user.email} className="header__email">{user.email}</a>
						</div>
						<img src={user.photo} alt="face" className="header__face" />
						<button className="header__button icon-sign-out"></button>
					</div>
				</nav>
            </div>

        );
    }
}


export default connect(
    state => ({
        user: state.user
    }),

    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Header);
