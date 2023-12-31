/* eslint-disable jsx-a11y/alt-text */
import "./css/custom/App.css";
import "./css/bootstrap/bootstrap.css";
import Notification from "./componets/Notification";
import Header from "./componets/Header";
import Request from "./componets/Request";
import Navbar from "./componets/Navbar";
import axios from "axios";



function Requests() {

  /*axios.get("http://localhost:3030/api/ticket/get/all").then( r => {
    for (let data of r.data) {
        console.log(data)
    }
  })*/

  let requestData =[
    {
      number: 1,
      status: "В статус",
      date: new Date(2023, 11, 1, 17 ,10)
    },
    {
      number: 2,
      status: "В работе",
      date: new Date(2023, 5, 29, 19 ,52)
    },
    {
      number: 3,
      status: "В коме",
      date: new Date(2023, 3, 22, 20 ,14)
    }
  ];



  return (
    <div className="container-fluid vh-100 main-body">
        <div className="row h-100">
            <Navbar />
            <div className="col-2"></div>
            <div className="col-10 d-flex align-items-center main-content flex-column">
              <Header />
              <div className="col-10 requests d-flex flex-column">
                <Request
                  number={requestData[0].number}
                  status={requestData[0].status}
                  date={requestData[0].date}
                />
                <Request
                  number={requestData[1].number}
                  status={requestData[1].status}
                  date={requestData[1].date}
                />
                <Request
                  number={requestData[2].number}
                  status={requestData[2].status}
                  date={requestData[2].date}
                />
                <Request
                  number={requestData[2].number}
                  status={requestData[2].status}
                  date={requestData[2].date}
                />
                <Request
                  number={requestData[2].number}
                  status={requestData[2].status}
                  date={requestData[2].date}
                />
                <Request
                  number={requestData[2].number}
                  status={requestData[2].status}
                  date={requestData[2].date}
                />
                <Request
                  number={requestData[2].number}
                  status={requestData[2].status}
                  date={requestData[2].date}
                />
              </div>
              <Notification />
            </div>
        </div>
    </div>
  );
}

export default Requests;
