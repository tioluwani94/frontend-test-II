import React from 'react';
import PropTypes from 'prop-types';
import './App.css'
import materialIcons from 'material-design-icons/iconfont/material-icons.css'; // eslint-disable-line

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
