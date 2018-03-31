import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

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
