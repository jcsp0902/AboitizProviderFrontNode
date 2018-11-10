import React, { Component } from 'react'
import { dataSource , packages } from './dataSource';
import isEqual from 'lodash/isEqual';
import Button from 'antd/lib/button';
import PackageCard from '../../components/PackageCard';


class Home extends Component {
  state = {
    dataSource: [],
    testData:  {
      id: 1,
      applicationId: 1,
      packageName: 'A',
      status: "Pending",
      location: "Blk 10 Lot 18 Taas, Pulilan, Bulacan",
      packagePrice: 10000,
      bidderAssigned: "Maridin Association",
      accomplishDate: "March 2, 1996",
      service: "Installation",
      type: "Service",
      details:[
        "2 Lights",
        "5 Outlet",
        "4 Wirings",
        "2 Light walls",
        "10 Lamps",
      ]
    },
  };

  componentDidMount() {
    this.setState({
      dataSource,
    })
  }
  handleEdit = () => {
    this.setState({
      testData:  {
        id: 1,
        applicationId: 1,
        packageName: 'A',
        status: "Bidding",
        location: "Blk 10 Lot 18 Taas, Pulilan, Bulacan",
        packagePrice: 10000,
        bidderAssigned: "Maridin Association",
        accomplishDate: "March 2, 1996",
        service: "Installation",
        type: "Service",
        details:[
          "2 Lights",
          "5 Outlet",
          "4 Wirings",
        ]
      },
    })
  }

  handleSave = id => {
    this.props.history.push("/service-application")    
  }

  handleCancel = id => {
    const datas = this.state.dataSource;
    const newDatas = datas.filter(item => !isEqual(item.applicationId, id))
    console.log('newDatas', newDatas)
    this.setState({
      dataSource: newDatas,
    })
  }

  render() {

    return (
      <section className="home-section">
      <div className="title-home">Applications</div>
      <section className="package-card">
      <div className="package-header">
        <div className={`${this.state.testData.status.toLowerCase()}`}>
          <span className="status">{this.state.testData.status.toUpperCase()}</span>
        </div>
      </div>
      <div className="package-body">
      <div className="package-info">
        <div className="location">
          <span className="title">Location:</span> {this.state.testData.location}
        </div>
        
        <div className="name">
          <span className="title">Package Name: </span>
          {this.state.testData.packageName}
        </div>

        <div className="price">
        <span className="title">
          Package Price: {' '} 
        </span> 
          Php {this.state.testData.packagePrice}
        </div>
        
        <div className="service">
        <span className="title">
          Service: 
        </span>
          {this.state.testData.service}
        </div>

        <div className="type">
          <span className="title">
          Type: {' '}
          </span>
          {this.state.testData.type}
        </div>
        
        <div className="details">
          <span className="title">Package Details: </span> 
          <div className="items">
            {this.state.testData.details.map(items => (
              <div className="item">{items}</div>
            ))}
          </div>
          
        </div>
      </div>
      </div>
      <div className="package-footer">
      {this.state.testData.status === 'Pending' &&
        <div className="action-body">
          <span className="action">
            <Button
            type="primary"
            className="action-edit"
            onClick={this.handleEdit}
            >
              Approve for Bidding
            </Button>
          </span>
          <span className="action">
            <Button
              className="action-cancel"
              onClick={this.handleCancel}
            >
              Decline
            </Button>
          </span>
        </div> 
        }
        {this.state.testData.status === 'Bidding' && 
          <div className="bidding-section">
            Bidders Rank:
            <div>
              No Bidders Yet
            </div>
        </div> 
        }
          {this.state.testData.status === 'For Deployment' && 
          <div className="deployment-section">
            <p>Assigned to:</p>
            <p>{this.state.testData.bidderAssigned}</p>
          </div>
          }
          {this.state.testData.status === 'Accomplished' && 
          <div className="deployment-section">
            <p>Assigned to:</p>
            <p>{this.state.testData.bidderAssigned}</p>
            <p>Accomplised Date:</p>
            <p>{this.state.testData.accomplishDate}</p>
          </div>
          }
        </div> 
    </section>
        {this.state.dataSource.map(data => 
          <PackageCard dataSource={data} onSave={this.handleSave} onCancel={this.handleCancel} />
        )}
      </section>
    )
  }
}

export default Home;

// {dataSource.map(data => 
//   <PackageCard dataSource={data} />
// )}