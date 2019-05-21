import React, {Component} from 'react';
import casual from '../../static/img/card/Casual.svg';
import casual_selected from '../../static/img/card/Casual_selected.svg';
import mobile from '../../static/img/card/Mobile.svg';
import mobile_selected from '../../static/img/card/Mobile_selected.svg';
import unity from '../../static/img/card/Unity.svg';
import unity_selected from '../../static/img/card/Unity_selected.svg';
import unreal from '../../static/img/card/Unreal.svg';
import unreal_selected from '../../static/img/card/Unreal_selected.svg';
import pers_casual_dis from '../../static/img/card/game_pers_casual_disabled.svg';
import pers_casual from '../../static/img/card/game_pers_casual.svg';
import pers_mobile_dis from '../../static/img/card/game_pers_mobile_disabled.svg';
import pers_mobile from '../../static/img/card/game_pers_mobile.svg';
import pers_unity_dis from '../../static/img/card/game_pers_unity_disabled.svg';
import pers_unity from '../../static/img/card/game_pers_unity.svg';
import pers_unreal_dis from '../../static/img/card/game_pers_unreal_disabled.svg';
import cardStutus from '../../static/img/card/Stats.svg';
import pers_unreal from '../../static/img/card/game_pers_unreal.svg';
import dif_chel from '../../static/img/assets/gd_diffrent_chel.svg';
import resharper from '../../static/img/logos_JetBrains/resharper.svg';
import rider from '../../static/img/logos_JetBrains/rider.svg';
import webstorm from '../../static/img/logos_JetBrains/webstorm.svg';
import intellij from '../../static/img/logos_JetBrains/intellij-idea.svg';
import appCode from '../../static/img/logos_JetBrains/appCode.svg';
import clion from '../../static/img/logos_JetBrains/cLion.svg';
import reshapercpp from '../../static/img/logos_JetBrains/resharpercpp.svg';
import menuHero from './../../static/img/Menu_Hero.svg';

import './../../index.entry.pcss';
import './../styles/cards.pcss';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miniScreen: window.screen.availWidth <= 640,
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      selected: false
    };

    this.test = this.test.bind(this);
  }

  test(param) {
    this.setState({button1: false, button2: false, button3: false, button4: false, selected: true});
    switch (param) {
      case 1:
        this.setState({button1: true});
        break;
      case 2:
        this.setState({button2: true});
        break;
      case 3:
        this.setState({button3: true});
        break;
      case 4:
        this.setState({button4: true});
        break;
    }
  }

  render() {

    return (
      <div>

        <div className="text_achievement text_achievement_title wt-offset-top-96">Get an IDE<br/> to craft best
          {this.state.miniScreen ? <br/> : null}
          games
        </div>

        {this.state.miniScreen ?
          <div className="largeText text_achievement_explain wt-offset-top-24">
            From Activision to Zynga, cross-platform
            mobile<br/>
            games to desktop franchises and consoles –<br/>
            JetBrains tools help you quickly develop and<br/>
            maintain games in easy difficulty.</div>
          : null
        }

        {this.state.miniScreen ?
          <div className="cards">
            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row_justify_between">
              <div className="wt-col-6 cardImg wt-offset-top-24">
                <button>
                  <img className="miniPic" src={unity} alt="unity"/>
                  <img className="persPic" src={pers_unity} alt="pers_unity"/>
                </button>
              </div>

              <div className="wt-col-6 cardImg wt-offset-top-24">
                <button>
                  <img className="miniPic" src={unreal} alt="unreal"/>
                  {this.state.button2 ?
                    <img id="cardStatus" src={cardStutus} alt="card"/>
                    : null}
                  <img className="persPic" src={pers_unreal} alt="pers_unreal"/>
                </button>
              </div>

              <div className="wt-col-6 cardImg wt-offset-top-24">
                <button>
                  <img className="miniPic" id="mobile" src={mobile}
                       alt="mobile"/>
                  <img className="persPic" src={pers_mobile} alt="pers_mobile"/>
                </button>
              </div>


              <div className="wt-col-6 cardImg wt-offset-top-24">
                <button>
                  <img className="miniPic" id="casual" src={casual}
                       alt="casual"/>
                  <img className="persPic" src={pers_casual} alt="pers_casual"/>
                </button>
              </div>

            </div>
          </div>
          :
          <div className="cards">
            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_center wt-offset-top-24">
              <div className={this.state.button1 ? "wt-col-3 cardImg_selected" : "wt-col-3 cardImg"}>
                <button onClick={() => this.test(1)}>
                  <img className="miniPic" src={this.state.button1 ? unity_selected : unity} alt="unity"/>
                  <img className="persPic" src={this.state.button1 ? pers_unity : pers_unity_dis} alt="pers_unity"/>
                </button>
              </div>

              <div className={this.state.button2 ? "wt-col-3 cardImg_selected" : "wt-col-3 cardImg"}>
                <button onClick={() => this.test(2)}>
                  <img className="miniPic" src={this.state.button2 ? unreal_selected : unreal} alt="unreal"/>
                  {this.state.button2 ?
                    <img id="cardStatus" src={cardStutus} alt="card"/>
                    : null}
                  <img className="persPic" src={this.state.button2 ? pers_unreal : pers_unreal_dis} alt="pers_unreal"/>
                </button>
              </div>

              <div className={this.state.button3 ? "wt-col-3 cardImg_selected" : "wt-col-3 cardImg"}>
                <button onClick={() => this.test(3)}>
                  <img className="miniPic" id="mobile" src={this.state.button3 ? mobile_selected : mobile}
                       alt="mobile"/>
                  <img className="persPic" src={this.state.button3 ? pers_mobile : pers_mobile_dis} alt="pers_mobile"/>
                </button>
              </div>


              <div className={this.state.button4 ? "wt-col-3 cardImg_selected" : "wt-col-3 cardImg"}>
                <button onClick={() => this.test(4)}>
                  <img className="miniPic" id="casual" src={this.state.button4 ? casual_selected : casual}
                       alt="casual"/>
                  <img className="persPic" src={this.state.button4 ? pers_casual : pers_casual_dis} alt="pers_casual"/>
                </button>
              </div>

            </div>
          </div>}

        {this.state.miniScreen ? null :
          <div>
            {this.state.selected ? null :
              <div className="largeText text_achievement_explain wt-offset-top-24">
                From Activision to Zynga, cross-platform
                mobile<br/>
                games to desktop franchises and consoles –<br/>
                JetBrains tools help you quickly develop and<br/>
                maintain games in easy difficulty.
              </div>
            }</div>
        }

        {this.state.button1 ?
          <div className="text_achievement wt-offset-top-24">
            <div className="wt-offset-top-24">For games on Unity®:</div>
            <div className="wt-row wt-row-xlg_justify_start wt-offset-top-24">

              <div className="wt-col-auto-fill">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col" src={resharper} alt="resharper"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">ReSharper</div>
                    <div>a productivity mining extension<br/>
                      for Visual Studio
                    </div>
                  </div>
                </div>
              </div>

              <div className="wt-col-auto-fill slide">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col" src={rider} alt="rider"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">Rider</div>
                    <div>a cross-platform ?.NET IDE with C#<br/>
                      and Unity support
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          : null}


        {this.state.button2 ?
          <div className="text_achievement wt-offset-top-24">
            <div className="wt-offset-top-24">For games on Unreal® Engine:</div>
            <div className="wt-row wt-row-xlg_justify_start wt-offset-top-24">

              <div className="wt-col-auto-fill">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col appcode" src={clion} alt="resharper"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">CLion</div>
                    <div>a cross-platform<br/>
                      C/C++ IDE
                    </div>
                  </div>
                </div>
              </div>

              <div className="wt-col-auto-fill slide">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col" src={reshapercpp} alt="rider"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">ReSharper C++</div>
                    <div>a productivity extension achievement<br/>
                      for Visual Studio for C++
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          : null}


        {this.state.button3 ?
          <div className="text_achievement wt-offset-top-24">
            <div className="wt-offset-top-24">For mobile games:</div>

            <div className="wt-row wt-row-xlg_justify_start wt-offset-top-24">

              <div className="wt-col-auto-fill">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col" src={intellij} alt="intellij"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">IntelliJ IDEA</div>
                    <div>for Android development, including<br/>
                      Kotlin, an ofcial Android supported<br/>
                      language
                    </div>
                  </div>
                </div>
              </div>

              <div className="wt-col-auto-fill slide">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col appcode" src={appCode} alt="appcode"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">AppCode</div>
                    <div>for iOS/macOS development
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          : null}


        {this.state.button4 ?
          <div className="text_achievement wt-offset-top-24">
            <div className="wt-offset-top-24">For games on Web technologies:</div>

            <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start wt-offset-top-24">
              <img className="wt-col" src={webstorm} alt="webstorm"/>
              <div className="wt-col wt-row_size_m">
                <div className="text_achievement_explain">WebStorm</div>
                <div>a productivity extension achievement <br/>
                  for Visual Studio for C++
                </div>
              </div>
            </div>

          </div>
          : null}

        {this.state.button2 ?
          <div id="menuHero">
            <div className="round round_bright"/>
            <div className="round round_bright wt-offset-top-48"/>
            <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start wt-offset-top-48 wt-row_align-items_center">
              <img className="wt-col-3" src={menuHero} alt="menuHero"/>
              <div className="wt-col-auto-fill text_achievement_explain">Chose hero</div>
            </div>
            <div className="round wt-offset-top-48"/>
            <div className="round wt-offset-top-48"/>
          </div>
          : null}

        {this.state.miniScreen?
          <div className="wt-row wt-row_size_0 wt-row_direction_column wt-row-xlg_justify_start wt-offset-top-96">

            <div className="wt-col-auto-fill">
              <div className="text_achievement">Are you using something diferent<br/>
                to craft your games?
              </div>
              <div id="textCard" className="text_achievement_explain wt-offset-top-24">
                We've got more options and products
                to meet your needs.<br/>
                Filter and learn more <a>here</a>.
              </div>
            </div>

            <img id="dif_chel" className="wt-col-3" src={dif_chel} alt="dif_chel"/>
          </div>
          :
        <div className="wt-row wt-row_size_0 wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-96">

          <img id="dif_chel" className="wt-col-3" src={dif_chel} alt="dif_chel"/>

          <div className="wt-col-5">
            <div className="text_achievement">Are you using something diferent<br/>
              to craft your games?
            </div>
            <div id="textCard" className="text_achievement_explain wt-offset-top-24">
              We've got more options and products
              to meet your needs.<br/>
              Filter and learn more <a>here</a>.
            </div>
          </div>
        </div>}



      </div>
    )
  }
}

export default Cards;