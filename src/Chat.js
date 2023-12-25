import "./css/custom/Chat.css";
import "./css/bootstrap/bootstrap.css";
import Navbar from "./componets/Navbar";



function Chat() {
  return (
    <div className="container-fluid vh-100 main-body">
        <div className="row h-100">
            <Navbar />
            <div className="col-2"></div>
            <div className="col-7 d-flex flex-column main-content h-100">
                <div className="chat-container d-flex">
                    <div className="chat-window">
                        <div className="chat-wrapper">
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
                            <h1>Мой батя ебашит вообще адовые блюда. Ну такой вот примерно рецепт усредненный, потому что вариаций масса. Берется суп, он не греется, греть – это не про моего батю. Он берет это суп, вываливает его на сковороду и начинает жарить. Добавляет в него огромное количество лука, чеснока, перца черного и красного МУКИ! для вязкости, томатная паста сверху. Все это жарится до дыма. Потом снимается с огня и остужается на балконе. Потом батя заносит и щедро полив майонезом начинает есть. При этом ест со сковороды шкрябая по ней ложкой. Ест и приговаривает полушепотом ух бля. При этом у него на лбу аж пот выступает. Любезно мне иногда предлагает, но я отказываюсь. Надо ли говорить о том какой дичайший пердеж потом?

Вонища такая, что обои от стен отклеиваются.</h1> 
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