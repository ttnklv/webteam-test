import React, {Component} from 'react';
import '../exterrnal-libs/layout/index.css';
import './styles/landing.pcss';
import './../exterrnal-libs/breakpoints/index.css';
import StartPicture from './components/StartPic';
import Achievement from './components/Achievement';
import Cards from './components/Cards.js'
import Multiplayerteams from './components/Multiplayerteams';
import GetInTouch from './components/GetInTouch'
import Ask from './components/Ask';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenSize: window.screen.availWidth,
      showForm: false
    };
  }

  screenSize() {
    let className = "";
    if (this.state.screenSize >= 1540) className = "wt-offset-top-xlg-96";
    else if (this.state.screenSize >= 1276) className = "wt-offset-top-lg-96";
    else if (this.state.screenSize >= 1000) className = "wt-offset-top-md-96";
    else className = "wt-offset-top-sm-48";
    return className;
  };

  test() {
    this.setState({showForm: !this.state.showForm});
  }


  render() {
    return (
      <div>
        <div className="wt-offset-top-0">
          {this.state.showForm ?
            <div id="getInTouchBack ">
              <div><GetInTouch/></div>
            </div>
            :
            <div>
              <div className="startPic_size">
                <div id="startPic"><StartPicture/></div>
              </div>
              <div className={this.screenSize()} id="achievement"><Achievement/></div>
              <div className={this.screenSize()}><Cards/></div>
              <div className={this.screenSize()}><Multiplayerteams/></div>
              <div className={this.screenSize()}><Ask/></div>
              <div className="wt-offset-top-xlg-96" id="getInTouchBack">
                <div id="getInTouchBack_s">
                  <GetInTouch/></div>
              </div>
            </div>
          }
          {/*<button id="getInTouch_button" onClick={() => this.test()}>Get in touch</button>*/}
        </div>
      </div>
    )
  }
}

export default App;