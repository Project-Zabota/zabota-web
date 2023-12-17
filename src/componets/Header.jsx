import React from 'react';
import add_img from './../img/add.png';
import "./../css/custom/Header.css";

function Header() {
    return (
        <div className="header-container">
            <div className="col-10 d-flex justify-content-between header-content">
                <h2 id="tag">Заявки</h2>
                <a href="#" className="button">
                    <div className="btn-content d-flex justify-content-center">
                        <img className="add-img" src={add_img}/>
                        Добавить заявку
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Header
