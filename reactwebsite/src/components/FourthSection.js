import React from 'react'
import '../App.css';
import './FourthSection.css';
import { Button } from "antd";

function FourthSection() {
    return (
        <div>
           <div className="container4"><h1>Ready to <b>diversify your portfolio?</b> Sign up today</h1>
           <Button className="button2">Get Started</Button>
            </div> 
    
        <div>
            <div class="head_sec"><h1>No Commission Investing.</h1></div>
<div><p class="para4">Simple and affordable. Check out our pricing page <a href="https://vested.co.in/pricing/">here</a>.Start<br /> investing today in 3 easy steps.</p>
</div>
</div>

<div class="com_dis">
    <Button className="button3">ⓘ Commissions Disclosure</Button>
</div>

<div className="division">
    <div className="div1">
        <div className="mult"><div className="no">1</div><div className="col1"><img src="images/login-1.svg" /></div></div>
        <div className="row4">Create an Account</div>
    </div>
    <div className="dot"><img src="https://i2.wp.com/vested.co.in/wp-content/uploads/2020/09/001-more.png?w=1020&amp;ssl=1" width="32" height="32"/>
    </div>
    <div className="div2">
        <div className="mult"><div className="no">2</div><div className="col1"><img src="images/fund-1.svg" /></div></div>
        <div className="row4">Fund Your Account</div>
    </div>
    <div className="dot"><img src="https://i2.wp.com/vested.co.in/wp-content/uploads/2020/09/001-more.png?w=1020&amp;ssl=1" width="32" height="32"/>
    </div>
    <div className="div3">
        <div className="mult"><div className="no">3</div><div className="col1"><img src="images/invest-1.svg" /></div></div>
        <div className="row4">Invest with confidence</div>
    </div>

</div>
</div>
    )
}

export default FourthSection;
