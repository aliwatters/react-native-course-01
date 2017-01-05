import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import SignIn from './components/authentication/signin';

module.exports = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <SignIn></SignIn>
    </View>
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
