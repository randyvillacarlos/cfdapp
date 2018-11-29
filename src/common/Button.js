'use strict';
import React, {
  Component 
}                   from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text
}                   from 'react-native';

class Button extends Component {

  handlePress(event) {
    this.props.onPress(event);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={(e)=>this.handlePress(e)} >
        <Text style={this.props.textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}


Button.propTypes = {
  style       : PropTypes.any,
  textStyle   : PropTypes.any,
  children    : PropTypes.node.isRequired,
  onPress     : PropTypes.func.isRequired
};


export default Button;
