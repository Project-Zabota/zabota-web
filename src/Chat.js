import "./css/custom/Chat.css";
import "./css/bootstrap/bootstrap.css";
import Navbar from "./componets/Navbar";
import telegram_logo from './img/telegram.svg';


function Chat() {
  return (
    <div className="container-fluid vh-100 main-body">
        <div className="row h-100">
            <Navbar />
            <div className="col-2"></div>
            <div className="col-7 d-flex flex-column main-content h-100">
                <div className="chat-container d-flex">
                    <div className="chat-window col-10">
                        <div className="chat-header">
                            <h2 className="chat-info">Отдел, сотрудник, имя клиента</h2>
                            <div className="chat-value d-flex justify-content-evenly">
                                <h2 className="request-num">Заявка № 1</h2>
                                <div className="problem-block">
                                    <h3 className="problem">Проблема</h3>
                                    <h4 className="problem-descript">Проблема с кассой</h4>
                                </div>
                                <h3 className="telephone-num">Номер телефона</h3>
                            </div>
                            
                        </div>
                        <div className="chat-content justify-content-center">
                            <div className="discussion">
                                <div className="message col-6">
                                    <div className="user-info d-flex justify-content-between">
                                        <img className="from-logo" src={telegram_logo} alt="лого"/>
                                        <h3 className="username">Черчиль</h3>
                                        <h4 className="message-time">19:37</h4>
                                    </div>
                                    <p className="message-content">Сообщение клиента</p>
                                </div>
                                <div className="answer col-6">
                                    <div className="user-info d-flex justify-content-between">
                                        <img className="from-logo" src={telegram_logo} alt="лого"/>
                                        <h3 className="username">Черчиль</h3>
                                        <h4 className="message-time">19:37</h4>
                                    </div>
                                    <p className="message-content">Сообщение клиента</p>
                                </div>
                                <div className="message col-6">
                                    <div className="user-info d-flex justify-content-between">
                                        <img className="from-logo" src={telegram_logo} alt="лого"/>
                                        <h3 className="username">Черчиль</h3>
                                        <h4 className="message-time">19:37</h4>
                                    </div>
                                    <p className="message-content">Сообщение клиента</p>
                                </div>
                            </div> 
                        </div>
                        <div className="input-block d-flex justify-content-center col-10">
                            <input className="message-write w-100" type="text" placeholder="Написать сообщение"></input>
                            <button className="send-btn" type="submit"></button>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="col-3 d-flex flex-column main-content h-100"></div>
                
                
              
            
        </div>
    </div>
  );
}

export default Chat;
                                