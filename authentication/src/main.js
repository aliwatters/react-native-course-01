import React from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';

import Parse from 'parse/react-native';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';

var ROUTES = {
  signin: SignIn,
  signup: SignUp
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("APPLICATION_ID");
    Parse.serverURL = 'http://127.0.0.1:1337/parse';
    // does not ever send a value to any server - dead project
  },
  render: function() {
    return <Navigator
      style={styles.container}
      initialRoute={{name:'signin'}}
      renderScene={this.renderScene}
      configureScene={() => Navigator.SceneConfigs.FloatFromRight}
    />
  },
  renderScene: function(route, navigator){
    console.log('RENDERSCENE', route);
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
