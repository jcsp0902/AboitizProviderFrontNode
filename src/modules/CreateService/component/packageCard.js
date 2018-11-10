import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual'

const propTypes = {
  dataSource: PropTypes.shape({
    location: PropTypes.string,

  }),
  onCardClick: PropTypes.func.isRequired,
}


class PackageCard extends Component {
  state = {
    mode: 0,
    dataSource: {
      location: "",
      status: "",
      packegPrice: 0,
      service: "",
      details: [],
      type: "",
    },
    isViewMore: false,
    numToShow: 4,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps.dataSource', nextProps.dataSource)
    if (!isEqual(nextProps.dataSource, prevState.dataSource)) {
      return {
        dataSource: nextProps.dataSource
      }
    }
    
    return null;
  }

  handleViewMore = () => {
    this.setState(prevState => ({
      isViewMore: !prevState.isViewMore,
      numToShow: !prevState.isViewMore ? prevState.dataSource.details.length : 4,
    }))
  }

  render() {
    const {
      handleEdit,
      handleSave,
      handleCancel,
    } = this.props;
    const {
      dataSource,
      mode,
      isViewMore,
      numToShow,
    } = this.state
    const detailsSlice = dataSource.details.slice(0, numToShow);
    const detailsRender = detailsSlice.map(item => {
      return <div className="item">{item}</div>
    })
    return (
    <section className="package-application-card" onClick={() => this.props.onCardClick(dataSource)}>
      <div className="package-header">
        <div className={`package-name`}>
          <span className="status">Package: {dataSource.packageName.toUpperCase()}</span>
        </div>
      </div>
      <div className="package-application-body">
      <div className="package-info">
        <div className="location">
          {/* <span className="title">Location:</span> {dataSource.location} */}
        </div>
        
        <div className="price">
        <span className="title">
          Estimate Price: {' '} 
        </span> 
          Php {dataSource.packagePrice}
        </div>
        
        <div className="service">
        <span className="title">
          Service: 
        </span>
          {dataSource.service}
        </div>

        <div className="type">
          <span className="title">
          Type: {' '}
          </span>
          Service Only
        </div>
        
        <div className="details">
          <span className="title">Package Details: </span> 
          <div className="items">
            {detailsRender}
          </div>
        </div>
      </div>
      </div>
    </section>
    )
  }
}

export default PackageCard;