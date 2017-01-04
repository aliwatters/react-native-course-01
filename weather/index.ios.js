import React from 'react';
import {
  AppRegistry,
  Dimensions,
  MapView, // Just works in ios...
  StyleSheet,
  Text,
  View
} from 'react-native';

import Api from './src/api.js';

var Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {latitude: 0, longitude:0},
      city: '',
      temperature: '',
      description: ''
      // portland - [{latitude: 45.452, longitude: -122.695}];
    }
  },
  render: function() {
    return <View style={styles.container}>
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}>
      </MapView>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{this.state.city}</Text>
        <Text style={styles.text}>{this.state.temperature}</Text>
        <Text style={styles.text}>{this.state.description}</Text>
      </View>
    </View>
  },
  onRegionChangeComplete: function(region) {
    console.log(region);
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

    Api(region.latitude, region.longitude).then((data) => {
      console.log('DATA:', data);
      this.setState(data);
    });
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5fcff'
  },
  map: {
    flex:2
  },
  textWrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);
