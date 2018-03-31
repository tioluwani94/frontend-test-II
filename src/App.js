import React from 'react';
import PropTypes from 'prop-types';

const App = props => (
    <div>
        {props.children}
    </div>
);

App.defaultProps = {
    children: '',
};

App.propTypes = {
    children: PropTypes.node,
};

export default App;
