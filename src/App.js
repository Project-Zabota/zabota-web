/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import AddRequest from "./componets/AddRequest";
import FavRequest from "./componets/FavRequest";
import Header from "./componets/Header";
import Navbar from "./componets/Navbar";
import Request from "./componets/Request";
import axios from "axios";


function App() {
  
  /*axios.get("http://localhost:3030/api/ticket/get/all").then( r => {
    for (let data of r.data) {
        console.log(data)
    }
  })
  */
  var requestData =[
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
    <div className="desktop">
      <div className="container">
        <Navbar />
        <Header />
        <FavRequest 
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
        <AddRequest />
      </div>
    </div>
  );
}

export default App;
