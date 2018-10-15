import React, { Component } from 'react';
import { ReactCalendar } from './Calendar';
import p from 'scheduler-library';
import './themes/blue.css';
import './themes/business.css';
import './themes/forest.css';
import './themes/gray.css';
import './themes/green.css';
import './themes/light.css';
import './themes/peach.css';
import './themes/standard.css';


class MinApp extends Component {
  constructor(props) {
    super(props);

    var date = new p.DateTime();
    var items = new p.ObservableCollection();
    
    for (var i = 0; i < 5; i++)
    {
      var item = new p.Item();
      item.subject = "calendar item" + i.toString();
      item.startTime = date.clone().addDays(Math.floor((Math.random() * 30) + 1));
      item.endTime = item.startTime.clone().addDays(Math.floor(Math.random() * 5));
      items.add(item);
    }

    this.calProps = {
      currentView: p.CalendarView.SingleMonth,
      schedule:
        {
          items: items
        }
    }
  }

  changeView(value) {
    this.reactCalendar.setState({ currentView: value });
  }

  onThemeChanged(e)
  {
      this.reactCalendar.setState({theme: e.target.value});
  }

  render() {
    return (

      <div className="App">

        <div className="header">
          <button onClick={(e) => this.changeView(1, e)}>Single Month</button>
          <button onClick={(e) => this.changeView(0, e)}>MonthRange</button>
          <button onClick={(e) => this.changeView(3, e)}>List</button>
          <button onClick={(e) => this.changeView(2, e)}>Week Range</button>
          <button onClick={(e) => this.changeView(4, e)}>Timetable</button>
          <select id="theme" onChange={this.onThemeChanged.bind(this)}>
                        <option value="">none</option>
                        <option value="standard">standard</option>
                        <option value="light">light</option>
                        <option value="business">business</option>
                        <option value="gray">gray</option>
                        <option value="forest">forest</option>
                        <option value="blue">blue</option>
                        <option value="peach">peach</option>
                        <option value="green">green</option>
                    </select>
        </div>

        <div className="container">
          <div onClick={this.handleClick} className="main">
            <ReactCalendar {...this.calProps} ref={(ref) => this.reactCalendar = ref} />
          </div>
          <div className="sidebar">
            <h1>About this sample</h1>
            <p>A sample program that shows everything needed to embed MindFusion.Scheduling in	a web page.</p>
            <h1>About JsPlanner</h1>
            <p>JsPlanner is fully interactive scheduling control for the web, that can be used to present calendars and timetables to users and
	let them edit the schedule information interactively. JsPlanner can display a schedule in several view types, such as:</p>
            <ul>
              <li>Single and multiple month views</li>
              <li>Single and multiple week views</li>
              <li>Horizontal and vertical lists of time intervals</li>
              <li>Horizontal and vertical timetables</li>
              <li>Resource view, displaying the distribution of resources over a period of time</li>
            </ul>
            <h2>Features</h2>
            <ul>
              <li>Several different view types</li>
              <li>Interactive item creation and modification</li>
              <li>Filtering and grouping</li>
              <li>Recurring events</li>
              <li>Localization support</li>
              <li>Themes</li>
              <li>XML and JSON schedule serialization</li>
            </ul>
            <p>JsPlanner is written 100% in JavaScript and can easily be integrated into any web application. It uses Flexible Box for layout.</p>
          </div>
        </div>

        <div className="footer">
          <p>Copyright 2017-2018 MindFusion LLC.</p>
        </div>

      </div>
    );
  }
}


export default MinApp;
