import React, { Component } from 'react';
import * as actions from '../../store/aciton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Load from '../Loader';
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip';


class Users extends Component {


    constructor(props) {
        super(props);

        this.addUsers = this.addUsers.bind(this);
    }

    componentDidMount() {
        this.props.actions.getOurUsers(this.props.count);
    }


    renderItems(item, idx) {
        return (
            <div className="users__item" key={idx}>
                <img src={item.photo} alt="userphoto" className="users__img" />
                <div className="users__info">
                    <span className="users__name"><EllipsisWithTooltip>{item.name}</EllipsisWithTooltip></span>
                    <span className="users__position"><EllipsisWithTooltip>{item.position}</EllipsisWithTooltip></span>
                    <a href={"mailto:" + item.email} className="users__email"><EllipsisWithTooltip>{item.email}</EllipsisWithTooltip></a>
                    <a href={"tel:" + item.phone} className="users__tel"><EllipsisWithTooltip>{item.phone}</EllipsisWithTooltip></a>
                </div>
            </div>
        );
    }


    addUsers(e) {
        e.preventDefault();
        
        // this.props.actions.setCount(this.props.count);
        this.props.actions.getOurUsers(this.props.count);
    }


    render() {

        const { colleagues, count, isLoadingUsers } = this.props;
        const overflowStyle = {
            whiteSpace: 'normal'
        }

        return (
            <section className="users" id="users">
                <div className="container">
                    <EllipsisWithTooltip style={overflowStyle} placement="bottom">
                        <h1 className="users__title">Our cheerful users</h1>
                    </EllipsisWithTooltip>
                    <EllipsisWithTooltip style={overflowStyle} placement="bottom">
                        <h2 className="users__caption">Attention! Sorting users by registration date</h2>
                    </EllipsisWithTooltip>
                    <div className="users__box">
                        {colleagues.map(this.renderItems)}
                    </div>
                    {isLoadingUsers ?
                        <Load />
                        :
                        count > colleagues.length + 6
                            ?
                            <p className="users__complete">No more employees.</p>
                            :
                            <EllipsisWithTooltip>
                                <button className="users__button" onClick={this.addUsers}>Show more</button>
                            </EllipsisWithTooltip>}

                </div>
            </section>
        );
    }
}


export default connect(
    state => ({
        colleagues: state.colleagues,
        count: state.count,
        isLoadingUsers: state.isLoadingUsers
    }),

    dispatch => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Users);
