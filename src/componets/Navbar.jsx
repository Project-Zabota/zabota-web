import React from 'react';
import test from './../img/test.png';
import vector_3 from './../img/vector-3.svg';
import vector_1_1 from './../img/vector-1-1.svg';
import vector_10 from './../img/vector-10.svg';
import vector_9 from './../img/vector-9.svg';
import archive_1 from './../img/archive-1.png';
import graph from './../img/graph.png';
import message from './../img/message.png';



function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbar-group">
            <button className="text-wrapper">Бэклог заявок</button>
            <div className="overlap-2">
              <div className="rectangle"></div>
              <div className="group">
                <button className="text-wrapper-2">Список заявок</button>
                <img className="test" src={test} />
                <img className="vector" src={vector_3} />
              </div>
              <img className="img" src={vector_1_1} />
              <img className="vector-2" src={vector_10} />
              <img className="vector-3" src={vector_10} />
            </div>
            <button className="text-wrapper-3">Заявки в работе</button>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper"><div className="text-wrapper-4">3</div></div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper"><div className="text-wrapper-4">6</div></div>
            </div>
          </div>
          <img className="vector-4" src={vector_9} />
          <div className="group-2">
            <button className="text-wrapper-5">Чат</button>
            <img className="message" src={message} />
          </div>
          <div className="group-3">
            <button className="text-wrapper-6">Архив заявок</button>
            <img className="archive" src={archive_1} />
          </div>
          <div className="group-4">
            <button className="text-wrapper-7">Аналитика</button>
            <img className="graph" src={graph} />
          </div>
        </nav>
    )
}

export default Navbar