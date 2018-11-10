import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import CustomerCard from '../../components/Content/CustomerCard'
const { Sider, Content } = Layout;

class Test extends Component {
 
  render() {
    return (
      <section className="dashboard-section">
      <Layout>
        <Layout>
          <Sider>
            <Button className="btn-default"> Apply New Service </Button>
            <div className="user-section">
              <div className="user-info">
              <img src="https://i.redd.it/brxxveprs2e01.png" alt="Italian Trulli"/>
              <h1> Jose Carlo San Pedro </h1>
              <h5> Customer </h5>
              </div>
              <div className="user-details">
              <h3> Email: </h3>
              <h3> jcsp0902@gmail.com </h3>
              </div>
              <div className="user-address">
              <h3> Address: </h3>
              <h3> 0239 P. Sayo St. Paltao Pulilan Bulacan</h3>
              </div>
            </div>
          </Sider>
          <Content>
            <h1>Electrician Service Application</h1>
            <CustomerCard />
            <div className="_spacer"/>
            <CustomerCard />
            <div className="_spacer"/>
            <CustomerCard />
            <div className="_spacer"/>
          </Content>
        </Layout>
      </Layout>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.blogs.blogs,
    loading: state.blogs.loading,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Test);
