import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Button from '../common/button';
import Parse from 'parse/react-native';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  render: function() {
    return <View style={styles.container}>
      <Text>Sign In</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
      />
      <Text style={styles.label}>{this.state.errorMessage}</Text>
      <Button text={'Sign In'} onPress={this.onPress} />
      <Button text={'I need an account...'} onPress={this.onSignupPress} />
    </View>
  },
  onPress: function() {
    this.setState({errorMessage: ''});
    console.log('Sign In Time', this.state);
    Parse.User.logIn(this.state.username, this.state.password,
    {
      success:(user) => console.log('SUCCESS', user),
      error: (data, error) => {
        this.setState({errorMessage: error.message});
        console.log('ERROR', data, error)
      }
    });
  },
  onSignupPress: function(){
    // navigate to signup
    // ideal => navigator.push('signup');
    this.props.navigator.push({name:'signup'});
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
