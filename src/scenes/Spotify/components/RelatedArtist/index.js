import React from 'react';
import PropTypes from 'prop-types';
import '../../../../App.css';

const RelatedArtist = props => {
    const {data} = props;
    return (
        <div className="related-artist">
            <div className="related-artist__image-container">
                <img
                    alt={data.name}
                    src={data.images[1].url}
                    height={"80"}
                    width={"80"}
                    style={{borderRadius: '50%'}}
                />
            </div>
            <p className="related-artist__name">{data.name}</p>
        </div>
    );
};

RelatedArtist.defaultProps = {
    data: {
        images: [],
        name: ''
    },
};

RelatedArtist.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.shape({})),
        name: PropTypes.string,
    }),
};

export default RelatedArtist;
