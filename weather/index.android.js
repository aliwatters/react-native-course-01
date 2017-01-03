import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

var Weather = React.createClass({
  mapSize: function() {
    // need to do this on Android for the react-native-maps - will need to reload
    // rotate.
    var dimensions = Dimensions.get('window');
    console.log('Dimensions', dimensions);
    return  {width: dimensions.width, height: dimensions.height};
  },
  render: function() {
    return <View style={[styles.map, this.border('red')]}>
    <MapView
      style={[styles.map, this.border('blue'), this.mapSize()]}
      region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
       }} />
    </View>
  },
  initialRegion: function() {
    return {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
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
