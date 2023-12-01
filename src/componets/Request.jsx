import React from 'react';
import polygon_1 from './../img/polygon-1.svg';
import vector from './../img/vector.svg';

function Request(props) {
    return (
        <div className="request">
            <div className="text-wrapper-14">Заявка № {props.number}</div>
            <div className="text-wrapper-12">{props.status}</div>
            <div className="text-wrapper-13">{props.date.toLocaleString("ru-Ru")}</div>
            <img className="vector-8" src={vector} />
            <div className="overlap-6">
                <div className="rectangle-2"></div>
                <div className="text"></div>
                <div className="rectangle-3"></div>
                <div className="text-wrapper-15">Высокий приоритет</div>
            </div>
            <img className="polygon" src={polygon_1} />
        </div>
    )
}

export default Request