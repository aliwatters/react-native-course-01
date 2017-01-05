import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return <TouchableHighlight
      style={styles.button}
      underlayColor='gray'
      onPress={this.props.onPress}
    >
      <Text style={styles.buttonText}>{this.props.text}</Text>
    </TouchableHighlight>
  }
});

var styles = StyleSheet.create({
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderRadius: 5,
    borderColor: '#999',
    padding: 5,
    marginTop: 10,
    height: 40
  },
  buttonText: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  }
});
