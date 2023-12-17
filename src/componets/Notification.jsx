import React from 'react';
import bell from './../img/bell.png';
import "./../css/custom/Notification.css";


function Notification() {
    return (
      <a href="#" className="bell-container fixed-bottom">
        <img src={bell} alt="Уведомление" id="bell-img"/>
        <span className="bell-value">1</span>
      </a>
    )
}

export default Notification
