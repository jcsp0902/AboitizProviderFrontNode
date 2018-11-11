import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

class Header extends Component {
  render() {
    return (
      <section className="Header-section">
        <h1> Aboitiz </h1>
        {/* <Input placeholder="Keyword" className="search"/> */}
        <Link to='/home'>
          <Button icon="home">
            HOME
          </Button>
        </Link>
        <Link className="apply-button" to={`/service-application`} >
          <Button icon="form">
          SERVICES
          </Button>
        </Link>
        <div className="right-panel">
          <Link to={`/customer-dashboard`} >
            <h5>Service Provider</h5>
          </Link>
          <Link to={`/notification-center`} >
            <Icon type="notification" />
          </Link>
          <Icon type="setting" />
        </div>
        {/* Starter Kit
        <Link to="/"> Home </Link>
        <Link to="/test"> Test </Link> */}
      </section>
    );
  }
}

export default Header;
