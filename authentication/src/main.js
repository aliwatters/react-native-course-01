import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import SignIn from './components/authentication/signin';
import Parse from 'parse/react-native';

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("APPLICATION_ID", "MASTER_KEY");
  },
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
