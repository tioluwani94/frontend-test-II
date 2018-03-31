import React from 'react';
import PropTypes from 'prop-types';
import './Image.css'

const Image = props => {
    const {data} = props;
    return (
        <img
            alt={data.url}
            src={data.url}
            className="gif-img"
        />
    );
};

Image.defaultProps = {
    data: {
        url: '',
        height: '',
        width: '',
        size: '',
    },
};

Image.propTypes = {
    data: PropTypes.shape({
        url: PropTypes.string,
        height: PropTypes.string,
        width: PropTypes.string,
        size: PropTypes.string,
    }),
};

export default Image;
