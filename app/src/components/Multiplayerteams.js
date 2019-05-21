import React, {Component} from 'react';
import teamcity from "../../static/img/logos_JetBrains/teamcity.svg"
import upsource from "../../static/img/logos_JetBrains/upsource.svg"
import youtrack from "../../static/img/logos_JetBrains/youtrack.svg"
import team from '../../static/img/Multiplayer_Teams.svg';
import team_mini from "../../static/img/assets/gd_team.svg"
import light from "../../static/img/assets/gd_header_light.svg"
import './../../index.entry.pcss';

class Multiplayerteams extends Component {

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
            <img id="team" src={team_mini} alt="team"/>
            <img id="light_mult" src={light} alt="light"/>
            <div className="text_achievement_title_mini">Productivity suit for<br/>
              <div className="text_achievement_title_mini_big">MULTIPLAYER TEAM</div>
            </div>
            <div className="text_achievement_title_mini_mini wt-offset-top-24">
              Track everything in one place, build and emulate
              your games in many setups without having to do
              any of the usual sidequests, so you can easily review
              the code and make the process of creating glitchless
              games in your company simpler.
            </div>
            <div className="text_achievement_title_mini wt-offset-top-24">
              Check out our team tools,<br/>
              <a className="link">completely free</a> for small teams
            </div>
          </div>
          :
          <div>
            <img id="team" src={team} alt="team"/>

            <div className="text_achievement text_achievement_explain wt-offset-top-24 largeText">
              Track everything in one place, build and emulate<br/>
              your games in many setups without having to do<br/>
              any of the usual sidequests, so you can easily review<br/>
              the code and make the process of creating glitchless<br/>
              games in your company simpler.
            </div>


            <div className="text_achievement text_achievement_title wt-offset-top-24 largeText">
              Check out our team tools,<br/>
              <a className="link">completely free</a> for small teams
            </div>
          </div>}

        {this.state.miniScreen ?
          <div className="text_achievement wt-offset-top-24">
            <div className="wt-row wt-row_size_l wt-row-xlg_justify_start wt-offset-top-24">

              <div className="wt-col-6 wt-offset-top-24">
                <img className="wt-col" src={youtrack} alt="youtrack"/>
                <div className="text_achievement_explain_mini">TeamCity</div>
                <div className="text_achievement_similar_mini">Continuous integration <br/>
                  & deployment
                  <button id="learnMore" className="learnMore wt-6 wt-offset-top-24">Learn more</button>
                </div>

              </div>

              <div className="wt-col-6 wt-offset-top-24">
                <img className="wt-col" src={teamcity} alt="teamcity"/>
                <div className="text_achievement_explain_mini">TeamCity</div>
                <div className="text_achievement_similar_mini">Continuous integration <br/>
                  & deployment
                  <button id="learnMore" className="wt-6 wt-offset-top-24">Learn more</button>
                </div>
              </div>

            </div>


            <div className="wt-6 wt-offset-top-24">
              <img className="wt-col" src={upsource} alt="upsource"/>
              <div className="text_achievement_explain_mini">TeamCity</div>
              <div className="text_achievement_similar_mini">Project analytics<br/>
                & code review<br/>
                <button id="learnMore" className=" wt-6 wt-offset-top-24">Learn more</button>
              </div>
            </div>
          </div>
          :
          <div className="text_achievement wt-offset-top-24">
            <div className="wt-row wt-row-xlg_justify_start wt-offset-top-24">

              <div className="wt-col-auto-fill">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col" src={youtrack} alt="youtrack"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">TeamCity</div>
                    <div>Continuous integration <br/>
                      & deployment
                    </div>
                  </div>
                </div>
              </div>

              <div className="wt-col-auto-fill">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col" src={teamcity} alt="teamcity"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">TeamCity</div>
                    <div>Continuous integration <br/>
                      & deployment
                    </div>
                  </div>
                </div>
              </div>

              <div className="wt-col-auto-fill">
                <div className="wt-row wt-row_size_0 wt-row-xlg_justify_start">
                  <img className="wt-col" src={upsource} alt="upsource"/>
                  <div className="wt-col wt-row_size_m">
                    <div className="text_achievement_explain">TeamCity</div>
                    <div>Project analytics<br/>
                      & code review
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>}

      </div>
    )
  }
}

export default Multiplayerteams;