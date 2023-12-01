import React from 'react';
import vector_11 from './../img/vector-11.svg';
import vector_12 from './../img/vector-12.svg';

function Header() {
    return (
        <div className="header">
            <div className="text-wrapper-8">Заявки</div>
            <div className="overlap-3">
                <img className="vector-5" src={vector_11} /> 
                <img className="vector-6" src={vector_12} />
            </div>
            <button className="text-wrapper-9">Бэклог заявок</button>
            <button className="text-wrapper-10">Заявки в работе</button>
            <div className="group-5">
                <div className="div-wrapper">
                    <div className="text-wrapper-4">4</div>
                </div>
            </div>
            <div className="group-6">
                <div className="div-wrapper">
                    <div className="text-wrapper-4">8</div>
                </div>
            </div>
        </div>
    )
}

export default Header