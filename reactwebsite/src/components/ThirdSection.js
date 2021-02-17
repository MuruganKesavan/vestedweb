import React from 'react'
import '../App.css';
import './ThirdSection.css';
import { Button } from "antd";

function ThirdSection() {
    return (
      <div className="container3">
    <div className="title2">We are <strong>Vested</strong><br />
      <p class="paragraph2">Vested is a US Securities and Exchange Commission <br />Registered Investment Adviser (see <a href="#risk-disclosure" class="goto_sec" data-id="risk_enclosure_wrap">risk disclosure</a>). You<br />can view our registration <a href="https://adviserinfo.sec.gov/firm/summary/299272">here</a>. Our online platform<br />enables investors from India to invest in US stocks and<br />ETFs easily.</p>
   
   <div className="row3">
    <div className="column3"><img width="50" height="25" src="images/divide.svg"></img>
    </div><div className="column4">Fractional share investing</div></div>

    <div className="row3"><div class="column3"><img width="50" height="25" src="images/stack.svg"></img></div><div className="column4">No minimum balance</div></div>

    <div class="row3"><div className="column3"><img width="50" height="25" src="images/bank.svg"></img></div><div className="column4">Withdraw anytime</div></div>

    <div class="row3"><div className="column3"><img width="50" height="25" src="images/user.svg"></img></div><div className="column4">Withdraw anytime</div></div>
    </div>
    <div className="video">
      <iframe className="youtube" src="https://www.youtube.com/embed/zZ4ddq8bxOc?version=3&amp;rel=1&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;fs=1&amp;hl=en-US&amp;autohide=2&amp;wmode=transparent" allowTransparency="True" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" />
    </div>
</div>

  )
}

export default ThirdSection;
