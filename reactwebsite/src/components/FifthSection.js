import '../App.css';
import './FifthSection.css';
import { Button } from "antd";
import React, { useState, useEffect } from 'react';
import {Accordion, Card} from 'react-bootstrap';
import { AccordionToggle } from 'react-bootstrap';

function FifthSection()  {
  const [teamData, setTeamData] = useState([])

  const data=[
    {"title":"How secure is this?", "content":"Vested uses 256-bit encryption and Secure Sockets Layer (SSL) to ensure the security of our platform and to protect all your information. We also employ state of the art log-in methods, automatic logouts, and ID verification to help prevent unauthorized access."},
    {"title":"Is this actually legal?",
     "content":"Yes. We follow the RBI’s Liberalized Remittance Scheme (LRS) guidelines. Instituted by the RBI, the LRS is a set of policies that governs the maximum amount and purposes of remittance. Under the LRS, an Indian resident can annually send up to USD $250,000 abroad without seeking approval from the RBI. The LRS has made it easier for Indian residents to study abroad, travel, and make investments in other countries. For more information, you can read more here. For the most up to date regulations you can refer the RBI’s website here. Please see article 6(iii) for specific LRS regulations regarding investments in equity."}
  ]

  const nbaData = async () => {
    const response = data;

    setTeamData(data)
  };

  const renderAccordion = (team, index) => {
    return (
      <Accordion key={index}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={team}>
            {team.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={team}>
            <Card.Body>
              <ul>
                <li>{team.content}</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
  useEffect(() => {
    nbaData();
  }, []);

     

    return (
        <div>
        <div className="container5">
            <div className="con-title">Not ready to invest yet?</div>
            <div><p className="para5">Sign up to receive updates about the US market and investing<br />Insight from Vested.</p></div>
            <div className="email">
            <input type="email" size="70" placeholder="Your email address" />
            <Button className="button4">Subscribe</Button>
            </div>
        </div>
        <div class="container6">Learn more about Vested</div>
      <div><p class="para6">Learn&nbsp;<a className="specific" href="https://vested.co.in/our-story/">about us</a>&nbsp;and check out these&nbsp;<a className="specific" href="https://vested.co.in/faqs/">frequently asked <br />questions</a>.</p>
      </div>

      {teamData.map(renderAccordion)}
    </div>
    )
}


export default FifthSection;
