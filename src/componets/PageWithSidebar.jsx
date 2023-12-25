import React from 'react';
import Navbar from "./componets/Navbar";
import "./../css/bootstrap/bootstrap.css";
import "./../css/custom/PageWithSidebar.css";

function PageWithSidebar() {
    return (
        <div className="container-fluid vh-100 main-body">
            <div className="row h-100">
                <Navbar />
                <div className="col-2"></div>
                <div className="col-10 d-flex align-items-center main-content flex-column">
                
                </div>
            </div> 
        </div> 
    )
}

export default PageWithSidebar
