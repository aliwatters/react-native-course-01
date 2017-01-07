import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

import Button from '../common/button';
import Parse from 'parse/react-native';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  },
  render: function() {
    return <View style={styles.container}>
      <Text>Sign Up</Text>

    <Text style={styles.label}>Username</Text>
    <TextInput
        style={styles.input}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})}
      />

      <Text style={styles.label}>Password</Text>
    <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.confirmPassword}
        onChangeText={(text) => this.setState({confirmPassword: text})}
      />

      <Text style={styles.label}>{this.state.errorMessage}</Text>
      <Button text='Sign Up' onPress={this.onSignUpPress} />
      <Button text='I have an account' onPress={this.onBackPress} />
  </View>
  },
  onSignUpPress: function() {
    if (this.state.password !== this.state.confirmPassword) {
      return this.setState({errorMessage:'Your password does not match'});
    }

    var user = new Parse.User();
    user.set('username', this.state.username);
    user.set('password', this.state.password);

    this.setState({errorMessage:''});
    user.signUp(null, {
      success: (user) => console.log(user),
      error: (user, error) => {
        this.setState({errorMessage: error.message});
        console.log(user, error);
      }
    });
  },
  onBackPress: function() {
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18,
  },
  input: {
    padding:4,
    height:40,
    width:180,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5

  }
});
