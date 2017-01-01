// Import react library
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;

var Moment = require('moment');

var DayItem = require('./src/day-item')

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() { // helper function
    var dayItems = [];
    for (var i=1; i<=7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(<DayItem day={day} daysUntil={i} key={day} />);
    }
    return dayItems;
  }
});

// Style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // row/column (default)
    justifyContent: 'center', // vertical (when column) (flex-start, center, flex-end)
    alignItems: 'center' // horizontal
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays;
});
