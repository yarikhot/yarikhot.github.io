import React, { Component } from 'react';

class Load extends Component {


    render() {

        return (
            <div className="load">
                <svg id="page-loader">
                    <circle cx="75" cy="75" r="20"></circle>
                    <circle cx="75" cy="75" r="35"></circle>
                    <circle cx="75" cy="75" r="50"></circle>
                    <circle cx="75" cy="75" r="65"></circle>
                </svg>
            </div>
        );
    }
}


export default (Load);
