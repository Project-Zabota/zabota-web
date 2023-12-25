import React from 'react';
import detail from './../img/vector.svg';
import "./../css/custom/Request.css";
import "./../css/bootstrap/bootstrap.css";


function Request(props) {
    return (
        <div className="request">
            <div className="request-bar d-flex justify-content-between">
                <div className="d-flex flex-row">
                    <div className="request-num">Заявка № {props.number}</div>
                    <div className="status">{props.status}</div>
                </div>
                <button className="detail"><img src={detail} height="auto"/></button>
            </div>
            <div className="date">{props.date.toLocaleString("ru-Ru")}</div>
        </div>
    )
}

export default Request
