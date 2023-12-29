import React from 'react';
import "./../css/custom/Navbar.css";
import logo from './../img/ic_logo-white 1.svg';
import message from './../img/Message.svg';
import test from './../img/Test.svg';
import archive from './../img/archive.svg';
import graph from './../img/Graph.svg';

function Navbar() {
    return (
        <div className="col-2 d-flex flex-column align-items-center px-3 position-fixed vh-100" id="side_nav">
                <img className="img-fluid mt-5" src={logo} id="logo" alt="Жизнь март"/>
                <div className="nav-elements w-100 d-flex flex-column">
                    <a href="#" className="nav-item">
                        <img src={message}/>
                        Чат
                    </a>
                    <a href="#" className="nav-item active">
                        <img src={test}/>
                        Список заявок
                    </a>
                    <a href="#" className="nav-item">
                        <img src={archive}/>
                        Архив заявок
                    </a>
                    <a href="#" className="nav-item">
                        <img src={graph}/>
                        Аналитика
                    </a>
                </div>  
        </div>
    )
}

export default Navbar