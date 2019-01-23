import React, { Component } from 'react';
import * as actions from '../../store/aciton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import is from 'is_js';
import InputMask from 'react-input-mask';
import { bindAll } from 'lodash';
import Axios from "axios";


class Form extends Component {

    componentDidMount() {
        this.props.actions.getPosition();
        this.props.actions.getToken();
    }

    constructor(props) {
        super(props);

        this.state = {
            imageSrc: '',

            errorEmail: '',
            errorName: '',
            errorPhone: '',
            errorPhoto: '',
            errorPosition: '',

            isNameError: true,
            isEmailError: true,
            isPhoneError: true,
            isPhotoError: true,
            isPositionError: true,

            photoHeight: 0,
            photoWidth: 0
        }

        bindAll(this, [
            'sendForm',
            'isNameValid',
            'isEmailValid',
            'isPhotoValid',
            'isPositionValid',
            'isPhoneValid',
            'isFormValid',
            'onFileChange'
        ]);
    }



    renderSelect(position, index) {
        return (
            <option className="post__option" key={index} value={position.id}>{position.name}</option>
        );
    };


    onFileChange(e, files) {
        const photo = files || e.target.files[0];
        let url = window.URL || window.webkitURL;
        let file, img;
        if ((file = photo)) {
            img = new Image();
            img.onload = function (e) {

                this.setState({
                    photoHeight: e.path[0].width,
                    photoWidth: e.path[0].height
                });

            }.bind(this);
            img.src = url.createObjectURL(file);
        }

        this.setState({ imageSrc: photo.name });
    }

    sendForm(e) {
        e.preventDefault();

        const proxy = '';
        const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.tel.value.replace(/[_()\s]+/g, ""),
            position_id: e.target.position.value,
            photo: e.target.file.files[0]
        }
        const config = {
            headers: {
                'Authorization': this.props.token,
                // 'Access-Control-Allow-Origin': '*',
                // 'X-Requested-With': 'XMLHttpRequest',
                // 'Accept': 'multipart/form-data',
                // 'Access-Control-Allow-Credentials': 'true',
                // "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                // 'Content-Type': 'application/x-www-form-urlencoded, multipart/form-data, text/plain'
            }
        };

        if (this.isFormValid(user.name, user.email, user.phone, user.position, user.photo)) {

            Axios.post(proxy + url, {...user}, config)
                .then(response => console.log(response))
                .then(() => this.props.actions.getOurUsers(this.props.counter))
                .catch(error => {
                    console.log(error);
                    alert(error);
                });

            // fetch(url,
            //     {
            //         headers: {
            //             'Authorization': this.props.token,
            //             'Access-Control-Allow-Origin': '*',
            //             'X-Requested-With': 'XMLHttpRequest',
            //             // 'Accept': 'multipart/form-data',
            //             'Access-Control-Allow-Credentials': 'true',
            //             "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            //             "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            //             // 'Content-Type': 'application/x-www-form-urlencoded, multipart/form-data, text/plain'
            //         },
            //         method: "POST",
            //         body: {...user}
            //     })
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .then(() => this.props.actions.getOurUsers(this.props.counter))
            //     .catch(error => {
            //         console.log(error);
            //         alert(error);
            //     });
        }
    }

    isFormValid(name, email, phone, position, photo) {
        return this.isNameValid(name) && this.isEmailValid(email) && this.isPhoneValid(phone) && this.isPositionValid(position) && this.isPhotoValid(photo);
    }

    isNameValid(name) {
        let errorName = '';
        if (name.length < 2 || name === '') {
            errorName = 'Pleace write name.';
            this.setState({ errorName: errorName, isNameError: false });
            return false;
        } else {
            this.setState({ errorName: errorName, isNameError: true });
        }

        return true;
    }

    isEmailValid(email) {
        let errorEmail = '';
        if (!is.email(email) || email === '') {
            errorEmail = 'Write email.';
            this.setState({ errorEmail: errorEmail, isEmailError: false });
            return false;
        } else {
            this.setState({ errorEmail: errorEmail, isEmailError: true });
        }
        return true;
    }

    isPhoneValid(phone) {
        let errorPhone = '';
        if (phone === '' || phone.length < 13) {
            errorPhone = 'Write telephone number.';
            this.setState({ errorPhone: errorPhone, isPhoneError: false });
            return false;
        } else {
            this.setState({ errorPhone: errorPhone, isPhoneError: true });
        }

        return true;
    }

    isPositionValid(position) {
        let errorPosition = '';
        if (position === 0 || position < 0 || position === '') {
            errorPosition = 'error';
            this.setState({ errorPosition: errorPosition, isPositionError: false });
            return false;
        } else {
            this.setState({ errorPosition: errorPosition, isPositionError: true });
        }

        return true;
    }

    isPhotoValid(photo) {
        let errorPhoto = '';

        if (photo === undefined) {
            errorPhoto = 'Include photo.';
            this.setState({ errorPhoto: errorPhoto, isPhotoError: false });
            return false;
        } else if (photo.size > 5000000) {
            errorPhoto = 'Size this is image many 5MB.';
            this.setState({ errorPhoto: errorPhoto, isPhotoError: false });
            return false;
        } else if (this.state.photoHeight && this.state.photoWidth < 70) {
            errorPhoto = 'Minimum size this image of 70*70';
            this.setState({ errorPhoto: errorPhoto, isPhotoError: false });
            return false;
        } else if (photo.type !== 'image/jpeg' && 'image/jpg') {
            errorPhoto = 'Invalid format! Chose jpg/jpeg!';
            this.setState({ errorPhoto: errorPhoto, isPhotoError: false });
            return false;
        } else {
            this.setState({ errorPhoto: errorPhoto, isPhotoError: true });
        }

        return true;
    }

    render() {
        const { position } = this.props;
        const {
            imageSrc,
            errorEmail,
            errorName,
            errorPhone,
            errorPhoto,
            errorPosition,
            isNameError,
            isEmailError,
            isPhoneError,
            isPhotoError,
            isPositionError
        } = this.state;

        return (
            <section className="post" id="form">
                <div className="container">
                    <h1 className="post__title">Register to get a work</h1>
                    <h2 className="post__caption">Attention! After successful registration and alert, update the list of users in the block from the top</h2>


                    <form action="post" noValidate className="post__form" onSubmit={this.sendForm}>

                        <div className="post__box">

                            <div className="post__item">
                                <label className={isNameError ? 'post__label' : 'post__label post__label-error'}>Name</label>
                                <input id="name" type="text" className={isNameError ? 'post__input' : 'post__input post__red'} placeholder="Your name" required />
                                <label className="post__error">{errorName}</label>
                            </div>
                            <div className="post__item">
                                <label className={isEmailError ? 'post__label' : 'post__label post__label-error'}>Email</label>
                                <input id="email" type="email" className={isEmailError ? 'post__input' : 'post__sel post__red'} placeholder="Your email" required />
                                <label className="post__error">{errorEmail}</label>
                            </div>
                            <div className="post__item">
                                <label className={isPhoneError ? 'post__label' : 'post__label post__label-error'}>Phone</label>
                                <InputMask
                                    {...this.props}
                                    id="tel"
                                    mask="+38 (999) 999 99 99"
                                    maskChar="_"
                                    placeholder="+38 (___) ___ __ __"
                                    className={isPhoneError ? 'post__input post__indent' : 'post__input post__red'}
                                    required />
                                <label className="post__error">{errorPhone}</label>
                            </div>

                        </div>

                        <div className="post__box">
                            <div className="post__position">
                                <i className="post__icon icon-caret-down"></i>
                                <select defaultValue="Positions" name="position" id="position" className={isPositionError ? 'post__sel' : 'post__sel post__red'} required>
                                    <option value="" className="post__option">Select your position</option>
                                    {position.map(this.renderSelect)}
                                </select>
                                <label className="post__error">{errorPosition}</label>
                            </div>


                            <label className={isPhotoError ? 'post__upload' : 'post__upload post__red'}>
                                <label className="post__label post__down"><label className="post__error">{errorPhoto}</label>File format jpg  up to 5 MB, the minimum size of 70x70px</label>
                                <span className="post__name">{imageSrc}</span>
                                <button className="post__btn" type="button">Upload</button>
                                <input type="file" className="post__file" id="file" accept="image/.jpeg" onChange={this.onFileChange} ref="input" />
                            </label>
                        </div>

                        <button className="post__submit" type="submit">Sign Up</button>
                    </form>

                </div>

            </section>
        );
    }
}

export default connect(
    state => ({
        position: state.position,
        token: state.token,
        counter: state.counter,
    }),

    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Form);
