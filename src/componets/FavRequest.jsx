import React from 'react';
import badge_1 from './../img/badge-1.png';
import vector from './../img/vector.svg';

function FavRequest(props) {
  
    return (
        <div className="fav-request">
          <div className="text-wrapper-11">Заявка № {props.number}</div>
          <div className="text-wrapper-12">{props.status}</div>
          <div className="text-wrapper-13">{props.date.toLocaleString("ru-Ru")}</div>
          <img className="badge" src={badge_1} />
          <img className="vector-7" src={vector} />
        </div>
    )
}

export default FavRequest