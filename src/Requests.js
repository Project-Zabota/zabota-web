/* eslint-disable jsx-a11y/alt-text */
import "./css/custom/App.css";
import "./css/bootstrap/bootstrap.css";
import Notification from "./componets/Notification";
import Header from "./componets/Header";
import Request, {REQUEST_STATUS} from "./componets/Request";
import Navbar from "./componets/Navbar";
import AuthService from "./service/AuthService";
import Network from "./service/Network";
import React from 'react';

class Requests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tickets: []
        }
    }

    sortRequests = (r1, r2) =>
       REQUEST_STATUS[r1.status].sortIndex > REQUEST_STATUS[r2.status].sortIndex ? -1 : 1;



    ticketRequest = () => {
        Network.get("ticket/all/by/user", {
            headers: {
                Authorization: AuthService.getAuthHeader()
            }
        })
        .then(r => {
            this.setState({
                tickets: r.data
            })
        })
        .catch(() => alert("Произошла ошибка. Попробуйте позже."))
    };

    componentDidMount() {
        this.ticketRequest()
        setInterval(() => {
            console.log("send tickets request")
            this.ticketRequest()
        }, 2000);
    }

    render() {
        AuthService.require();
        return (
            <div className="container-fluid vh-100 main-body">
                <div className="row h-100">
                    <Navbar/>
                    <div className="col-2"></div>
                    <div className="col-10 d-flex align-items-center main-content flex-column">
                        <Header/>
                        <div className="col-10 requests d-flex flex-column">
                            {
                                this.state.tickets
                                    .sort(this.sortRequests)
                                    .map(d => {
                                        return <Request
                                            number={d.id}
                                            name={d.name}
                                            status={d.status}
                                        />
                                    })
                            }
                        </div>
                        <Notification/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Requests
