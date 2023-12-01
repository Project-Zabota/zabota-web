import React from 'react';
import add from './../img/add-2-1.png';


function AddRequest() {
    return (
        <button className="add-request">
          <div className="text-wrapper-16">Добавить заявку</div>
          <img className="add" src={add}/>
        </button>
    )
}

export default AddRequest