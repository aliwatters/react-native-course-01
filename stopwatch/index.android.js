import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      startTime: null,
      running: false,
      timeElapsed: null,
      laps: []
    }
  },
  render: function() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timerWrapper}>
        <Text style={styles.timer}>
          {formatTime(this.state.timeElapsed)}
        </Text>
        </View>
        <View style={styles.buttonWrapper}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View style={styles.footer}>
          {this.laps()}
      </View>
    </View>
  },
  laps: function() {
    return this.state.laps.map(function(lap, i){
      return <View style={styles.lap}>
        <Text style={styles.lapText}>Lap #{i + 1}</Text>
        <Text style={styles.lapText}>{formatTime(lap)}</Text>
      </View>
    });
  },
  startStopButton: function() {
    var style = this.state.running? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor='gray'
      onPress={this.handleStartPress}
      style={[styles.button,style]}
      >
      <Text>{this.state.running ? 'Stop' : 'Start'}</Text>
    </TouchableHighlight>
  }      // YUK - new interval is created EVERY time clicked
,
  lapButton:function() {
    return <TouchableHighlight
      style={styles.button}
      underlayColor='gray'
      onPress={this.handleLapPress}
    >
      <Text>Lap</Text>
    </TouchableHighlight>
  },
  handleLapPress: function() {
    var lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps:this.state.laps.concat([lap]) // can't use push as modifies!
    });
  },
  handleStartPress: function() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
      return;
    }

    this.setState({startTime: new Date()});

    this.interval = setInterval(() => {
      // never do: this.state.timeElapsed = <value>
      this.setState({
        running: true,
        timeElapsed: new Date() - this.state.startTime
      });
    }, 30);

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
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex:1
  },
  footer: {
    flex:1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 90,
    width: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#0c0'
  },
  stopButton: {
    borderColor: '#c00'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
