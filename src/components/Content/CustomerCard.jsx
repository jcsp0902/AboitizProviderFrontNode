import React from 'react';
// import { Link } from 'react-router-dom';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import Select from 'antd/lib/select'

const Option = Select.Option;

class CustomerCard extends React.Component {
//   const {
//     prequalRequest,
//     prequalPending,
//     prequalApproved,
//     viewOnly,
//     mode,
//     viewNowLink,
//     onRequestPrequal,
//     id,
//   } = props;
    state = { visible: false }

    showModal = () => {
    this.setState({
        visible: true,
    });
    }
    handleChange = value => {
       console.log(value)
    }
    render () {
        return (
        <div className="customer-card">
            <span> Location: Chenes chebureche che che </span>
            <span> Package: Type </span>
            <span> Package: A (2 light, 2 CO) </span>
            <span> Package Price: $10000 </span>
            <span> Status: Pending </span>
            <div>
            <Button className="btn-default" onClick={this.showModal}> Edit Application </Button>
            </div>
            <Modal
            title="Edit Application"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
                <h3>Package:</h3>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
 
            </Modal>
        </div>
        );
    }
};

export default CustomerCard;
