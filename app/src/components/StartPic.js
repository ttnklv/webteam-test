import React, {Component} from 'react';
import start from '../../static/img/GameChanging_Development_Tools.svg';
import start1 from '../../static/img/assets/gd_header_chel_mixed.svg';
import light from '../../static/img/assets/gd_header_light.svg';
import game from '../../static/img/assets/gd_game.svg';
import changind from '../../static/img/assets/gd_changing .svg'
import unreal from '../../static/img/UnrealTextLogo.svg';
import unity from '../../static/img/UnityTextLogo.svg';
import './../styles/startPic.pcss'
import './../../index.entry.pcss'

class StartPic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      miniScreen: window.screen.availWidth <= 640,
    };
  }


  render() {
    return (
      <div>
        {this.state.miniScreen ?
          <div>

            <img id="start_light" src={light} align="lighr"/>
            <div className="wt-offset-top-48">
            <img id="start_min" src={start1} alt="start"/>
            <img id="word_game" src={game} alt="start"/>
            <img id="word_changing" src={changind} align="chan"/>

            <div className="text text_block" >Trusted by developers using<br/><br/><br/>
            <div className="logo_block">
              <img className="text_img" id="unreal" src={unreal} alt="unreal"/>
              <img className="text_img" id="unity" src={unity} alt="unity"/></div>
            </div></div>
          </div>
          :
          <div>
            <img id="start" src={start} alt="start"/>
            <div className="text">Trusted by developers using
              <img className="text_img" id="unreal" src={unreal} alt="unreal"/>
              <img className="text_img" id="unity" src={unity} alt="unity"/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default StartPic;