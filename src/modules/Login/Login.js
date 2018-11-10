import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tabs from 'antd/lib/tabs';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Radio from 'antd/lib/radio';
import { postCustomerRegisterEpic } from '../../stores/actions/commands/Registration'
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

function callback(key) {
  console.log(key);
}
const propTypes = {
  services: PropTypes.object.isRequired,
  // tenantProfilePreviewLoading: PropTypes.bool.isRequired,
  // inviteAgency: PropTypes.object.isRequired,
};

class Home extends Component {
  state = {
    value: 1,
    email: '',
    password: '',
    firstname:'',
    lastname: '',
    province: '',
    city:'',
    barangay:'',
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  signup =  () => {
    console.log(this.state)
    const payload = {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        username: this.state.email,
        province: this.state.province,
        city:this.state.city,
        barangay: this.state.barangay,
        street: this.state.street || '',
    }
    this.props.services.postCustomerRegisterEpic(payload)
  }
  onEmailChange = e => {
    // console.log(value)
    this.setState({email: e.target.value})
  }
  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }
  onFirstNameChange = e => {
    this.setState({firstname: e.target.value})
  }
  onLastNameChange = e => {
    this.setState({lastname: e.target.value})
  }
  onProvinceChange = e => {
    this.setState({province: e.target.value})
  }
  onCityChange = e => {
    this.setState({city: e.target.value})
  }
  onBarangayChange = e => {
    this.setState({barangay: e.target.value})
  }
  onStreetChange = e => {
    this.setState({street: e.target.value})
  }
  render() {
    
    return (
    <section className="login-section">
      <div className="form-section">
        {/* <Input placeholder="Email"/>
        <Input placeholder="Password"/>
        <Button>Login</Button> */}
        {/* <h1>
          HUSAY
        </h1> */}
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Login" key="1" className="login">
            <Input placeholder="Email" className="email-login"/>
            <Input placeholder="Password" className="password-login"/>
            <Button>Login</Button>
          </TabPane>
          <TabPane tab="Sign up for application" key="2" className="signup">
            <Input placeholder="Email" value={this.state.email} onChange={this.onEmailChange}/>
            <Input placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}/>
            <Input placeholder="First name"value={this.state.firstname} onChange={this.onFirstNameChange}/>
            <Input placeholder="Last name" value={this.state.lastname} onChange={this.onLastNameChange}/>
            <Input placeholder="Province" value={this.state.province} onChange={this.onProvinceChange}/>
            <Input placeholder="City" value={this.state.city} onChange={this.onCityChange}/>
            <Input placeholder="Barangay" value={this.state.barangay} onChange={this.onBarangayChange}/>
            <Input placeholder="Street No./ Building No." value={this.state.street} onChange={this.onStreetChange}/>
            {/* <Input placeholder="Password"/> */}
            <Button onClick={this.signup}>Sign Up</Button>
          </TabPane>
        </Tabs>
      </div>
    </section>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    services: bindActionCreators(
      {
        postCustomerRegisterEpic,
      },
      dispatch,
    ),
    dispatch,
  };
}


Home.propTypes = propTypes;
// Home.defaultProps = defaultProps;

export default connect(null, mapDispatchToProps)(Home);
