import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'antd/lib/icon';
import NotificationCard from './component/notificationCard';
import { data } from '../../common/data/notification'
const NotificationCenter = () => {
  return (
    <span>
        <h3>NotificationCenter</h3>
        <div className="notification-center">
        {data.map(item => (
            <div>
            <NotificationCard dataSource={item}/>
            <div className="spacer"/>
            </div>
        ))}
        </div>
    </span>
  );
};

export default NotificationCenter;
