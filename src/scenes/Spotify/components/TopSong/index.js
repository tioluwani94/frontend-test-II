import React from 'react';
import PropTypes from 'prop-types';
import '../../../../App.css';

const TopSong = props => {
    const {data} = props;
    return (
        <div className="related-artist">
            <div className="related-artist__image-container">
                <i className="material-icons">music_note</i>
            </div>
            <p className="related-artist__name">{data.name}</p>
        </div>
    );
};

TopSong.defaultProps = {
    data: {
        images: {},
        name: ''
    },
};

TopSong.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.shape({}),
        name: PropTypes.string,
    }),
};

export default TopSong;
