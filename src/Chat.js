import "./css/custom/Chat.css";
import "./css/bootstrap/bootstrap.css";
import Navbar from "./componets/Navbar";
import telegram_logo from './img/telegram.svg';
import send from './img/Send.svg';
import more from './img/more.png';
import supp_icon from './img/Support.svg';
import Notification from "./componets/Notification";


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
                                        <h3 className="username">Имя клиента</h3>
                                        <h4 className="message-time">19:37</h4>
                                    </div>
                                    <p className="message-content">Сообщение клиента</p>
                                </div>
                                <div className="answer col-6">
                                    <div className="user-info d-flex justify-content-between">
                                        <img className="supp-logo" src={supp_icon} alt="лого"/>
                                        <h3 className="username">Имя сотрудника</h3>
                                        <h4 className="message-time">19:37</h4>
                                    </div>
                                    <p className="message-content">Сообщение сотрудника</p>
                                </div>
                                <div className="message col-6">
                                    <div className="user-info d-flex justify-content-between">
                                        <img className="from-logo" src={telegram_logo} alt="лого"/>
                                        <h3 className="username">Имя клиента</h3>
                                        <h4 className="message-time">19:37</h4>
                                    </div>
                                    <p className="message-content">Сообщение клиента</p>
                                </div>
                            </div> 
                        </div>
                        <div className="input-message d-flex justify-content-center col-10">
                            <input className="message-write w-100" type="text" placeholder="Написать сообщение"></input>
                            <button className="send-btn" type="submit"><img className="send" src={send}/></button>
                            <input className="input-more" type="file" accept="image/*"></input>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div className="col-3 d-flex flex-column main-content h-100">
                <div className="action-container d-flex">
                    <div className="action-window col-9">
                        <div className="action-header">
                            <h2 className="action-info">История заявки</h2>
                            <div className="action-status">
                                <h2 className="request-status">Пришла заявка</h2>
                                <h4 className="status-date">17.09.2023 00:00</h4>
                            </div>
                            <div className="action-status">
                                <h2 className="request-status">Принята в работу</h2>
                                <h4 className="status-date">17.09.2023 00:00</h4>
                            </div>
                            <button className="add-action">Добавить действие</button>
                        </div>
                    </div>
                </div>
            </div>
            <Notification />
            
                
                
              
            
        </div>
    </div>
  );
}

export default Chat;
                                