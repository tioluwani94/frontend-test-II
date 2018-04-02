import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Image from './components/Image';

class Giphy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            images: [],
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
        if(this.state.message) {
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=lIne1HB8cggVHDagDTiFN6VQyQOJ5fb0&s=${this.state.message}`)
                .then((response) => response.json())
                .then((myJson) => {
                    this.setState({
                        message: "",
                        images: [myJson.data.images.downsized, ...this.state.images],
                    });
                })
                .catch(error => alert(`An Error Occurred '\n' ${error}`));
        }
    }

    render() {
        return (
            <div className="giphy">
                <div className="app-header">
                    <button onClick={this.goToHome}><i className="material-icons">keyboard_arrow_left</i> Back to home
                    </button>
                    <h2>giphy chat</h2>
                </div>
                <div className="giphy__chat-section">
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
                    <div className="chat-section__conversations">
                        {
                            this.state.images.map((image, i) =>
                                <Image
                                    data={image}
                                    key={i.toString()}
                                />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Giphy.defaultProps = {
    history: {
        push: () => {
        },
    }
};

Giphy.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    })
};

export default Giphy;