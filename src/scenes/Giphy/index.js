import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Giphy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
        this.submitMessage = this.submitMessage.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    goToHome() {
        this.props.history.push('/');
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    submitMessage(e) {
        e.preventDefault();
        this.setState({
            message: ""
        });
    }

    render() {
        return (
            <div className="giphy">
                <div className="giphy__header">
                    <button onClick={this.goToHome}> <i className="material-icons">keyboard_arrow_left</i> Back to home</button>
                    <h2>giphy chat</h2>
                </div>
                <div className="giphy__chat-section">
                    <div className="chat-section__conversations">

                    </div>
                    <div className="chat-section__input">
                        <form onSubmit={this.submitMessage}>
                            <input
                                value={this.state.message}
                                onChange={this.handleChange}
                                className="text-input"
                                placeholder="Type your message here"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Giphy.defaultProps = {
    history: {
        push: () => {},
    }
};

Giphy.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    })
};

export default Giphy;