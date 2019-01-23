import Axios from "axios";

export const GET_TOKEN = 'GET_TOKEN';

export function getToken() {
    return Axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then(response => response.data)
        .then(data => ({
            type: GET_TOKEN,
            token: data.token
        }))
        .catch(error => {
            console.log(error);
            if (!alert('Pleace reload this page.')) {
                window.location.reload();
            }
        });
}

export const GET_USER = 'GET_USER';

export function getUser() {
    return Axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
        .then(response => response.data)
        .then(data => ({
            type: GET_USER,
            user: data.user
        }))
        .catch(error => {
            console.log(error);
            if (!alert('Pleace reload this page.')) {
                window.location.reload();
            }
        });
}

export const GET_POSITION = 'GET_POSITION';

export function getPosition() {
    return Axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then(response => response.data)
        .then(data => ({
            type: GET_POSITION,
            position: data.positions
        }))
        .catch(error => {
            console.log(error);
            if (!alert('Pleace reload this page.')) {
                window.location.reload();
            }
        });
}

export const GET_OUR_USERS = 'GET_OUR_USERS';

export function getOurUsers(count) {
    return (dispatch) => {
        Axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`)
        .then(response => response.data)
        .then(data => dispatch({
            type: GET_OUR_USERS,
            colleagues: data.users
        }))
        .then(dispatch(setCount(count)))
        .catch(error => {
            console.log(error);
            if (!alert('Pleace reload this page.')) {
                window.location.reload();
            }
        });
    }
}

export const SET_COUNT = 'SET_COUNT';

export function setCount(count) {
    return {
        type: 'SET_COUNT',
        count: count + 6
    }
}