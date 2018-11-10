import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'antd/lib/button';
import { Modal, Input, Radio, notification  } from 'antd';

const { TextArea } = Input;

const RadioGroup = Radio.Group;
class NotificationCard extends Component {
  
  state = { visible: false, rateModal: false }
  showModal = () => {
    console.log(this.props)
    this.setState({
      visible: true,

    });
  }
  showRateModal = () => {
    console.log(this.props)
    this.setState({
      rateModal: true,

    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleRateOk = (e) => {
    console.log(e);
    this.setState({
      rateModal: false,
    });
  }
  openNotification = () => {
    notification.config({
        placement: 'bottomRight',
    });
    notification.open({
      message: 'Rate Successfully Sent',
      description: 'Thanks for you cooperation',
    });
    this.setState({
      rateModal: false,
    });
  };
  handleRateancel = (e) => {
    console.log(e);
    this.setState({
      rateModal: false,
    });
  }
  render() {
  
  return (
    <section className={`notification-card ${this.props.dataSource.status}`}>
        {this.props.dataSource.status === 'pending' &&
        <div>
          <Button className={this.props.dataSource.status} disabled icon="loading-3-quarters"/> <span>The request for {this.props.dataSource.applicationNo} service is on process</span>
          <Button className="details-btn" onClick={this.showModal}> View Details </Button>
        </div>
        }
        {this.props.dataSource.status === 'approved' &&
        <div>
          <Button className={this.props.dataSource.status} disabled icon="check"/> <span>Your application for {this.props.dataSource.applicationNo} has been approved</span>
          <Button className="details-btn" onClick={this.showModal}> View Details </Button>
        </div>
        }
        {this.props.dataSource.status === 'deployment' &&
        <div>
          <Button className={this.props.dataSource.status} disabled icon="to-top"/> <span>Your request {this.props.dataSource.applicationNo} service is for deployment</span>
          <Button className="details-btn" onClick={this.showModal}> View Details </Button>
        </div>
        }
        {this.props.dataSource.status === 'rejected' &&
        <div>
          <Button className={this.props.dataSource.status} disabled icon="close-circle"/> <span>Your application for {this.props.dataSource.applicationNo} has been rejected</span>
          <Button className="details-btn" onClick={this.showModal}> View Details </Button>
        </div>
        }
        {this.props.dataSource.status === 'finised' &&
        <div>
          <Button className={this.props.dataSource.status} disabled icon="check-circle"/> <span>Your service for {this.props.dataSource.applicationNo} has been done</span>
          <Button className="details-btn" onClick={this.showRateModal}> Rate </Button>
        </div>
        }
        <Modal
          title="Service Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h3>Application No. {this.props.dataSource.applicationNo}</h3>
          <h5>Package Name: {this.props.dataSource.packageName}</h5>
          <h5>Location: {this.props.dataSource.location}</h5>
          <h5>Package Price: {this.props.dataSource.packagePrice}</h5>
          <h5>Service: {this.props.dataSource.service}</h5>
          <h5>Type: {this.props.dataSource.type}</h5>
          <div className="spacer"/>
          <h5>Item</h5>
          {this.props.dataSource.details.map(item => (
            <h5>{item}</h5>
          ))}
        </Modal>
        <Modal
          title="Service Details"
          visible={this.state.rateModal}
          onOk={this.openNotification}
          onCancel={this.handleRateCancel}         
          footer={[
            <Button key="back" onClick={this.handleRateCancel}>Return</Button>,
            <Button key="submit" type="primary" onClick={this.openNotification}>
              Submit
            </Button>,
          ]}
 
        >
          <h3>Application No. {this.props.dataSource.applicationNo}</h3>
          <h5>Package Name: {this.props.dataSource.packageName}</h5>
          <h5>Location: {this.props.dataSource.location}</h5>
          <h5>Package Price: {this.props.dataSource.packagePrice}</h5>
          <h5>Service: {this.props.dataSource.service}</h5>
          <h5>Association: {this.props.dataSource.association}</h5>
          <h5>Type: {this.props.dataSource.type}</h5>
          <div className="spacer"/>
          <h5>Rate</h5>
          <RadioGroup >
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
            <Radio value={5}>5</Radio>
          </RadioGroup>
          <h5>Comments</h5>
          <TextArea />
        </Modal>
    </section>
  )};
};

export default NotificationCard;
