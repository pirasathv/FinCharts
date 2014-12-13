/** @jsx React.DOM */

var React = require("react/addons");
var PriceChart = require('../visualization/charts/pricechart.react');

var AppMain = React.createClass({
    render: function() {
        var mainStyle = {
            position: 'absolute',
            width: '1400px',
            height: '660px',
            top: '40px',
            left: '0px'
        };

        return (
            <section id="appmain" data-layout="mainlayout" style={mainStyle}>
              <PriceChart/>
            </section>
        );
    }
});

module.exports = AppMain;
