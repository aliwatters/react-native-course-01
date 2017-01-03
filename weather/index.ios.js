import React from 'react';
import {
  AppRegistry,
  Dimensions,
  MapView, // Just works in ios...
  StyleSheet,
  Text,
  View
} from 'react-native';

var Weather = React.createClass({
  getInitialState: function() {
    return {
      pin: {latitude: 0, longitude:0}
      // portland - [{latitude: 45.452, longitude: -122.695}];
    }
  },
  render: function() {
    return <MapView
      annotations={[this.state.pin]}
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map}>
    </MapView>
  },
  onRegionChangeComplete: function(region) {
    console.log(region);
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
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
  map: {
    flex:1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
