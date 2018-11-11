import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Tabs from 'antd/lib/tabs';
import notification from 'antd/lib/notification';
import PackageCard from './component/packageCard';
import { dataSource, dataSourceAddress } from './dataSource';
const TabPane = Tabs.TabPane;
// const CheckboxGroup = Checkbox.Group;

class CreateService extends Component {
 state = {
     value: 1,
     package: '',
     createNew: false,
     totalPrice: 0,
     datas: dataSource
 }
 onChange = e => {
    console.log(e.target.checked)
    if (e.target.checked) {
        this.setState({totalPrice: this.state.package.packagePrice + 10000})
    } else {
        this.setState({totalPrice: 0})
    }
   
 }
 toAddress = source => {
     console.log(source)
     this.setState({value: 2, package: source})
 }
 toPackage = () => {
    this.setState({value: 1})
 }
 toReview = () => {
    this.setState({value: 3})
 }
 openNotification = () => {
    notification.config({
        placement: 'bottomRight',
    });
    notification.open({
      message: 'Application Successfull',
      description: 'Your application has been submitted and waiting for approval',
    });
  };
  onCardClick = value => {
      console.log(value)
  }
  hidePlus = () => {
    this.setState({createNew: true})
  }
  stateSave = () => {
      const data = [{
          packageName: document.getElementById("name").value,
          packagePrice: document.getElementById("price").value,
          service: "Installation",
          type: "All In",
          details: [
            document.getElementById("lights").value + "Lights",
            document.getElementById("outlet").value + "Outlets",
          ]
      }]
      console.log(data)
      this.setState(prevState => ({
        datas: [...prevState.datas, ...data],
        createNew: false
      }), () => {
          console.log(this.state.datas)
          document.getElementById("lights").value = ""
          document.getElementById("outlet").value = ""
          document.getElementById("price").value = ""
          document.getElementById("name").value = ""

      });
  }
  render() {
    return (
      <section className="application-section">
                {this.state.value === 1 &&
                <div>
                    
                    {this.state.datas.map(item => (
                        <div className={`card ${item.packageName    }`}>
                        <PackageCard dataSource={item}/>
                        </div>
                    ))}
                    {!this.state.createNew && 
                    <div className="defaultAddress" onClick={this.hidePlus}>
                    <Icon type="plus-circle" />
                    </div> 
                    }
                     {this.state.createNew && 
                    <div className="defaultAddress" onClick={this.hidePlus}>
                    <div className="package-name">
                        <span className="title">Package Name: </span> <Input id="name"/>
                    </div>
                    <div className="price">
                        <span className="title">Estimated Price: </span><Input id="price"/> 
                    </div>
                    <div className="details">
                        <div className="title">Package Details: </div>
                        <span className="title">Lights:</span>
                        <Input className="lights-input" id="lights"/>  
                        <span className="title">Outlet:</span>
                        <Input className="outlet-input" id="outlet"/>
                    </div>
                    <div className="footer-button">
                        <Button className="action-save" type="primary" onClick={this.stateSave}>Save</Button>
                    </div>
                    </div> 

                    }
                
                    {/* <div className="next-btn">
                        <Button type="primary" onClick={this.toAddress}>Next</Button>
                    </div> */}
                </div>
                }    
               
           
      </section>
    );
  }
}

export default CreateService;
