import React, {Component} from 'react';
import analysis from '../../static/img/Code_Analysis.svg';
import generation from '../../static/img/Code_Generation.svg';
import refactoring from '../../static/img/Refactoring.svg';
import './../styles/achievement.pcss';
import './../../index.entry.pcss';

class Achievement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      miniScreen: window.screen.availWidth <= 640,
    };
  }

  render() {

    return (
      <div>
        <div className="text_achievement text_achievement_title wt-offset-top-96">Unlock {this.state.miniScreen ?
          <br/> : null} the code
          quality <br/> achievement
        </div>

        {this.state.miniScreen ?
          <div>
            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
              <div className="wt-col-5"><img className="achievement-pic" id="analysis" src={analysis} alt="analysis"/>
              </div>
              <div className="wt-col-5"><img className="achievement-pic" id="generation" src={generation}
                                             alt="generation"/></div>
            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
              <div className="wt-col-5 text_achievement">Refactoring</div>
              <div className="wt-col-5 text_achievement">Code Generation</div>
            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
              <div className="wt-col-5 text_achievement_explain">Write safer & more efficient code with code analysis
              </div>
              <div className="wt-col-5 text_achievement_explain">Refactor your code base with point and click</div>
            </div>

            <div>
              <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
                <div className="wt-col-5"><img className="achievement-pic achievement-pic_small" id="refactoring"
                                               src={refactoring} alt="refactoring"/></div>
              </div>
              <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
                <div className="wt-col-5 text_achievement">Code Generation</div>
              </div>
              <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
                <div className="wt-col-5 text_achievement_explain">Avoid typing boilerplate code with code generation
                </div>
              </div>
            </div>
          </div>

          : <div>
            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
              <div className="wt-col-3"><img className="achievement-pic" id="analysis" src={analysis} alt="analysis"/>
              </div>
              <div className="wt-col-3"><img className="achievement-pic" id="generation" src={generation}
                                             alt="generation"/></div>
              <div className="wt-col-3"><img className="achievement-pic" id="refactoring" src={refactoring}
                                             alt="refactoring"/></div>
            </div>


            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
              <div className="wt-col-3 text_achievement ">Code Analysis</div>
              <div className="wt-col-3 text_achievement">Refactoring</div>
              <div className="wt-col-3 text_achievement">Code Generation</div>
            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start wt-offset-top-24">
              <div className="wt-col-3 text_achievement_explain">Write safer & more efficient code with code analysis
              </div>
              <div className="wt-col-3 text_achievement_explain">Refactor your code base with point and click</div>
              <div className="wt-col-3 text_achievement_explain">Avoid typing boilerplate code with code generation
              </div>
            </div>
          </div>}

      </div>
    )
  }
}

export default Achievement;