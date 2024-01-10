import React from 'react';
import "./../css/custom/Request.css";
import "./../css/bootstrap/bootstrap.css";

export const REQUEST_STATUS = {
    "IN_WORK": {
        "sortIndex": 0,
        "name": "В работе"
    },
    "CREATED": {
        "sortIndex": 1,
        "name": "Создана"
    },
    "CLOSED": {
        "sortIndex": 2,
        "name": "Закрыта"
    }
}

function Request(props) {
    return (
        <div className="request">
            <div className="request-bar d-flex justify-content-between">
                <div className="d-flex flex-row">
                    <div className="request-num">Заявка № {props.number}</div>
                    <div className="status">{REQUEST_STATUS[props.status].name}</div>
                </div>
            </div>
            <div className="">{props.name}</div>
            <div className="date">{props.date}</div>
        </div>
    )
}

export default Request
