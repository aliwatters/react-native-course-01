// Import React
var React = require('react-native');
var Text = React.Text;

// Create component
var DayItem = React.createClass({
  render: function() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color: function(){
    var opacity = 1 / this.props.daysUntil;
    return 'rgba(1, 1, 1, ' + opacity + ')';
  },
  fontWeight: function() {
    var weight = 8 - this.props.daysUntil;
    return '' + (weight * 100);
  },
  fontSize: function() {
    return 70 - 6 * this.props.daysUntil;
  },
  lineHeight: function() {
    return 80 - 4 * this.props.daysUntil;
  }
});

// Export component
module.exports = DayItem;
