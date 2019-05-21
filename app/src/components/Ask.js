import React, {Component} from 'react';
import ask from '../../static/img/Ask_Our_Customers.svg'
import bioware from '../../static/img/logos/bioware-mono.svg';
import blizzard from '../../static/img/logos/blizzard-mono.svg';
import bungie from '../../static/img/logos/bungie-mono.svg';
import epic from '../../static/img/logos/epic-games-mono.svg';
import insomniac from '../../static/img/logos/insomniac-games-mono.svg';
import mojang from '../../static/img/logos/mojang-mono.svg';
import naughtydog from '../../static/img/logos/naughtydog-mono.svg';
import nintendo from '../../static/img/logos/nintendo-mono.svg';
import sega from '../../static/img/logos/sega-mono.svg';
import square from '../../static/img/logos/square-enix-mono.svg';
import ubisoft from '../../static/img/logos/ubisoft-mono.svg';
import valve from '../../static/img/logos/valve.svg';
import oracul from '../../static/img/assets/gd_oracul.svg'
import './../../index.entry.pcss';

class Ask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      miniScreen: window.screen.availWidth <= 640,
    };
  }

  render() {
    return (
      <div>
        <img id="ask" className="wt-offset-top-24" src={ask} alt="ask"/>


        <div className="text_achievement text_achievement_explain wt-offset-top-24">
          4M+ developers from all over the open world trust<br/>
          JetBrains tools and use them in their everyday jobs
        </div>

        {this.state.miniScreen ?
          <div>
            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around wt-offset-top-12">

              <div className="wt-col-4">
                <img className="logo" id="nintendo" src={nintendo} alt="nintendo"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="ubisoft" src={ubisoft} alt="ubisoft"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="naughtydog" src={naughtydog} alt="naughtydog"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around">

              <div className="wt-col-4">
                <img className="logo" id="valve" src={valve} alt="valve"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="sega" src={sega} alt="sega"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="square" src={square} alt="square"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around">
              <div className="wt-col-4">
                <img className="logo" id="blizzard" src={blizzard} alt="blizzard"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="bioware" src={bioware} alt="bioware"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="bungie" src={bungie} alt="bungie"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start">

              <div className="wt-col-4">
                <img className="logo" id="mojang" src={mojang} alt="mojang"/>
              </div>
              <div className="wt-col-4">
                <img className="logo " id="epic" src={epic} alt="epic"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="insomniac" src={insomniac} alt="insomniac"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_direction_column wt-offset-top-24">

              <div className="wt-offset-top-24 wt-col-auto-fill text_ask">Using Rider to write C# makes me
                happy. I have never seen code
                refactoring tools that actually work -
                always without exception. It’s amazing
                when you can rely on it.
              </div>


              <div className="wt-offset-top-24 wt-col-auto-fill text_ask">We use TeamCity to build games for
                various platforms, in parallel, multiple
                times per day. The value we receive from
                the product, and the support from the
                dev team, are fantastic!
              </div>


              <div className="wt-offset-top-24 wt-col-auto-fill text_ask">An IDE can make or break a developer’s
                day. Both of these tools (CLion and
                Rider) help our team on a daily basis,
                allowing developers to perform their
                tasks quickly and efficiently, all the while
                seamlessly integrating with numerous
                parts of our pipeline.
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around wt-offset-top-24">

              <div className="wt-col-4 text_ask_mini">Joachim Ante,<br/>
                Unity CTO & Founder
              </div>

              <div className="wt-col-4 text_ask_mini">Oleg Gerovich,<br/>
                Senior Software Engineer,<br/>
                Wargaming Chicago-Baltimore
              </div>

              <div className="wt-col-4 text_ask_mini">Matthew Davey,<br/>
                dotBunny
              </div>

            </div>
          </div>
          :
          <div>
            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around wt-offset-top-12">

              <div className="wt-col-4">
                <img className="logo" id="nintendo" src={nintendo} alt="nintendo"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="ubisoft" src={ubisoft} alt="ubisoft"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="naughtydog" src={naughtydog} alt="naughtydog"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around">

              <div className="wt-col-4">
                <img className="logo" id="valve" src={valve} alt="valve"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="sega" src={sega} alt="sega"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="square" src={square} alt="square"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around">
              <div className="wt-col-4">
                <img className="logo" id="blizzard" src={blizzard} alt="blizzard"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="bioware" src={bioware} alt="bioware"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="bungie" src={bungie} alt="bungie"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_start">

              <div className="wt-col-4">
                <img className="logo" id="mojang" src={mojang} alt="mojang"/>
              </div>
              <div className="wt-col-4">
                <img className="logo " id="epic" src={epic} alt="epic"/>
              </div>
              <div className="wt-col-4">
                <img className="logo" id="insomniac" src={insomniac} alt="insomniac"/>
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around wt-offset-top-24">

              <div className="wt-col-4 text_ask">Using Rider to write C# makes me
                happy. I have never seen code
                refactoring tools that actually work -
                always without exception. It’s amazing
                when you can rely on it.
              </div>


              <div className="wt-col-4 text_ask">We use TeamCity to build games for
                various platforms, in parallel, multiple
                times per day. The value we receive from
                the product, and the support from the
                dev team, are fantastic!
              </div>


              <div className="wt-col-4 text_ask">An IDE can make or break a developer’s
                day. Both of these tools (CLion and
                Rider) help our team on a daily basis,
                allowing developers to perform their
                tasks quickly and efficiently, all the while
                seamlessly integrating with numerous
                parts of our pipeline.
              </div>

            </div>

            <div className="wt-row wt-row_size_l wt-row_wide wt-row_wrap wt-row-xlg_justify_around wt-offset-top-24">

              <div className="wt-col-4 text_ask_mini">Joachim Ante,<br/>
                Unity CTO & Founder
              </div>

              <div className="wt-col-4 text_ask_mini">Oleg Gerovich,<br/>
                Senior Software Engineer,<br/>
                Wargaming Chicago-Baltimore
              </div>

              <div className="wt-col-4 text_ask_mini">Matthew Davey,<br/>
                dotBunny
              </div>

            </div>
          </div>}

      </div>
    )
  }
}

export default Ask;