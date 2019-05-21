import React, {Component} from 'react';
import bottom_beam from '../../static/img/assets/gd_bottom_beam.svg';
import connect_chel from '../../static/img/assets/gd_connect_chel.svg';
import './../../index.entry.pcss';
import './../styles/getInTouch.pcss';

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miniScreen: screen.width <= 640,
    };
  }

  render() {
    return (
      <div>
        {this.state.miniScreen?
          <div className="text_achievement text_achievement_explain">
            {/*wt-row_nowrap*/}
            <div className="wt-row wt-row_size_0 wt-row_direction_column">
              <div className="wt-col-3">
                <img className="inTouch_img_bottom " src={bottom_beam} alt="inTouch"/>
                <img className="inTouch_img_chel " src={connect_chel} alt="inTouch"/>
              </div>

              <div className="wt-col wt-offset-top-xlg-96 pad">
                <div className="wt-row wt-row_size_0 wt-row_justify_between wt-row_nowrap">
                  <div className="wt-col-12">

                    <div className="text-1 largeText-1">Get in touch</div>
                    <div className="text-1 wt-offset-top-xlg-24">Direct-message our team with any<br/>
                      questions you have about the products:
                    </div>

                    <div className="wt-offset-top-xlg-24"/>

                    <input type="text" value=" Your Name"/><br/>
                    <input className="wt-offset-top-xlg-24" type="text" value=" Your Email"/><br/>
                    <select id="selected" value="Product" className="wt-offset-top-xlg-24">
                      <option> Product</option>
                      <option> Webstorm</option>
                      <option> ReSharper</option>
                    </select>

                    <button className="wt-offset-top-xlg-24 submit_button">Submit</button>

                    <div className="finish text-1 wt-offset-top-xlg-24">Meet us GDC</div>

                    <div  className="finish text-1 wt-offset-top-xlg-24">Fancy rushing our party?
                      Meet us at <a>Game<br/> Developers Conference (GDC)</a>,
                      the world's largest professional game<br/>
                      industry event, and score some loot.
                    </div>
                  </div>
                  <div className="wt-col-auto-fill textarea"><textarea id="textarea-width">Comment</textarea></div>
                </div>
              </div>
            </div>
          </div>
          :
        <div className="text_achievement text_achievement_explain">
          {/*wt-row_nowrap*/}
          <div className="wt-row wt-row_size_0 wt-row_nowrap wt-row-xlg_justify_center">
            <div className="wt-col-3">
              <img className="inTouch_img_bottom " src={bottom_beam} alt="inTouch"/>
              <img className="inTouch_img_chel " src={connect_chel} alt="inTouch"/>
            </div>
            <div className="wt-col wt-offset-top-xlg-48 ">
              <div className="wt-row wt-row_size_0 wt-row_justify_between wt-row_nowrap">
              <div className="wt-col-12">

                <div className="text-1 largeText-1">Get in touch</div>
                <div className="text-1 wt-offset-top-xlg-24">Direct-message our team with any<br/>
                  questions you have about the products:
                </div>

                <div className="wt-offset-top-xlg-24"/>

                <input type="text" value=" Your Name"/><br/>
                <input className="wt-offset-top-xlg-24" type="text" value=" Your Email"/><br/>
                <select id="selected" value="Product" className="wt-offset-top-xlg-24">
                  <option> Product</option>
                  <option> Webstorm</option>
                  <option> ReSharper</option>
                </select>

                <button className="wt-offset-top-xlg-24 submit_button">Submit</button>

                <div className="text-1 wt-offset-top-xlg-24">Meet us GDC</div>

                <div className="text-1 wt-offset-top-xlg-24">Fancy rushing our party? Meet us at<br/>
                  <a>Game Developers Conference (GDC)</a>,<br/>
                  the world's largest professional game<br/>
                  industry event, and score some loot.
                </div>
              </div>

                <div className="wt-col-auto-fill textarea"><textarea id="textarea-width">Comment</textarea></div>

            </div>
          </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default GetInTouch;