import React, { Component } from 'react';


class Spotify extends Component {
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
            artist: e.target.value
        });
    }

    submitMessage(e) {
        e.preventDefault();
        if(this.state.artist) {
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=lIne1HB8cggVHDagDTiFN6VQyQOJ5fb0&s=${this.state.message}`)
                .then((response) => response.json())
                .then((myJson) => {
                    console.log(myJson);
                });
        }
    }

    render() {
        return (
            <div className="spotify">
                <div className="app-header">
                    <button onClick={this.goToHome}><i className="material-icons">keyboard_arrow_left</i> Back to home
                    </button>
                    <h2>Spotify artist</h2>
                </div>
                <div className="spotify__content">

                </div>
            </div>
        )
    }
}

export default Spotify;