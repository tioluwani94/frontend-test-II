import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty';
import dropRight from 'lodash/dropRight';
import queryString from 'query-string';
import RelatedArtist from './components/RelatedArtist';
import TopSong from './components/TopSong';
import spotifyLogo from '../../images/spotify.png';

class Spotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: "",
            relatedArtists: [],
            topSongs: [],
            token: "",
            isLoading: false
        };
        this.submitMessage = this.submitMessage.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginRedirect = this.loginRedirect.bind(this);
    }

    componentDidMount() {
        let token = queryString.parse(window.location.search);
        this.setState({
            token: token.access_token
        });
    }

    loginRedirect() {
        window.location.href = 'http://localhost:8888/login';
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
        if (this.state.artist) {
            this.setState({
                isLoading: !this.state.isLoading,
            });
            fetch(`https://api.spotify.com/v1/search?q=${this.state.artist}&type=artist&market=US&limit=1`, {
                headers: {
                    'Authorization': `Bearer ${this.state.token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        isLoading: !this.state.isLoading,
                    });
                    if (!isEmpty(data)) {
                        const artistId = data.artists.items[0].id;
                        fetch(`	https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
                            headers: {
                                'Authorization': `Bearer ${this.state.token}`
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                this.setState({
                                    relatedArtists: data.artists
                                })
                            });
                        fetch(`	https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`, {
                            headers: {
                                'Authorization': `Bearer ${this.state.token}`
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                this.setState({
                                    topSongs: data.tracks
                                });
                            });
                    }
                })
                .catch(error => alert(`An Error Occurred '\n' ${error}`));
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
                    {
                        !this.state.token ?
                            <div className="login-section">
                                <div className="logo-container">
                                    <img src={spotifyLogo} alt="spotify-logo"/>
                                </div>
                                <h2>Welcome, login to get started</h2>
                                <button
                                    className="login-btn"
                                    onClick={this.loginRedirect}
                                >Sign in to Spotify
                                </button>
                            </div> :
                            <div className="app-section">
                                <div className="logo-container">
                                    <img src={spotifyLogo} alt="spotify-logo"/>
                                </div>
                                {this.state.isLoading ? <p>Loading...</p> : null}
                                <form className="artist-form" onSubmit={this.submitMessage}>
                                    <input
                                        className="artist-input"
                                        placeholder="Enter artist name here"
                                        value={this.state.artist}
                                        onChange={this.handleChange}
                                    />
                                </form>
                                <div className="artist-info">
                                    <div className="artist-info__related-artists">
                                        <h2>Related Artists</h2>
                                        {
                                            dropRight(this.state.relatedArtists, 10).map(
                                                (artist, i) =>
                                                    <RelatedArtist data={artist} key={i.toString()}/>
                                            )
                                        }
                                    </div>
                                    <div className="artist-info__top-songs">
                                        <h2>Top Songs</h2>
                                        {
                                            this.state.topSongs.map(
                                                (song, i) =>
                                                    <TopSong data={song} key={i.toString()}/>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Spotify;