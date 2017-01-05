import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Button from '../common/button';

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>Sign In</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.label}>Password:</Text>
      <TextInput secureTextEntry={true} style={styles.input}/>
      <Button text={'Sign In'} onPress={this.onPress} />
    </View>
  },
  onPress: function() {
    console.log('Sign In Time')
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding:4,
    height:40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
