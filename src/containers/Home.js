import React, { Component } from 'react';

import '../App.css';
import Banner from '../components/Banner';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="App-intro">
          <Banner />
          <div className="row">
          <div className="col-sm-8 col-sm-offset-2 section-description">
          <p>We are a non-profit organisation supporting refugees with the dream of becoming developers.</p>
          <p>In their journey of interrupted lives, unfinished studies and integration challenges, many asylum seekers and refugees
          yearn to update their tech skills, but lack learning opportunities. <strong>We want to change this.</strong></p>
          <p>We have launched a 6-month web development programme in London, coached by a group of professional developers.</p>
          <p><strong>This is just the beginning.</strong> In the coming months we will be expanding our programme to other regions
          and cities.</p>
          <p>If you are interested in participating as a <a href="students.html#info">student</a>, <a href="volunteers.html">coach or volunteer</a>, sign up!</p>
          <p>
          For all other inquiries please contact us at <a href="mailto:contact@codeyourfuture.co" title="Contact us">contact@codeyourfuture.co</a>
          <br /><br />
          </p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

